const req = require("express/lib/request");
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
    const job = await JobPost.find({ authorId: req.params.id });
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

exports.applyController = async (req, res) => {
  let { postId, userId } = req.params;
  try {
    const user = await UserCandidate.findById(userId);
    if (user) {
      try {
        const post = await JobPost.findById(postId);
        if (post.applicants.includes(userId)) {
          return res.json({
            msg: "You already have applied to this job",
          });
        }
        await JobPost.findOneAndUpdate(
          { _id: postId },
          { $push: { applicants: user._id } }
        );
        res.json({
          msg: "Congratulations! 🎉:tada: You have successfully applied to this job. Wait for response, the recruiter will get to you shortly.",
        });
      } catch (error) {
        res.json({
          error: error.message,
        });
      }
    } else {
      res.json({
        msg: "invalid user",
      });
    }
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
  // res.json({
  //     p: postId,
  //     u: userId
  // })
};

exports.appliedJobs = async (req, res) => {
  let { applicantId } = req.params;
  try {
    const jobs = await JobPost.find({
      applicants: { $in: [applicantId] },
    })
      .populate("authorId")
      .sort([["dateOfPosting", -1]]);

    res.json({
      jobs,
    });
  } catch (error) {
    res.json({
      errors: error,
    });
  }
};

exports.deleteApplicationController = async (req, res) => {
  let { jobId, applicantId } = req.params;
  try {
    let post = await JobPost.findById(jobId);
    if (post.applicants.includes(applicantId)) {
      await JobPost.findOneAndUpdate(
        { _id: jobId },
        { $pull: { applicants: applicantId } }
      );
      return res.json({
        msg: "Application Successfully Deleted!",
      });
    }
    res.json({
      msg: "Error Occured!",
    });
  } catch (error) {
    res.json({
      errors: error,
    });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await JobPost.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "failed to find or delete the job",
    });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await JobPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "failed to find or update the job data",
      error: err,
    });
  }
};

exports.ApplicantsDetails = async (req, res) => {
  console.log(req.params);
  try {
    let job = await JobPost.findById(req.params.jobID).populate("applicants");
    res.status(200).json({
      status: "success",
      data: {
        job,
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
