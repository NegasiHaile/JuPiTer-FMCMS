const router = require("express").Router();
const userCntrl = require("../controllers/userCntrl");
const auth = require("../middleware/auth");
const multer = require("multer");
let path = require("path");
let User = require("../models/user.modal");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });
router.post("/register", upload.single("file"), userCntrl.register);

// router.post("/register", userCntrl.register);

router.get("/detail/:id", auth, userCntrl.getuserDetail);

// fetcch users based on their type Employee, clients and supper-admins separetly.
// router.get("/list_inType/:role", userCntrl.getUsers);
router.get("/list_inType", userCntrl.getUsers);

// take an action on users based on thier type

router.delete("/delete/:id", auth, userCntrl.deleteUser);

router.put("/edit/:id", auth, userCntrl.editUser);

router.get("/profile", auth, userCntrl.getLogedInUser);

router.post("/login", userCntrl.login);

router.get("/logout", userCntrl.logout);

router.get("/refresh_token", userCntrl.refreshToken);

router.post("/change_password/:id", auth, userCntrl.changePassword);

router.put("/forgot_Password", userCntrl.forgotPassword);

router.post("/block_account/:id", auth, userCntrl.blockAccount);

router.post("/activate_account/:id", auth, userCntrl.activateAccount);

router.route("/addfile").post(upload.single("photo"), (req, res) => {
  const name = req.body.name;
  const birthdate = req.body.birthdate;
  const photo = req.file.filename;

  const newUserData = {
    name,
    birthdate,
    photo,
  };

  const newUser = new User(newUserData);

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
