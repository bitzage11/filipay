var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId: { type: String, unique: true, index: true },
    name: String,
    password: String,
    email: String,
    mobile: String,
    type: String,
});

module.exports = mongoose.model('Users', userSchema);
