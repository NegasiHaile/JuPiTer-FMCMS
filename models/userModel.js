const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
        fullName:{
            type: String,
            required: true
            },
        tradeName:{
            type: String
            },    
        gender:{
            type: String
            },
        photo_TL:{
            type: String
            },
        branch:{
            type: String,
            required: true
            },

        city:{
            type: String,
        },
        subCity:{
            type: String,
        },
        kebele:{
            type: String,
        },
        woreda:{
            type: String,
        },

        phoneNumber:{
            type: String,
            required: true,
            trim: true
        },
        fax:{
            type: String
        },
        pobox:{
            type: String
        },
        email:{
            type: String,
            required: true,
            // unique : true,
            trim: true
        },
        password:{
            type: String
        },
        type_role:{
            type: String,
            required: true
        },
        status: {
            type: String,
            default: "ON"
        }
    
    // registrationDate:{
    //     type: Date,
    //     default: Date.now
    // }
},{
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)