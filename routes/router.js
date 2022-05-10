const router = require('express').Router()
 const { loginGetController, clientRegPostController, clRegValidation} = require('../controllers/authController')

router.get('/login', loginGetController )
router.post('/client-register', clRegValidation, clientRegPostController )

module.exports = router;