const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userDetail:{
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
    },

    userAddress:{
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
        }
    },

    userContact:{
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
        }
    },

    userAccount:{
        email:{
            type: String,
            required: true,
            // unique : true,
            trim: true
        },
        password:{
            type: String,
            required: true
        },
        type_role:{
            type: String,
            required: true
        },
        satus: {
            type: String,
            required: true,
            default: "ON"
        }
    },
    
    // registrationDate:{
    //     type: Date,
    //     default: Date.now
    // }
},{
    timestamps: true
})

module.exports = mongoose.model('Users', userSchema)