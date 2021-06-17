const router = require('express').Router();
const employeeCntrl = require('../controllers/employeeCntrl');

// router.post('/employee', (req, res) =>{
//     res.json({msg: "Employee router tested!"})
// })

router.post('/employee', employeeCntrl.register)

module.exports = router