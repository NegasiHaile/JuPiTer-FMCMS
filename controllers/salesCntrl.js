const Sales = require("../models/salesModel");
 
const salesCntrl = {
    salesDashboard: async (req, res) =>{
        try {
            res.json(await Sales.find())
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}
 
// const getLatestSales = async (req, res) =>{
//     res.json(await Sales.find())
//     }
 
module.exports = salesCntrl;