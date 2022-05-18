require("dotenv").config();
const { body, validationResult } = require("express-validator");
const UserClient = require("../models/UserClient");
const UserCandidate = require("../models/UserCandidate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  body("gender").not().isEmpty().withMessage("Gender is required"),
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
exports.LogValidation = [
  body("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Valid email is required"),
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
        .json({ errors: [{ msg: "Email is already registered" }] });
    }
    //hashPasswd
    const salt = await bcrypt.genSalt(12);
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
      const jwtToken = jwt.sign(
        {
          user: {
            id: user._id,
            usertype: user.usertype,
            fullname: user.fullname,
            organization: user.organization,
          },
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "7d",
        }
      );
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
        .json({ errors: [{ msg: "Email is already registered" }] });
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
      const jwtToken = jwt.sign(
        {
          user: {
            id: user._id,
            usertype: user.usertype,
            fullname: user.fullname,
            organization: user.organization,
          },
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "7d",
        }
      );
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

exports.clientLoginPostController = async (req, res) => {
  const { email, password } = req.body;

  const clLogVErr = validationResult(req);
  if (!clLogVErr.isEmpty()) {
    return res.status(400).json({ errors: clLogVErr.array() });
  }
  try {
    let user = await UserClient.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const jwtToken = jwt.sign(
      {
        user: {
          id: user._id,
          usertype: user.usertype,
          fullname: user.fullname,
          organization: user.organization,
        },
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    return res.status(200).json({ msg: "Account Logged in", jwtToken });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
exports.candidateLoginPostController = async (req, res) => {
  const { email, password } = req.body;

  const LogVErr = validationResult(req);
  if (!LogVErr.isEmpty()) {
    return res.status(400).json({ errors: LogVErr.array() });
  }
  try {
    let user = await UserCandidate.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    let match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const jwtToken = jwt.sign(
      {
        user: {
          id: user._id,
          usertype: user.usertype,
          fullname: user.fullname,
          organization: user.organization,
        },
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    return res.status(200).json({ msg: "Account Logged in", jwtToken });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
