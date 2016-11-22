var mongoose = require('mongoose');

var mobileoperatorSchema = new mongoose.Schema({
    name: String,
    value: String,
});

module.exports = mongoose.model('Mobileoperator', mobileoperatorSchema);
