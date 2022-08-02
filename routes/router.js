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
  verifyEm,

  forgotPassword,
  resetPassword,
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
  updateJob,
  rejectApplicant,
  ApplicantsDetails,
  getJobsByCat,
  getJobsCount,
  getSimilarJobs,
  getRejectedApplicants,
  retakeApplicant,
} = require("../controllers/jobsController");

const { fetchCandidates, updateImageController } = require("../controllers/userController");

const {getOTSCandidates} = require("../controllers/otsController")

//upload multer
const uploadMulter = require('../middlewares/upload')
const uploadValidation = require('../middlewares/uploadValidation')

//auth routes
router.get("/login", loginGetController);
router.post("/client-login", LogValidation, clientLoginPostController);
router.post("/candidate-login", LogValidation, candidateLoginPostController);
router.post("/client-register", clRegValidation, clientRegPostController);
router.post("/candidate-register", cdRegValidation, candidateRegPostController);

// get Profile details
router.get("/userDetails/:id/:usertype", getUserDetails);

// forgotPasswor
router.post("/user/forgotPassword/:usertype", forgotPassword);
// reset password
router.patch("/user/resetPassword/:token/:usertype", resetPassword);
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
// get,delete and update Job by ID
router
  .route("/api/jobs/client-job/:id")
  .get(getAlljobByID)
  .delete(deleteJob)
  .patch(updateJob);
// get applied jobs
router.get("/api/jobs/applied-jobs/:applicantId", appliedJobs);
//delete applied job
router.patch(
  "/api/job/deleteApplication/:jobId/:applicantId",
  deleteApplicationController
);
// reject Applicant
router.patch("/api/job/rejectApplicant/:jobID/:applicantId", rejectApplicant);
//verify
router.get("/verify/:userType/:userId/:token", verifyEm);

//fetch JobSeekers
router.get("/api/:userId/fetchCandidates", fetchCandidates);
// get Applicant
router.get("/api/job/:jobID", ApplicantsDetails);

//image upload
router.post('/:userType/:userId/image/upload', uploadMulter, uploadValidation, updateImageController)

//category-job
router.get("/api/jobs/:category", getJobsByCat);
router.get("/api/jobs/cat/counter", getJobsCount);

// ots

router.get('/api/ots/get-candidates/:workType/:locationString', getOTSCandidates)

//similar jobs
router.get('/api/jobs/similar/:category/:currentPostId', getSimilarJobs)

//rejected candidates
router.get('/api/jobs/:jobId/applicants/rejected', getRejectedApplicants)
router.patch('/api/jobs/:jobId/:applicantId/retake', retakeApplicant);

module.exports = router; 
