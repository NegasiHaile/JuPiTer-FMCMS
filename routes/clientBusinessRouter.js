const router = require('express').Router();
const clientBusinessCntrl = require('../controllers/clientBusinessCntrl');


router.post('/register', clientBusinessCntrl.register)

router.get('/list', clientBusinessCntrl.getAllBusinesses)

router.get('/owner/:ownerId', clientBusinessCntrl.getBusinesesPerOwner)

router.route('/action/:busineId')
    .get(clientBusinessCntrl.getBusinessDetail)
    .put(clientBusinessCntrl.eidtBusinesDetail)
    .delete(clientBusinessCntrl.deleteBusiness)

router.put('/sw-technician/:busineId', clientBusinessCntrl.assignSoftwareTech)
router.put('/hw-technician/:busineId', clientBusinessCntrl.assignHardwareTech)

module.exports = router;