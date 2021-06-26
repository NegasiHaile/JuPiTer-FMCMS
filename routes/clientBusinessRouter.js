const router = require('express').Router();
const clientBusinessCntrl = require('../controllers/clientBusinessCntrl');


router.post('/register', clientBusinessCntrl.register)
module.exports = router;