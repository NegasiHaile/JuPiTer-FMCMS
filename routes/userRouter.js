const router = require('express').Router()
const userCntrl = require('../controllers/userCntrl')
const auth = require('../middleware/auth')

router.post('/register', userCntrl.register)

router.get('/:type_role',  userCntrl.getUsers)

router.route('/action/:id')
    .delete( userCntrl.deleteUser)
    .put(userCntrl.editUser)

router.post('/login', userCntrl.login)

router.get('/logout', userCntrl.logout)

router.get('/refresh_token', userCntrl.refreshToken)

router.get('/infor',  userCntrl.getUser)

router.post('/changepassword/:id',  userCntrl.changePassword)

router.post('/block/:id',  userCntrl.blockAccount)

router.post('/activate/:id',  userCntrl.activareAccount)

module.exports = router;