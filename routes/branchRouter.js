const router = require('express').Router()
const branchsCntrl = require('../controllers/branchCntrl')

router.post('/open', branchsCntrl.openNewBranch) // creating a branch of jupiter
router.get('/list', branchsCntrl.getBranchs) // get list of branchs
router.get('/employees/:branchId', branchsCntrl.getEmployeePerBranch)
router.get('/machins/:branchId', branchsCntrl.getMachinesPerBranch)
router.get('/musinesses/:branchId', branchsCntrl.getbusinessesPerBranch)
router.get('/saleses/:branchId', branchsCntrl.salesPerbranch)

router.route('/action/:branchId')
    .put(branchsCntrl.editBranchDetail)
    .delete(branchsCntrl.deleteBranch) // delete a branch only if it is empty 

router.get('/employee/:branchId', branchsCntrl.getEmployeePerBranch)
router.get('/machines/:branchId', branchsCntrl.getMachinesPerBranch)

module.exports = router;