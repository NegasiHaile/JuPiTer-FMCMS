const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        fName:{
            type: String,
            required: true
            },
        mName:{
            type: String,
            required: true
            },
        lName:{
            type: String,
            },    
        gender:{
            type: String
            },
        photo:{
            type: String
            },
        branch:{
            type: String,
            required: true
            },

        city:{
            type: String
            },
        subCity:{
            type: String
            },
        kebele:{
            type: String
            },
        woreda:{
            type: String
            },
        phoneNumber:{
            type: String,
            required: true,
            trim: true
            },
        email:{
            type: String,
            required: true,
            unique : true,
            trim: true
            },
        password:{
            type: String
            },
        type_role:{
            type: String,
            required: true
            },
        accountStatus: {
            type: String,
            default: "Pending"
            },
            },
            {
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)