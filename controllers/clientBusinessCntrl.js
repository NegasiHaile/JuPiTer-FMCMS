const clientBusinesses = require('../models/clientBusinessModel')

const clientBusinessCntrl = {
    register: async (req, res) =>{
        try {
            res.json("What have been tested is: client business registration!")
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}

module.exports = clientBusinessCntrl;