const Users = require('../models/userModel');
const userPrivileges = require('../models/userPrivilegesModel');
const userTasks = require('../models/userTasksModel');
const userRoles = require('../models/userRolesModel');
const mongoose = require('mongoose');


const manageRolesCntrl = {
    createRole: async(req, res) => {
        let { roleType, } = req.body;
        if (roleType == "") {
            res.json({
                status: "FAILED",
                message: "Enter the role name"
            });
        } else if (!/^[a-zA-Z-]*$/.test(roleType)) {
            res.json({
                status: "FAILED",
                message: "Invalid name entered"
            });
        } else {
            userRoles.find({ roleType }).then(result => {
                if (result.length) {
                    res.json({
                        status: "FAILED",
                        message: "Role with the provided name is already exists"
                    })
                } else {

                    const newRole = new userRoles({
                        roleType
                    });

                    newRole.save().then(result => {
                        res.json({
                            status: "SUCCESS",
                            message: "Role creation is successful"
                        })
                    }).catch(err => {
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while creating a new Role"
                        });
                    });
                }
            }).catch(err => {
                console.log(err);
                res.json({
                    status: "FAILED",
                    message: "An error occured while checking for existing Role"
                });
            });
        }
    },
    updatePrivilege: async(req, res) => {
        const taskData = await userTasks.findOne({ task: req.body.taskName })
        const roleData = await userRoles.findOne({ roleType: req.body.roleName });
        const roleID = roleData._id;
        const taskID = taskData._id;
        const privilegesData = await userPrivileges.find({});
        for (let privilegeDocument of privilegesData) {
            if (roleID.equals(privilegeDocument.roleID) && taskID.equals(privilegeDocument.taskID)) {
                return privilegeDocument.updateOne({ 'status': req.body.status }).then(result => {
                    res.json({
                        message: "Update Successful",
                    })
                })
            } else {
                continue
            }
        }
        return res.json({
            message: "No such role and task combination",
        });

    }
}

module.exports = manageRolesCntrl;