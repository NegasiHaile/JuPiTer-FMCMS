const router = require('express').Router();
const manageRoles = require('../controllers/manageRolesCntrl');
const privilegeCheck = require('../controllers/authorizationCntrl');
const userTasks = require('../models/userTasksModel');
const manageRolesCntrl = require('../controllers/manageRolesCntrl');
const auth = require('../middleware/auth')

async function fetchTasks() {
    var userTasksData = await userTasks.find({});
    tasks = await userTasksData;
    return tasks
        //console.log(tasks)
}

//fetchTasks()

router.post('/task/create-role', auth, privilegeCheck(fetchTasks), manageRoles.createRole);
router.post('/task/update-privilege', auth, privilegeCheck(fetchTasks), manageRolesCntrl.updatePrivilege);


module.exports = router;
1