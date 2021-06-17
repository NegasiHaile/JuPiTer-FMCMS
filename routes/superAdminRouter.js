const router = require('express').Router();
const superAdminCntrl = require('../controllers/superAdminCntrl')

// router.post('/superAdmin', (req, res) =>{
//     res.json({msg: "Super admin router tested!"})
// })

router.post('/superAdmin', superAdminCntrl.register)

module.exports = router