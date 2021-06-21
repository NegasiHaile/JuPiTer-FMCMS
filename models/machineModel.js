const mongoose = require('mongoose')

const machineSchema = new mongoose.schema({
    serialNumber:{
        Type: String,
        require: true,
        trim: true
    },

    brand:{
        type: String,
    },

    registrationDate:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Machines', machineSchema)