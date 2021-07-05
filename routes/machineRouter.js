const router = require('express').Router()
const machineCntrl = require('../controllers/machineCntrl')
const auth = require('../middleware/auth')

router.post('/register', machineCntrl.register)

router.get('/list', machineCntrl.getMachines)

router.get('/detail/:id', machineCntrl.getMachineDetail)

router.route('action/:id')  // if it's not distributed yet
    .put(machineCntrl.editMachine)
    .delete(machineCntrl.deleteMachine)

router.post('/distribute', machineCntrl.distributMachine)

module.exports = router;