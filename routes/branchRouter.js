const router = require('express').Router()
const branchsCntrl = require('../controllers/branchCntrl')

router.post('/open', branchsCntrl.openNewBranch) // creating a branch of jupiter
router.get('/list', branchsCntrl.getBranchs) // get list of branchs
router.get('/branchDetail/:branchId', branchsCntrl.getBranchDetail)

router.route('/action/:branchId')
    .put(branchsCntrl.editBranchDetail)
    .delete(branchsCntrl.deleteBranch) // delete a branch only if it is empty 


router.get('/employees/:branchId', branchsCntrl.getEmployeePerBranch)
router.get('/machines/:branchId', branchsCntrl.getMachinesPerBranch)
router.get('/businesses/:branchId', branchsCntrl.getbusinessesPerBranch)
router.get('/sales/:branchId', branchsCntrl.salesPerbranch)

module.exports = router;