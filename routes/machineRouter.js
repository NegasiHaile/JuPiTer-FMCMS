const router = require('express').Router()
const machineCntrl = require('../controllers/machineCntrl')
const auth = require('../middleware/auth')

router.post('/register', (req, res) =>{
    res.json("Machine router tesred!")
})

module.exports = router;