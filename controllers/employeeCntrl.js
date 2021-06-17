const Users = require('../models/employeeModel');
const bcrypt = require('bcrypt')

// const employeeCntrl = {
//     register: (req, res) =>{
//         res.json({msg: 'Employee controller tested!'})
//     }
// }

const employeeCntrl = {
    register: async (req, res) =>{
       try {
          res.json({msg: 'Employee controller tested from the TRY one!'})
       } catch (error) {
           return res.status(500).json({msg: error.message})
       }
    }
}

module.exports = employeeCntrl