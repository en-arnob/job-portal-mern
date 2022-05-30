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
  getAlljobByID,
  appliedJobs,
  deleteApplicationController,
  deleteJob,
} = require("../controllers/jobsController");

//auth routes
router.get("/login", loginGetController);
router.post("/client-login", LogValidation, clientLoginPostController);
router.post("/candidate-login", LogValidation, candidateLoginPostController);
router.post("/client-register", clRegValidation, clientRegPostController);
router.post("/candidate-register", cdRegValidation, candidateRegPostController);

// get Profile details
router.get("/userDetails/:id/:usertype", getUserDetails);
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
router.get("/apply/:postId/:userId", applyController);
// get and delete Job by ID
router.route("/api/jobs/client-job/:id").get(getAlljobByID).delete(deleteJob);
// get applied jobs
router.get("/api/jobs/applied-jobs/:applicantId", appliedJobs);
//delete applied job
router.patch(
  "/api/job/deleteApplication/:jobId/:applicantId",
  deleteApplicationController
);



module.exports = router;
