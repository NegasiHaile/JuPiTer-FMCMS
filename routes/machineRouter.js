const router = require('express').Router()
const machineCntrl = require('../controllers/machineCntrl')
const auth = require('../middleware/auth')

router.post('/register-machine', machineCntrl.register)

router.get('/machines-list', machineCntrl.getMachines)

router.get('/machine-detail/:id', machineCntrl.getMachineDetail)

router.put('/edit-machine/:id', machineCntrl.editMachine) // if it's not distributed yet

router.delete('/delete-machine/:id', machineCntrl.deleteMachine) // if it's not distributed yet


router.post('/distribute-machine/:machineId', machineCntrl.distributMachine)

router.get('/get-machines-inRequest', machineCntrl.allMachinesInRequest)
router.get('/get-machines-sold', machineCntrl.allSoldMachines)
router.get('/get-machines-unsold', machineCntrl.allUnsoldMachines)
module.exports = router;