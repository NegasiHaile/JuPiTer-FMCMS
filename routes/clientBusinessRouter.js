const router = require('express').Router();
const clientBusinessCntrl = require('../controllers/clientBusinessCntrl');


router.post('/register', clientBusinessCntrl.register)

router.get('/list', clientBusinessCntrl.getAllBusinesses)

router.get('/detail/:busineId', clientBusinessCntrl.getBusinessDetail)

router.get('/businesesPerowner/:ownerId', clientBusinessCntrl.getBusinesesPerOwner)

router.route('/action/:busineId')
    .put(clientBusinessCntrl.eidtBusinesDetail)
    .delete(clientBusinessCntrl.deleteBusiness)

router.put('/sw-technician/:busineId', clientBusinessCntrl.assignSoftwareTech)
router.put('/hw-technician/:busineId', clientBusinessCntrl.assignHardwareTech)

module.exports = router;