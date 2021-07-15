const router = require('express').Router();
const clientBusinessCntrl = require('../controllers/clientBusinessCntrl');


router.post('/register', clientBusinessCntrl.register)

router.get('/list', clientBusinessCntrl.getAllBusinesses)

router.get('/detail/:busineId', clientBusinessCntrl.getBusinessDetail)

router.get('/list_perowner/:ownerId', clientBusinessCntrl.getBusinesesPerOwner)

router.put('/edit/:busineId', clientBusinessCntrl.eidtBusinesDetail)
router.delete('/delete/:busineId', clientBusinessCntrl.deleteBusiness)

router.put('/assign_sw_technician/:busineId', clientBusinessCntrl.assignSoftwareTech)
router.put('/assign_hw_technician/:busineId', clientBusinessCntrl.assignHardwareTech)

router.post('/requesting/:machineId', clientBusinessCntrl.requestMachine)

module.exports = router;