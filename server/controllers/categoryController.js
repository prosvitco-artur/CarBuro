const { Category } = require("../models/models");
const uuid = require('uuid');
const path = require('path');

class CategoryController{
    async create(req, res){
        const {name, parentName, brandId } = req.body;
        const parentId = await Category.findOne({where: { name:parentName }});
        
        if(parentId){
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const category = await Category.create({name, hierarchyLevel: 2, parentId: 2, img: fileName})
            return res.json({category});
        }
        
    }
    async getAll(req, res){
        const category = await Category.findAll();
        return res.json({category});
    }
}

module.exports = new CategoryController();