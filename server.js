require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var http = require('http');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


//Routes
app.use('/branchs', require('./routes/branchRouter'));
app.use('/users', require('./routes/userRouter'));
app.use('/machines', require('./routes/machineRouter'));
app.use('/businesses', require('./routes/clientBusinessRouter'));


// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})
