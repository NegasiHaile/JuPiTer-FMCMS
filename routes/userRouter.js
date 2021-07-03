const router = require('express').Router()
const userCntrl = require('../controllers/userCntrl');
const auth = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        var filetype = '';
        if (file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if (file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if (file.mimetype === 'image/jpeg') {
            filetype = 'jpg';
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

// const upload = multer({ storage: storage });
// router.post('/register', upload.single('file'), userCntrl.register)
router.post('/register', userCntrl.register)
// fetcch users based on their type Employee, clients and supper-admins separetly.
router.get('/catagory/:role', userCntrl.getUsers)

// take an action on users based on thier type
router.route('/action/:id')
    .delete(userCntrl.deleteUser)
    .put(userCntrl.editUser)

router.get('/profile', auth, userCntrl.getLogedInUser) //get a user information(detail)

router.post('/login', userCntrl.login)

router.get('/logout', userCntrl.logout)

router.get('/refresh_token', userCntrl.refreshToken)

router.post('/changepassword/:id', userCntrl.changePassword)

router.put('/forgotPassword', userCntrl.forgotPassword)

router.post('/block/:id', userCntrl.blockAccount)

router.post('/activate/:id', userCntrl.activateAccount)

module.exports = router;