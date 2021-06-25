const mongoose = require('mongoose');
 
const ObjectId = mongoose.Schema.Types.ObjectId

const salesSchema = new mongoose.Schema({
    clientId :{
        type: ObjectId,
        required: true
    },
    machineId:{
        type: ObjectId,
        required: true
    },
    salesType:{
        type: String,
    },
    salesDate: {
        type: Date,
        default: Date.now
    }
})
 
module.exports = mongoose.model('Sales', salesSchema)