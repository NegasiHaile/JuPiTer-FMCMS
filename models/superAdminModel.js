const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        default: "unknown"
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Users', superAdminSchema)