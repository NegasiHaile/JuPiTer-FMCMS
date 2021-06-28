const clientBusinesses = require('../models/clientBusinessModel')

const clientBusinessCntrl = {
    register: async (req, res) =>{
        try {
            const {
                ownerID,TIN, businessName, companyName, TL_Image, city, subCity, kebele, woreda, buildingName, officeNumber, telephone, eamil, fax
            } = req.body;

            const business = await clientBusinesses.findOne({ TIN })
            
            if(business) return res.status(400).json({msg: "There is a business with this TIN, please check the TIN!"})

            const newBusiness = new clientBusinesses({
                ownerID, TIN, businessName, companyName,
                TL_Image: "mmmm", 
                city, subCity, kebele, woreda, buildingName, officeNumber, telephone, eamil, fax
            });

            await newBusiness.save();
            res.json({msg: "Business detail registered successfully!"})

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    getAllBusinesses: async (req, res) =>{
        // this fetchs all the businesses in the collection
        try {
            res.json(await clientBusinesses.find())
        } catch (error) {
            res.status(500).json({msg: errror.message})
        }
    },
    deleteBusiness: async (req, res) =>{
        // delete a business only if it is not assigned a machine yet
        try {
            const bsnss = await clientBusinesses.findById(req.params.busineId)
            if(bsnss.machine != "Unassigned") return res.json("This business have assigned a machine, so you can't delete it!")
            await clientBusinesses.findByIdAndDelete(req.params.busineId)
            res.json({msg: "Business detail has been deleted succesfully!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    eidtBusinesDetail: async(req, res) =>{
        // edit detail if if the owner have not submit valid credintals
        try {
            await clientBusinesses.findOneAndUpdate({ _id: req.params.busineId }, ({
                ownerID,TIN, businessName, companyName, TL_Image, city, subCity, kebele, woreda, buildingName, officeNumber, telephone, eamil, fax
            } = req.body))
            res.json({ msg: "Business datail has been edited successfuly!" })
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    getBusinesesPerOwner: async (req, res) =>{
        // this fetchs all the businesses of an owner
        try {
            res.json({msg: await clientBusinesses.find({"ownerID": req.params.ownerId})})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    getBusinessDetail: async (req, res) =>{
        // fetch the detail of a single business
        try {
            res.json({msg: await clientBusinesses.findById(req.params.busineId)})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    assignSoftwareTech: async (req, res) =>{
        // fetch the detail of a single business
        try {
            await clientBusinesses.findOneAndUpdate({ _id: req.params.busineId }, ({
                sw_Tech
            } = req.body))
            res.json({msg: "Business has been assigned a software technician!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    assignHardwareTech: async (req, res) =>{
        // fetch the detail of a single business
        try {
            await clientBusinesses.findOneAndUpdate({ _id: req.params.busineId }, ({
                hw_Tech
            } = req.body))
            res.json({msg: "Business has been assigned a hardware technician!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
}

module.exports = clientBusinessCntrl;