const router = require('express').Router()
const machineCntrl = require('../controllers/machineCntrl')
const auth = require('../middleware/auth')

router.post('/register', machineCntrl.register)

router.get('', machineCntrl.getMachines)

router.route('action/:id')
    .put(machineCntrl.editMachine)
    .delete(machineCntrl.deleteMachine) // if it's not assigned yet

router.post('/distribute/:id', machineCntrl.distributMachine)

module.exports = router;