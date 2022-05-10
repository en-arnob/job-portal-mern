const { body, validationResult } = require('express-validator');
const UserClient = require('../models/UserClient')


exports.clRegValidation = [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("fullname").not().isEmpty().withMessage("Name is required"),
    body("email").not().isEmpty().isEmail().withMessage("Valid email is required"),
    body("organization").not().isEmpty().withMessage("Organization is required"),
    body("nid").not().isEmpty().withMessage("National Identity Number is required"),
    body("phone").not().isEmpty().withMessage("Phone number is required"),
    body("gender").not().isEmpty().withMessage("Gender is required"),
    body("password").not().isEmpty().isLength({min:6}).withMessage("Password is required and needed to be minimum 6 characters long")
]



exports.loginGetController = (req, res) => {
    res.json({msg: 'Login'})
}

exports.clientRegPostController = (req, res) => {
    const {
        usertype,
        username,
        fullname,
        email,
        organization,
        nid,
        password,
        confirmPass,
        phone, 
        gender } = req.body
    
    const vErrors = validationResult(req)
    if (!vErrors.isEmpty()){
        return res.status(400).json({errors:vErrors.array()})
    } 
    res.json({usertype, username, fullname, email, organization, nid, password, confirmPass, phone,  gender})
    

    
}

exports.candidateRegPostController = (req, res) => {
    res.json(req.body)
}
