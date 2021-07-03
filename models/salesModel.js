const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectID

const salesSchema = new mongoose.Schema({
    machineId: {
        type: ObjectID,
        required: true
    },
    businessId: {
        type: ObjectID,
        required: true
    },
    status: {
        type: ,
        required: true
    }
},{
    timestamps: true
})