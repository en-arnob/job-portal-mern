const router = require('express').Router()
 const { loginGetController } = require('../controllers/authController')

router.get('/login', loginGetController )

module.exports = router;