require("dotenv").config();
const { body, validationResult } = require("express-validator");
const UserClient = require("../models/UserClient");
const UserCandidate = require("../models/UserCandidate");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const pdf = require("html-pdf");
const path = require("path");
const AppError = require("../utils/AppError");
const sendEmail = require("../utils/forgotPasswordEmail");

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

exports.getUserDetails = async (req, res) => {
  try {
    let user;
    if (req.params.usertype == "recruiter") {
      user = await UserClient.findById(req.params.id);
    } else if (req.params.usertype == "candidate") {
      user = await UserCandidate.findById(req.params.id);
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "failed to find the user",
      error: err,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let user;
    if (req.params.usertype == "recruiter") {
      user = await UserClient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    } else if (req.params.usertype == "candidate") {
      user = await UserCandidate.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    }

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "failed to find or update the user data",
      error: err,
    });
  }
};

exports.generatePdf = (req, res) => {
  console.log(req.body);
  const pdfTemplate = require("../documents/index");
  const options = {
    height: "42cm",
    width: "29.7cm",
    timeout: "6000",
  };
  console.log("Let's generate");
  pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
    if (err) {
      console.log(err);
      res.send(Promise.reject());
    } else res.send(Promise.resolve());
  });
};

exports.fetchPdf = (req, res) => {
  console.log(path);
  const file = path.join("Resume.pdf");
  console.log(file);
  console.log("show");
  res.download("Resume.pdf");
};

exports.forgotPassword = async (req, res, next) => {
  let user;
  if (req.params.usertype == "recruiter") {
    user = await UserClient.findOne({ email: req.body.email });
  } else if (req.params.usertype == "candidate") {
    user = await UserCandidate.findOne({ email: req.body.email });
  }

  if (!user) {
    return next(new AppError("There is no user with this email address", 404));
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/user/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a patch request with your new password and cormfirmPassword to: ${resetURL}.\n Please ignore if you can remember your old password `;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token(valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token Send to email",
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("Failed to send the email. Try again later.", 500)
    );
  }
};

exports.resetPassword = async (req, res, next) => {
  console.log(req.params, req.body);
  const hashToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  try {
    let user;
    if (req.params.usertype == "recruiter") {
      user = user = await UserClient.findOne({
        passwordResetToken: hashToken,
        passwordTokenExpires: { $gt: Date.now() },
      });
    } else if (req.params.usertype == "candidate") {
      user = await UserCandidate.findOne({
        passwordResetToken: hashToken,
        passwordTokenExpires: { $gt: Date.now() },
      });
    }
    if (!user) {
      return next(new AppError("Token is invalid or expaired!", 400));
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    user.password = hashed;
    // user.confirmPassword = req.body.confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordTokenExpires = undefined;

    await user.save();

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Failed to reset password!!",
      err,
    });
  }
};
