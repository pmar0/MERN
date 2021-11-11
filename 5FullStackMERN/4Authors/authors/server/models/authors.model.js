const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Field is required!"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    
}, {timestamps: true});

const author = mongoose.model('author', AuthorSchema);

module.exports = author;