var mongoose = require('mongoose');

var mobilecircleSchema = new mongoose.Schema({
    name: String,
    value: String,
});

module.exports = mongoose.model('Mobilecircle', mobilecircleSchema);
