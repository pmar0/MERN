const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true,"Field is required!"],
        minLength: [3,"Field requires minimum of 3 characters!"]
    },
    punchline: String
}, {timestamps:true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;