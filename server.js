require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use('/users', require('./routes/userRouter'));

app.use('/machines', require('./routes/machineRouter'));

app.use('/sales', require('./routes/salesRouter'));

// app.use('/maintenance', require('./routes/maintenanceRouter'));
// app.use('/branchs', require('./routes/branchRouter'));

// Connect to mongodb
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})







