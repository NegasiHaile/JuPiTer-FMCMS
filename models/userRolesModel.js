const mongoose = require('mongoose');

const userRolesSchema = new mongoose.Schema({
    roleType: {
        type: String,
        required: true
    },

}, { timestamps: true });


module.exports = mongoose.model('userRoles', userRolesSchema)