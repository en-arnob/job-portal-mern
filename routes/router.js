const router = require('express').Router()
const { loginGetController, clientRegPostController, candidateRegPostController, clRegValidation, cdRegValidation, LogValidation, clientLoginPostController, candidateLoginPostController} = require('../controllers/authController')

router.get('/login', loginGetController )
router.post('/client-login', LogValidation, clientLoginPostController )
router.post('/candidate-login', LogValidation, candidateLoginPostController )
router.post('/client-register', clRegValidation, clientRegPostController )
router.post('/candidate-register', cdRegValidation, candidateRegPostController )

module.exports = router