const Users = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const userCntrl = {
    register: async (req, res) =>{
        try {
            // res.json({msg: 'user controller tested!'})
            const {
                userDetail:{
                    fullName,
                    tradeName,
                    gender,
                    photo_TL,
                    branch},
                userAddress:{
                    city,
                    subCity,
                    kebele,
                    woreda,
                    },
                userContact:{
                    phoneNumber,
                    fax,
                    pobox
                    },
                userAccount:{
                    email,
                    password,
                    type_role
                    },
                registrationDate} = req.body;

            const user = await Users.findOne({userAccount:{email}})
            
            if(user) return res.status(400).json({msg: "Email is token!."})
            // if(mypassword.length < 6) return res.status(400).json({msg: "Password must be at least 6 character long."})
            
            const newUser = new Users({
                userDetail:{
                    fullName,
                    tradeName,
                    gender,
                    photo_TL,
                    branch},
                userAddress:{
                    city,
                    subCity,
                    kebele,
                    woreda,
                    },
                userContact:{
                    phoneNumber,
                    fax,
                    pobox
                    },
                userAccount:{
                    email,
                    password,
                    type_role
                    },
                
                registrationDate
            })

            await newUser.save()
            
            res.json({newUser})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    
    getUsers: async (req, res) =>{
        try {
            res.json({msg: 'user controller tested!'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }}

    module.exports = userCntrl;
