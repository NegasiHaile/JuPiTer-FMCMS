const mongoose = require('mongoose')

const machineSchema = new mongoose.Schema({
    serialNumber:{
        type: String,
        require: true,
        trim: true
    },

    brand:{
        type: String,
    },

},{
    timestamps: true
})

module.exports = mongoose.model('Machines', machineSchema)