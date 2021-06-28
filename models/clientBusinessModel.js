const mongoose = require('mongoose');

const ObjectID = mongoose.Schema.Types.ObjectID;

const clientBusinessSchema = new mongoose.Schema({
    // business detail
    ownerID:{
        type: ObjectID,
        required: true
    },
    TIN:{
        type: String,
        unique: true,
        required: true
    },
    businessName:{
        type: String,
        required: true
    },
    companyName:{
        type: String
    },
    TL_Image:{
        type: String,
        required: true
    },
    // Address
    city:{
        type: String
    },
    subCity: {
        type: String,
    },
    kebele: {
        type: String,
    },
    woreda: {
        type: String,
    },
    buildingName: { 
        type: String,
    },
    officeNumber: {
        type: String
        },
    // Contacts
    telephone: {
        type: String
        },
    eamil: {
        type: String
        },
    fax: {
        type: String
        },
    // Machine assignment
    machine: {
        type: String, // vales:- assigned / unassigned
        default: "Unassigned"
    },
    machineAssignDate: {
        type: Date, // date of the machine assigned to this machine
    },
    // Technician assignment
    sw_Tech: {
        type: String, // vales:- assigned / unassigned
        default: "Unassigned"
    },
    hw_Tech: {
        type: String, // vales:- assigned / unassigned
        default: "Unassigned"
    }
}, { timestamps: true })

module.exports = mongoose.model('clientBusinesses', clientBusinessSchema)