const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Field is required!"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    price: {
        type: Number,
        required: [true,"Field is required!"],
        min: [0.01,"Price must be greater than 0!"]
    },
    description: {
        type: String,
        required: [true,"Field is required!"],
        minLength: [10,"Field requires minimum of 10 characters!"]
    },
    
}, {timestamps: true});

const product = mongoose.model('product', productSchema);

module.exports = product;