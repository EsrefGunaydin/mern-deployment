const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a pirate name. Name is required."],
        minlength: [2, "Pirate name must be at least 2 chars."]
    },
    img_url: {
        type: String,
        required: [true, "Please provide an img url."],
    },
    treasures: {
        type: Number,
        required: [true, "Pick at least one treasure chest."],
        min: [1, "A pirate without a chest is not a real pirate."],
    },
    phrase: {
        type: String,
        required: [true, "Please provide a catch phrase"],
        minlength: [5, "Can't be less than 5 characters."]
    },
    position: {
        type: String,
        required: [true, "Please choosee a position for your pirate"],
        minlength: [5, "Can't be less than 5 characters."]
    },
    feature1: {
        type: Boolean,
        // required : [true]
    },
    feature2: {
        type: Boolean,
        // required : [true]
    },
    feature3: {
        type: Boolean,
        // required : [true]
    },

}, { timestamps: true });

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);