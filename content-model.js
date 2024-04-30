const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: String,
    subTitle: String,
    duration: Number,
    genre: [String],
    isAdult: Boolean
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;