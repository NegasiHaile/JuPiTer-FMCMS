require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded


// parse application/json
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/user", require("./routes/userRouter"));
app.use("/branch", require("./routes/branchRouter"));
app.use("/machine", require("./routes/machineRouter"));
app.use("/business", require("./routes/clientBusinessRouter"));

// Connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
