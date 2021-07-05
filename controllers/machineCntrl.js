const Machines = require('../models/machineModel');
const clientBusinesses = require('../models/clientBusinessModel')
const Sales = require('../models/salesModel');

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

    getMachineDetail: async (req, res) =>{
        try {
            res.json({msg: await Machines.findById({_id: req.params.id})})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },
    
    editMachine: async(req, res) =>{
        try {
            await Machines.findOneAndUpdate({_id: req.params.id}, {
                serialNumber,machineModel,brand,price,branch,problemStatus
            }= req.body)
            res.json({msg: "Machine has been edited successfully!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    deleteMachine: async(req, res) =>{
        try {
            // sold(distributed) machine haven't to delete
            await Machines.findByIdAndDelete(req.params.id)
            res.json({msg: "Machine has been deleted successfully!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    distributMachine: async(req, res) =>{
        try {
            const {machineId, businessId, status} = req.body

            
            const busibess = await clientBusinesses.findOne({_id: businessId})

            if(busibess.credentials === "Pending") return res.json({msg: "The credentials of this document is not accepted yet!"})
            
            const request = await Sales.findOne({"machineId": req.params.machineId})

            if(request && request.status == 0){

                await Sales.findOneAndUpdate({_id: request.id}, ({
                    status: 1,
                }))
                
                await Machines.findOneAndUpdate({_id: req.params.machineId}, ({
                    salesStatus: "sold",
                }))

                await clientBusinesses.findOneAndUpdate({_id: businessId}, ({
                    machine: "Assigned",
                }))
                res.json({msg: "Machine has been distributed successfully!"})
            }

            else{
                const newSales = new Sales({
                    machineId: req.params.machineId, businessId, status: 1
                    })

                await newSales.save()

                await Machines.findOneAndUpdate({_id: machineId}, ({
                    salesStatus: "sold",
                    }))

                await clientBusinesses.findOneAndUpdate({_id: businessId}, ({
                    machine: "Assigned",
                    }))

                res.json({msg: "Machine has been distributed successfully!"})
            }

            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

    
module.exports = machineCntrl;