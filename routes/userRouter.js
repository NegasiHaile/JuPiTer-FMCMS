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
router.post('/register-user', userCntrl.register)

router.get('/user-detail/:id', userCntrl.getuserDetail)

// fetcch users based on their type Employee, clients and supper-admins separetly.
router.get('/get-users-inType/:role', userCntrl.getUsers)

// take an action on users based on thier type

router.delete('/delete-user/:id', userCntrl.deleteUser)

router.put('/edit-user/:id', userCntrl.editUser)

router.get('/user-profile', auth, userCntrl.getLogedInUser)

router.post('/login', userCntrl.login)

router.get('/logout', userCntrl.logout)

router.get('/refresh_token', userCntrl.refreshToken)

router.post('/change-password/:id', userCntrl.changePassword)

router.put('/forgot-Password', userCntrl.forgotPassword)

router.post('/block-account/:id', userCntrl.blockAccount)

router.post('/activate-account/:id', userCntrl.activateAccount)

module.exports = router;