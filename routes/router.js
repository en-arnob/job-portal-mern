const router = require('express').Router()
 const { loginController } = require('../controllers/authController')

router.get('/login', loginController )

module.exports = router;