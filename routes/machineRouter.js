const router = require('express').Router()
const machineCntrl = require('../controllers/machineCntrl')
const auth = require('../middleware/auth')

router.post('/register', machineCntrl.register)

router.get('', machineCntrl.getMachines)

router.route('/:id')
    .put(machineCntrl.editMachine)
    .delete(machineCntrl.deleteMachine)
    .post(machineCntrl.distributMachine)

module.exports = router;