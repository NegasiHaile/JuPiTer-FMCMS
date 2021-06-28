const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectID

const machineSchema = new mongoose.Schema({
    serialNumber:{
        type: String,
        required: true,
        unique: true,
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
        type: ObjectID,
        required: true
    },
    problemStatus:{
        type: String,
        required: true
    },
    salesStatus:{
        type: String,
        default: "Unsold"
    },
    distributedTo:{
        type: ObjectID,
        default: null
    },
    distributedDate:{
        type: Date,
        default: null
    },
    returnedDate:{
        type: Date,
        default: null
    },

},{
    timestamps: true
})

module.exports = mongoose.model('Machines', machineSchema)