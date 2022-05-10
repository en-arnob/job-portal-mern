const router = require('express').Router()
const { loginGetController, clientRegPostController, candidateRegPostController, clRegValidation, cdRegValidation} = require('../controllers/authController')

router.get('/login', loginGetController )
router.post('/client-register', clRegValidation, clientRegPostController )
router.post('/candidate-register', cdRegValidation, candidateRegPostController )

module.exports = router