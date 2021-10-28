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

    }
    async getAll(req, res){

    }
    async delete(req, res){

    }
}

module.exports = new ProductController();