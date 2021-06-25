const router = require('express').Router()
const userCntrl = require('../controllers/userCntrl')
const auth = require('../middleware/auth')

router.post('/register', userCntrl.register)

router.get('/:type_role',  userCntrl.getUsers) // fetcch users based on their type /Employee(branch-admin and technictias), clients and supper-admins separetly.

router.route('/action/:id') // take an action on users based on thier type
    .delete( userCntrl.deleteUser)
    .put(userCntrl.editUser)

router.get('/infor',  userCntrl.getUser) // get a user information(deatil)

router.post('/login', userCntrl.login)

router.get('/logout', userCntrl.logout)

router.get('/refresh_token', userCntrl.refreshToken)

router.post('/changepassword/:id',  userCntrl.changePassword)

router.post('/block/:id',  userCntrl.blockAccount)

router.post('/activate/:id',  userCntrl.activareAccount)

module.exports = router;