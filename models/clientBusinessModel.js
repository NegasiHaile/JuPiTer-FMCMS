const mongoose = require("mongoose");

const ObjectID = mongoose.Schema.Types.ObjectID;

const clientBusinessSchema = new mongoose.Schema(
  {
    // business detail
    ownerID: {
      type: ObjectID,
      required: true,
    },
    TIN: {
      type: String,
      unique: true,
      required: true,
    },
    businessName: {
      type: String,
      unique: true,
      required: true,
    },
    companyName: {
      type: String,
    },
    TL_Image: {
      type: String,
      required: true,
    },
    // Address
    city: {
      type: String,
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
      type: String,
    },
    // Contacts
    telephone: {
      type: String,
    },
    eamil: {
      type: String,
    },
    fax: {
      type: String,
    },
    // under which branch is this request
    branch: {
      type: ObjectID,
      require: true,
    },
    // Machine assignment
    machine: {
      type: String,
      default: "unassigned", // requested, Assigned, unssigned
    },
    // Technician assignment
    sw_Tech: {
      type: ObjectID, // values:- unassigned / sw-technician id
      default: null,
    },
    hw_Tech: {
      type: ObjectID, // vales:- unassigned / hw-technician id
      default: null,
    },
    credentials: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("clientBusinesses", clientBusinessSchema);
