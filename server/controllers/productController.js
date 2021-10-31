const uuid = require('uuid');
const path = require('path');
const {Product} = require('../models/models');

class ProductController{
    async create(req, res){
        const {name, price, categoryId, brandId, info } = req.body;
        const {img} = req.files;
        let fileName = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', fileName));

        const device = await Product.create({name, price, categoryId, brandId, img: fileName})
        return res.json({device});
    }
    async get(req, res){
        const {id} = req.params;
        const product = await Product.findOne({ where: { id } })
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