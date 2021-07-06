const userPrivileges = require('../models/userPrivilegesModel');
const mongoose = require('mongoose')

function privilegeCheck(fetchedTasksData) {
    return async(req, res, next) => {
        const tasks = await fetchedTasksData();
        const routeUrl = req.originalUrl;
        const operationName = routeUrl.substring(routeUrl.lastIndexOf('/') + 1);
        const privilegesData = await userPrivileges.find({});
        const roleID = mongoose.Types.ObjectId('60df1e3878ff9871852370f8');
        var taskID;

        for (let task of tasks) {
            if (operationName === task.task) {
                taskID = task._id;
                break
            } else {
                continue
            }
        }

        if (taskID) {
            for (let privilegeDocument of privilegesData) {
                if (roleID.equals(privilegeDocument.roleID) && taskID.equals(privilegeDocument.taskID) && privilegeDocument.status === 1) {
                    return next()
                } else {
                    continue
                }
            }
            return res.send('This operation is not allowed for you');
        }

        return res.send('The task doesnt exist at all');




    }
}

module.exports = privilegeCheck