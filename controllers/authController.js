const { body, validationResult } = require("express-validator");
const UserClient = require("../models/UserClient");
const UserCandidate = require("../models/UserCandidate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.clRegValidation = [
  body("username").not().isEmpty().withMessage("Username is required"),
  body("fullname").not().isEmpty().withMessage("Name is required"),
  body("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Valid email is required"),
  body("organization").not().isEmpty().withMessage("Organization is required"),
  body("nid")
    .not()
    .isEmpty()
    .withMessage("National Identity Number is required"),
  body("phone").not().isEmpty().withMessage("Phone number is required"),
  // body("gender").not().isEmpty().withMessage("Gender is required"),
  body("password")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage(
      "Password is required and needed to be minimum 6 characters long"
    ),
];
exports.cdRegValidation = [
  body("username").not().isEmpty().withMessage("Username is required"),
  body("fullname").not().isEmpty().withMessage("Name is required"),
  body("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Valid email is required"),
  body("phone").not().isEmpty().withMessage("Phone number is required"),
  body("gender").not().isEmpty().withMessage("Gender is required"),
  body("password")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage(
      "Password is required and needed to be minimum 6 characters long"
    ),
];

exports.loginGetController = (req, res) => {
  res.json({ msg: "Login" });
};

exports.clientRegPostController = async (req, res) => {
  const {
    usertype,
    username,
    fullname,
    email,
    organization,
    nid,
    password,
    phone,
    gender,
  } = req.body;

  const vErrors = validationResult(req);
  if (!vErrors.isEmpty()) {
    return res.status(400).json({ errors: vErrors.array() });
  }
  try {
    const checkUser = await UserClient.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ errors: { msg: "Email is already registered" } });
    }
    //hashPasswd
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    try {
      const user = await UserClient.create({
        usertype,
        username,
        fullname,
        email,
        organization,
        nid,
        password: hashed,
        phone,
        gender,
      });
      const jwtToken = jwt.sign({ user: user }, process.env.SECRET_KEY, {
        expiresIn: "7d",
      });
      return res
        .status(200)
        .json({ msg: "Account Created Successfully", jwtToken });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  } catch (e) {
    return res.status(500).json({ errors: e });
  }
};

exports.candidateRegPostController = async (req, res) => {
  const { usertype, username, fullname, email, password, phone, gender } =
    req.body;

  const xErrors = validationResult(req);
  if (!xErrors.isEmpty()) {
    return res.status(400).json({ errors: xErrors.array() });
  }
  try {
    const checkUser = await UserCandidate.findOne({ email });
    if (checkUser) {
      return res
        .status(400)
        .json({ errors: { msg: "Email is already registered" } });
    }
    //hashPasswd
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    try {
      const user = await UserCandidate.create({
        usertype,
        username,
        fullname,
        email,
        password: hashed,
        phone,
        gender,
      });
      const jwtToken = jwt.sign({ user: user }, process.env.SECRET_KEY, {
        expiresIn: "7d",
      });
      return res
        .status(200)
        .json({ msg: "Account Created Successfully", jwtToken });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  } catch (e) {
    return res.status(500).json({ errors: e });
  }
};
