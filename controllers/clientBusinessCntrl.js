const clientBusinesses = require("../models/clientBusinessModel");
const Machines = require("../models/machineModel");
const Sales = require("../models/salesModel");

const clientBusinessCntrl = {
  register: async (req, res) => {
    try {
      const {
        ownerID,
        TIN,
        businessName,
        companyName,
        TL_Image,
        city,
        subCity,
        kebele,
        woreda,
        buildingName,
        officeNumber,
        telephone,
        email,
        fax,
        branch,
        sw_Tech,
      } = req.body;

      const business = await clientBusinesses.findOne({ TIN });

      if (business)
        return res.status(400).json({
          msg: "There is a business with this TIN, please check the TIN!",
        });

      const newBusiness = new clientBusinesses({
        ownerID,
        TIN,
        businessName,
        companyName,
        TL_Image: "mmmm",
        city,
        subCity,
        kebele,
        woreda,
        buildingName,
        officeNumber,
        telephone,
        email,
        fax,
        branch,
        sw_Tech,
      });

      await newBusiness.save();
      res.json({ msg: "Business detail registered successfully!" });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  getAllBusinesses: async (req, res) => {
    // this fetchs all the businesses in the collection
    try {
      res.json(await clientBusinesses.find());
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  deleteBusiness: async (req, res) => {
    // delete a business only if it is not assigned a machine yet
    try {
      const bsnss = await clientBusinesses.findById(req.params.busineId);
      if (bsnss.machine === "assigned") {
        return res.status(400).json({
          msg: "This business have assigned a machine, It holds a neccesary data, so you can't delete it!",
        });
      } else {
        await clientBusinesses.findByIdAndDelete(req.params.busineId);
        return res.json({
          msg: "Business detail has been deleted succesfully!",
        });
      }
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  eidtBusinesDetail: async (req, res) => {
    // edit detail if if the owner have not submit valid credintals
    try {
      await clientBusinesses.findOneAndUpdate(
        { _id: req.params.busineId },
        ({
          ownerID,
          TIN,
          businessName,
          companyName,
          TL_Image,
          city,
          subCity,
          kebele,
          woreda,
          buildingName,
          officeNumber,
          telephone,
          email,
          fax,
          branch,
          sw_Tech,
        } = req.body)
      );
      return res.json({ msg: "Business datail has been edited successfuly!" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  acceptCredentials: async (req, res) => {
    try {
    } catch (error) {}
  },
  rejectCredentials: async (req, res) => {
    try {
    } catch (error) {}
  },
  getBusinesesPerOwner: async (req, res) => {
    // this fetchs all the businesses of an owner
    try {
      res.json({
        msg: await clientBusinesses.find({ ownerID: req.params.ownerId }),
      });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  getBusinessDetail: async (req, res) => {
    // fetch the detail of a single business
    try {
      res.json({ msg: await clientBusinesses.findById(req.params.busineId) });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  assignSoftwareTech: async (req, res) => {
    // fetch the detail of a single business
    try {
      await clientBusinesses.findOneAndUpdate(
        { _id: req.params.busineId },
        ({ sw_Tech } = req.body)
      );
      res.json({ msg: "Business has been assigned a software technician!" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  assignHardwareTech: async (req, res) => {
    // fetch the detail of a single business
    try {
      await clientBusinesses.findOneAndUpdate(
        { _id: req.params.busineId },
        ({ hw_Tech } = req.body)
      );
      res.json({ msg: "Business has been assigned a hardware technician!" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  requestMachine: async (req, res) => {
    try {
      const { machineId, businessId, status } = req.body;
      const newrequest = new Sales({
        machineId: req.params.machineId,
        businessId,
        status: 0,
      });

      const busibess = await clientBusinesses.findOne({ _id: businessId });

      if (busibess.credentials === "Pending")
        return res.json({
          msg: "The credentials of this document is not accepted yet!",
        });

      await newrequest.save();

      await Machines.findOneAndUpdate(
        { _id: req.params.machineId },
        {
          salesStatus: "requested",
        }
      );

      await clientBusinesses.findOneAndUpdate(
        { _id: businessId },
        {
          machine: "inRequest",
        }
      );
      res.json({ msg: "Machine has been requested successfully!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = clientBusinessCntrl;
