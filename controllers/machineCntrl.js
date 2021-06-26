const Machines = require('../models/machineModel');
const Sales = require("../models/salesModel");

const machineCntrl = {
    register: async (req, res) =>{
        try {
            const newMachine = new Machines({
                serialNumber,machineModel,brand,price,branch,salesStatus,problemStatus
            }= req.body)

            const machine = await Machines.findOne({'serialNumber': serialNumber})

            if(machine) return res.status(400).json({msg: "Serial number is token!"})

            await newMachine.save()
            res.json({msg: "Machine has been successfuly registered"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    getMachines: async(req, res) =>{
        try {
            res.json({msg: await Machines.find()})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    editMachine: async(req, res) =>{
        try {
            await Machines.findOneAndUpdate({_id: req.params.id}, {
                serialNumber,machineModel,brand,price,branch,salesStatus
            }= req.body)
            res.json({msg: "Machine has been edited successfully!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    deleteMachine: async(req, res) =>{
        try {
            await Machines.findByIdAndDelete(req.params.id)
            res.json({msg: "Machine has been deleted successfully!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    distributMachine: async(req, res) =>{
        try {
            await Machines.findOneAndUpdate({_id: req.params.id}, ({
                salesStatus: "sold"
            }))
            // registerSales()
            const newSales = new Sales({
                clientId: req.body.clientId,
                machineId: req.params.id,
                salesType: req.body.salesType
            })

            await newSales.save();

            res.json({msg: "Machine has been distributed successfully!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

// const registerSales = async(req, res) =>{
//         try {
//             const newSales = new Sales({
//                 clientId,
//                 machineId: req.params.id,
//                 salesType
//             } = req.body)

//             await newSales.save();
//             res.json({msg: "Sales has been registered successfully!"})
//         } catch (err) {
//             return res.status(500).json({msg: err.message})
//         }
//     }
    
module.exports = machineCntrl;