const uuid = require('uuid');
const path = require('path');
const {Product, ProductInfo} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController{
    async create(req, res, next){
        try {
        const {name, price, categoryId, brandId, info } = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const device = await Product.create({name, price, categoryId, brandId, img: fileName})
        
        if(info){
            info = JSON.parse(info);
            info.forEach(element => {
                ProductInfo.create({
                    title: element.title,
                    description: element.description,
                    deviceId: device.id
                })
            });
        }
        
        return res.json({device});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
        
    }
    async get(req, res){
        const {id} = req.params;
        const product = await Product.findOne(
            {
                where: { id },
                include: [{model: ProductInfo, as: 'info'}] 
            })
        return res.json({product});
    }
    async getAll(req, res){

        let {categoryID, brandId, limit, page } = req.query;

        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;

        let products;
        if(!categoryID && !brandId){
            products = await Product.findAll({limit, offset});
        }
        if(categoryID && !brandId){
            products = await Product.findAll({ where:{categoryID}, limit, offset});
        }
        if(!categoryID && brandId){
            products = await Product.findAll({ where:{brandId}, limit, offset});
        }
        if(categoryID && brandId){
            products = await Product.findAll({ where:{categoryID, brandId}, limit, offset});
        }

        return res.json({products});
    }
    async delete(req, res){

    }
}

module.exports = new ProductController();