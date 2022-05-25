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
  updateUser,
  generatePdf,
  fetchPdf,
} = require("../controllers/authController");

const {
  getAllJobsController,
  postJobsController,
  getSingleJobController,
  applyController,
} = require("../controllers/jobsController");

//auth routes
router.get("/login", loginGetController);
router.post("/client-login", LogValidation, clientLoginPostController);
router.post("/candidate-login", LogValidation, candidateLoginPostController);
router.post("/client-register", clRegValidation, clientRegPostController);
router.post("/candidate-register", cdRegValidation, candidateRegPostController);

// get Profile details
router.get("/userDetails/:id/:usertype", getUserDetails);
// router.get("/userDetails/:id/:usertype", getUserDetails).patch();
// update Profile
// router.patch("/userUpdate/:id/:usertype", updateUser);

router
  .route("/userDetails/:id/:usertype")
  .get(getUserDetails)
  .patch(updateUser);

//generate resume
router.route("/generate-resume").get(fetchPdf).post(generatePdf);

// home
router.get("/api/jobs/all", getAllJobsController);
router.post("/api/job-post", postJobsController);

//single post api
router.get("/api/get/singlePost/:id", getSingleJobController);
router.get("/apply/:postId/:userId", applyController)

module.exports = router;
