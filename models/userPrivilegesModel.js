const mongoose = require('mongoose')

const userPrivilegesSchema = new mongoose.Schema({
    roleID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    taskID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('userPrivileges', userPrivilegesSchema)