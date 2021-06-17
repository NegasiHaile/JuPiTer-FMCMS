const Users = require('../models/superAdminModel');

// const superAdminCntrl = {
//     register: (req, res) =>{
//         res.json({msg: 'superAdmin registration controller tested!'})
//     }
// }

const superAdminCntrl = {
    register: async (req, res) =>{
       try {
           const {fullName, phone, email, password, role, }
       } catch (error) {
           return res.status(500).json({msg: error.message})
       }
    }
}

module.exports = superAdminCntrl