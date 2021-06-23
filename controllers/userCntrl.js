const Users = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const userCntrl = {
    register: async (req, res) =>{
        try {
            // res.json({msg: 'user controller tested!'})
            const {
                    fullName,
                    tradeName,
                    gender,
                    photo_TL,
                    branch,
                    city,
                    subCity,
                    kebele,
                    woreda,
                    phoneNumber,
                    fax,
                    pobox,
                    email,
                    password,
                    type_role
                    } = req.body;
            // const pswrd = ({userAccount:{password}})
            // const eml = ({userAccount:{email}})
            const user = await Users.findOne({email})
            
            if(user) return res.status(400).json({msg: "There is a user with this email!"})
            
            if(password.length < 6) return res.status(400).json({msg: "Password must be at least 6 character long."})

            //Password Encryption
            const passwordHash = await bcrypt.hash(password, 10)
            
            const newUser = new Users({
                    fullName,
                    tradeName,
                    gender,
                    photo_TL,
                    branch,
                    city,
                    subCity,
                    kebele,
                    woreda,
                    phoneNumber,
                    fax,
                    pobox,
                    email,
                    password: passwordHash,
                    type_role
            })

            await newUser.save()

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({id: newUser._id})
            const refreshtoken = createRefreshToken({id: newUser._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
            })

            res.json({msg: "User Successfuly registered!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getUser: async (req, res) =>{
        try {
            const user = await Users.findById(req.user.id).select('-password')
            if(!user) return res.status(400).json({msg: "User does not exist."})

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    editUser: async (req, res) =>{
        try {
            await Users.findOneAndUpdate({_id: req.params.id},({
                    fullName,
                    tradeName,
                    gender,
                    photo_TL,
                    branch,
                    city,
                    subCity,
                    kebele,
                    woreda,
                    phoneNumber,
                    fax,
                    pobox,
                    email,
                    type_role
            } = req.body))
            res.json({msg: "User datail edited successfuly!"})
        } catch (error) {
            res.status(500).json({meg: error.message})
        }
    },

    deleteUser: async (req, res) =>{
        try{
            // if the id = 1 this is adminstrator means
            // Then only the admin can delete catagory
            
            await Users.findByIdAndDelete(req.params.id)
            res.json({msg: "Users has been deleted successfuly!"})
        }catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getUsers: async (req, res) =>{
        try {
            if(req.params.type_role == "employee"){
                var clsfusers = await Users.find({
                    "$or": [{"type_role": "branch-admin"}, {"type_role": "technician"}] })
                    }
            else{
                var clsfusers = await Users.find({"type_role": req.params.type_role})
                }
            res.json({msg: clsfusers})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await Users.findOne({email})
            
            if(!user) return res.status(400).json({msg: "User does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({id: user._id})
            const refreshtoken = createRefreshToken({id: user._id})

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            })

            res.json({accesstoken})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    logout: async (req, res) => {
         try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    changePassword: async (req, res) =>{
        try {

            const {oldPassword, newPassword} = req.body;
            const user = await Users.findById(req.params.id)

            const isMatch = await bcrypt.compare(oldPassword, user.password)

            
            if(!isMatch) return res.status(400).json({msg: "Old password is nut correct!"})

            if(newPassword.length < 6)  return res.status(400).json({msg: "New password must be at least 6 character!"})

            await Users.findOneAndUpdate({_id: req.params.id},({
                    password: await bcrypt.hash(newPassword, 10)
            }))

            res.json({msg: "Your password has been changed successfuly!"})
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    },

    blockAccount: async (req, res) =>{
        try {
            await Users.findOneAndUpdate({_id: req.params.id},({
                    status: "OFF"
            }))
            res.json({msg: "User account has been blocked successfuly!"})
        } catch (error) {
            res.status(500).json({meg: error.message})
        }
    },

    activareAccount: async (req, res) =>{
        try {
            await Users.findOneAndUpdate({_id: req.params.id},({
                    status: "ON"
            }))
            res.json({msg: "User account has been activated successfuly!"})
        } catch (error) {
            res.status(500).json({meg: error.message})
        }
    },

    refreshToken: (req, res) =>{
        try {
            const rf_token = req.cookies.refreshtoken;

            if(!rf_token) return res.status(500).json({msg: "Please Login or Register!"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
                if(err) return res.status(400).json({msg: "Please Login or Register"})

                const accesstoken = createAccessToken({id: user.id})

                res.json({accesstoken})
            })

            res.json({rf_token})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

const createAccessToken = (user) =>{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '11m'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = userCntrl;
