const router = require('express').Router()
const salesCntrl = require('../controllers/salesCntrl')
const auth = require('../middleware/auth')

router.get('', salesCntrl.salesDashboard)


module.exports = router;