const mongoose = require('../database').mongoose;

const userSchema = mongoose.Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    location: String,
}, {
    timestamps: {},
});

const user = mongoose.model('User', userSchema);

module.exports.model = user;
module.exports.schema = userSchema;
