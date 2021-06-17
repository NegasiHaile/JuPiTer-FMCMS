const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    branch:{
        type: String,
    },
    role:{
        type: String,
        required: true,
        default: "unknown"
    }
    email:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    }
    image:{
        type: String,
        default: "a link of avator"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Users', employeeSchema)