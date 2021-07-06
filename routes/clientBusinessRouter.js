const router = require('express').Router();
const clientBusinessCntrl = require('../controllers/clientBusinessCntrl');


router.post('/register-business', clientBusinessCntrl.register)

router.get('/get-all-businesses', clientBusinessCntrl.getAllBusinesses)

router.get('/get-business-detail/:busineId', clientBusinessCntrl.getBusinessDetail)

router.get('/get-businesesPerowner/:ownerId', clientBusinessCntrl.getBusinesesPerOwner)

router.put('/edit-business/:busineId', clientBusinessCntrl.eidtBusinesDetail)
router.delete('/delete-business/:busineId', clientBusinessCntrl.deleteBusiness)

router.put('/assign-sw-technician/:busineId', clientBusinessCntrl.assignSoftwareTech)
router.put('/assign-hw-technician/:busineId', clientBusinessCntrl.assignHardwareTech)

router.post('/request-machine/:machineId', clientBusinessCntrl.requestMachine)

module.exports = router;