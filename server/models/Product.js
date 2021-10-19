const {Schema, model} = require('mongoose');

const schema = new Schema({
    name:{ type: String, required: true, unique:true },
    type: {type: Number, required: true},
    brand: {type: Number, required: true}
});

module.exports = model('Product', schema);