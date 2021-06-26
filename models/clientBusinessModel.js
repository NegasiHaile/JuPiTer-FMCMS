const mongoose = require('mongoose');

const clientBusinessSchema = new mongoose.Schema({
    businessName:{
        type: String,
        required: true
    },

})

module.exports = mongoose.model('clientBusinesses', clientBusinessSchema)