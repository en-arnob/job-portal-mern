const jwt_decode = require("jwt-decode");
const JobPost = require("../models/JobPost");
const UserCandidate = require("../models/UserCandidate");

exports.getAllJobsController = async (req, res) => {
  try {
    let jobs = await JobPost.find()
      .populate("authorId")
      .sort([["dateOfPosting", -1]]);
    return res.status(200).json({ msg: "Success", jobs });
  } catch (error) {
    res.json(error);
  }
};

exports.postJobsController = async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = await jwt_decode(token);
    const user = decoded.user;
    if (user.usertype != "recruiter") {
      return res
        .status(400)
        .json({ errors: [{ msg: "You don't have permissions to post jobs" }] });
    }
    const data = req.body;
    try {
      const job = await JobPost.create({
        title: data.title,
        authorId: user.id,
        body: data.body,
        tags: data.tags,
        companyLogo: data.logoUrl,
        vaccancy: data.vaccancy,
        deadline: data.deadline,
        jobType: data.jobType,
      });
      return res.status(200).json({ msg: "Job Posted Successfully" });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "Invalid Token" }] });
  }
};

exports.getSingleJobController = async (req, res) => {
  let postId = req.params.id;

  try {
    const job = await JobPost.findOne({ _id: postId }).populate("authorId");
    return res.status(200).json({ msg: "Success", job });
  } catch (error) {
    res.json(error);
  }
};

exports.getAlljobByID = async (req, res) => {
  try {
    const job = await JobPost.find({ authorId: req.params.authorId });
    res.status(200).json({
      status: "success",
      job,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "failed to find job",
      error,
    });
  }
};
