const router = require('express').Router();
const clientBusinessCntrl = require('../controllers/clientBusinessCntrl');


router.post('/register', clientBusinessCntrl.register)

router.get('/all', clientBusinessCntrl.getAllBusinesses)

router.get('/owner/:ownerId', clientBusinessCntrl.getMyBusineses)

router.get('/deatil/:busineId', clientBusinessCntrl.getBusinessDetail)

module.exports = router;