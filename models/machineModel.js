const mongoose = require('mongoose');

const machineSchema = new mongoose.Schema({
    serialNumber:{
        type: String,
        required: true,
        trim: true
    },

    machineModel:{
        type: String,
    },

    brand:{
        type: String,
    },

    price:{
        type: Number,
    },
    branch:{
        type: String,
        required: true
    },

    salesStatus:{
        type: String,
        default: "Unsold"
    },

    problemStatus:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Machines', machineSchema)