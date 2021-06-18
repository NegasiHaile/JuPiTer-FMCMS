const router = require('express').Router()
const userCtrl = require('../controllers/userCntrl')

router.post('/register', userCtrl.register)

module.exports = router;