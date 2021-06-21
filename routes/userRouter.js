const router = require('express').Router()
const userCntrl = require('../controllers/userCntrl')
const auth = require('../middleware/auth')

router.post('/register', userCntrl.register)

router.route('/action/:id')
    .delete(auth, userCntrl.deleteUser)
    .put(auth, userCntrl.editUser)

router.post('/login', userCntrl.login)

router.get('/logout', userCntrl.logout)

router.get('/refresh_token', userCntrl.refreshToken)

router.get('/infor', auth,  userCntrl.getUser)

router.get('/list',  userCntrl.getUsers)

module.exports = router;