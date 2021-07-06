const router = require('express').Router()
const branchsCntrl = require('../controllers/branchCntrl')

router.post('/open-branch', branchsCntrl.openNewBranch) // creating a branch of jupiter
router.get('/get-branchs-list', branchsCntrl.getBranchs) // get list of branchs
router.get('/get-branchDetail/:branchId', branchsCntrl.getBranchDetail)

router.put('/edit-branch/:branchId', branchsCntrl.editBranchDetail)

router.delete('/delete-branch/:branchId', branchsCntrl.deleteBranch) // delete a branch only if it is empty 

router.get('/get-employees-per-branch/:branchId', branchsCntrl.getEmployeePerBranch)
router.get('/get-machines-per-branch/:branchId', branchsCntrl.getMachinesPerBranch)
router.get('/get-businesses-per-branch/:branchId', branchsCntrl.getbusinessesPerBranch)

router.get('/get-sales-per-branch/:branchId', branchsCntrl.salesPerbranch)

module.exports = router;