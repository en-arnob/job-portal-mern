const router = require('express').Router()
const { loginGetController, clientRegPostController, candidateRegPostController, clRegValidation, cdRegValidation, LogValidation, clientLoginPostController, candidateLoginPostController} = require('../controllers/authController')

//auth routes
router.get('/login', loginGetController )
router.post('/client-login', LogValidation, clientLoginPostController )
router.post('/candidate-login', LogValidation, candidateLoginPostController )
router.post('/client-register', clRegValidation, clientRegPostController )
router.post('/candidate-register', cdRegValidation, candidateRegPostController )



// home
router.get('/api/jobs', (req, res)=>{
    res.send("Posts")
})

module.exports = router