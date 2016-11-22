var mongoose = require('mongoose');

var dhtoperatorSchema = new mongoose.Schema({
    name: String,
    value: String,
});

module.exports = mongoose.model('Dhtoperator', dhtoperatorSchema);
