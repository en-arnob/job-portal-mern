const router = require("express").Router();
const {
  loginGetController,
  clientRegPostController,
  candidateRegPostController,
  clRegValidation,
  cdRegValidation,
  LogValidation,
  clientLoginPostController,
  candidateLoginPostController,
  getUserDetails,
} = require("../controllers/authController");

//api
const {
  getAllJobsController,
  postJobsController,
} = require("../controllers/jobsController");

//auth routes
router.get("/login", loginGetController);
router.post("/client-login", LogValidation, clientLoginPostController);
router.post("/candidate-login", LogValidation, candidateLoginPostController);
router.post("/client-register", clRegValidation, clientRegPostController);
router.post("/candidate-register", cdRegValidation, candidateRegPostController);

// get Profile details
router.get("/userDetails/:id/:usertype", getUserDetails);

// home
router.get("/api/jobs/all", getAllJobsController);
router.post("/api/job-post", postJobsController);

module.exports = router;
