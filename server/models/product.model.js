const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title of the product."],
        minlength: [3, "Title must be at least 3 characters long."]
    },
    price: {
        type: Number,
        required: [true, "Please enter price of the product."],
        min: [0.01, "Price must be a positive value."]
    },
    description: {
        type: String,
        required: [true, "Please enter short description of the product."],
        minlength: [5, "Description must be at least 5 characters long."]
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product