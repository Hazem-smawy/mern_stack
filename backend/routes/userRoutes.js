const express = require('express')

const {reqisterUser,loginUser,getMe} = require('../controllers/userControllers')
const router = express.Router()

const { protect} = require('../middleware/authMiddleware')


router.post('/',reqisterUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe)
module.exports = router