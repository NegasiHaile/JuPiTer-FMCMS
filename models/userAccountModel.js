const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({   
    role:{
        type: String,
        required: true,
        default: "unassigned"
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Accounts', accountSchema)