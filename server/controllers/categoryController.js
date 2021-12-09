const { Category } = require("../models/models");
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class CategoryController {
    async create(req, res) {
            const { name, parentName, brandId } = req.body;

            const parent = await Category.findOne({ where: { name: parentName } });
            
            let hierarchyLevel;
            let parentId;

            if (parent) {
                hierarchyLevel = parent.hierarchyLevel + 1;
                parentId = parent.id;
            } else {
                hierarchyLevel = 1;
                parentId = null;
            }
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
            const category = await Category.create({ name, hierarchyLevel, parentId, img: fileName, brandId })
            return res.json({ category });
    }

    async getAll(req, res) {
        const category = await Category.findAll();
        return res.json({ category });
    }
    async getParent(req, res) {
        let category;
        if(req.query.parentId){
            category = await Category.findAll({ where: { parentId: req.query.parentId } });
        } else {
            category = await Category.findAll({ where: { hierarchyLevel: 1 } });
        }
        return res.json({category});
    }
    async delete(req, res) {
        const {name} = req.body;
        const category = await Category.destroy({ where: { name } });
        return res.json({ category });
    }
}

module.exports = new CategoryController();