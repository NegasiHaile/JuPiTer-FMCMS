const Branchs = require("../models/branchModel")
const Users = require("../models/userModel")
const Machines = require("../models/machineModel")

const branchsCntrl = {
    openNewBranch: async (req, res) =>{
        try {
            const newBranch = new Branchs({
                branchName,city,subCity,kebele,woreda,buildingName,officeNumber,telephone,eamil,fax,Description
            } = req.body)

            const branch = await Branchs.findOne({'branchName': branchName})

            if(branch) return res.status(400).json({msg: "There is a branch with this name, please use unique one!"})

            await newBranch.save()
            res.json("Branch has been opened successfully!")
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    getBranchs: async (req, res) =>{
        try {
            res.json( await Branchs.find())
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    editBranchDetail: async (req, res) =>{
        try {
            await Branchs.findOneAndUpdate({_id: req.params.branchId}, {
                branchName,city,subCity,kebele,woreda,buildingName,officeNumber,telephone,eamil,fax,Description
            }= req.body)
            res.json({msg: "Branch detail has been edited successfully!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    deleteBranch: async (req, res) =>{
        try {
            await Branchs.findByIdAndDelete(req.params.branchId)
            res.json({msg: "Branch detail has been deleted successfully!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    branchDashboard: async (req, res) =>{
        // getEmployeePerBranch
        // getclientsPerBranch
        // getMachinesPerBranch
        // salesPerbranch
    },
    // Branch dashboard 
    getEmployeePerBranch: async (req, res) =>{
        try {
            // retrive employee of single branch
            res.json(await Users.find({"branch": req.params.branchId}))
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    // getbusinessesPerBranch: async (req, res) =>{
    //     try {
    //         res.json(await Businesses.find({"branch": req.params.branchId}))
    //     } catch (error) {
    //         res.status(500).json({msg: error.message})
    //     }
    // },
    getMachinesPerBranch: async (req, res) =>{
        try {
            res.json(await Machines.find({"branch": req.params.branchId}))
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    salesPerbranch: async (req, res) =>{
        try {
            // SELECT * FROM machines WHERE branch = 'req.params.id' AND machineStatus = 'sold'
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
}

module.exports = branchsCntrl;