const router = require('express').Router();
const clientBusinessCntrl = require('../controllers/clientBusinessCntrl');


router.post('/register', clientBusinessCntrl.register)

router.get('/list', clientBusinessCntrl.getAllBusinesses)

router.get('/owner/:ownerId', clientBusinessCntrl.getMyBusineses)

router.route('/action/:busineId')
    .get(clientBusinessCntrl.getBusinessDetail)
    .put(clientBusinessCntrl.eidtBusinesDetail)
    .delete(clientBusinessCntrl.deleteBusiness)

module.exports = router;