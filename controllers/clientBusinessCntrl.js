const clientBusinesses = require('../models/clientBusinessModel')

const clientBusinessCntrl = {
    register: async (req, res) =>{
        try {
            const {
                ownerID,TIN, businessName, companyName, city, subCity, kebele, woreda, buildingName, officeNumber, telephone, eamil, fax, machine
            } = req.body;

            const business = await clientBusinesses.findOne({ TIN })
            
            if(business) return res.status(400).json({msg: "There is a business with this TIN, please check the TIN!"})

            const newBusiness = new clientBusinesses({
                ownerID, TIN, businessName, companyName,
                TL_Image: "mmmm", 
                city, subCity, kebele, woreda, buildingName, officeNumber, telephone, eamil, fax, machine
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
            res.json({msg: "This method works successfuly!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    eidtBusinesDetail: async(req, res) =>{
        // edit detail if if the owner have not submit valid credintals
        try {
            res.json({msg: "This method works successfuly!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    getMyBusineses: async (req, res) =>{
        // this fetchs all the businesses of an owner
        try {
            res.json({msg: "This method works successfuly!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    getBusinessDetail: async (req, res) =>{
        // fetch the detail of a single business
        try {
            res.json({msg: "This method works successfuly!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    assigneMachien: async (req, res) =>{
        // this updates status in amchine collection &  machine in business collection
        try {
            res.json({msg: "This method works successfuly!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}

module.exports = clientBusinessCntrl;