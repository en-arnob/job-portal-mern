
const jwt_decode = require("jwt-decode");
const JobPost = require("../models/JobPost");
const { count } = require("../models/UserCandidate");
const UserCandidate = require("../models/UserCandidate");
const RejectionList = require('../models/RejectionList')
const dfs = require('date-from-string');


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
        cityName: data.cityName,
        zip: data.zip,
        address: data.address,
        category: data.category,
      });
      const jobRejectionDoc = await RejectionList.create({
        postId: job._id,
      })
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
  // console.log(req.params);
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

exports.rejectApplicant = async (req, res) => {
  try {
    const post = await JobPost.findById(req.params.jobID);
    
    if (post.applicants.includes(req.params.applicantId)) {
      // console.log("success");
      await RejectionList.findOneAndUpdate(
        { postId: req.params.jobID },
        { $push: { rejectedApplicants: req.params.applicantId}}
      )
      await JobPost.findOneAndUpdate(
        { _id: req.params.jobID },
        { $pull: { applicants: req.params.applicantId } }
      );
      
      res.status(201).json({
        status: "successfully rejected or removed",
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "failed to delete the applicant",
      error: err,
    });
  }
};

exports.getJobsByCat = async (req, res) => {
  let passedCategory = req.params.category

  try {

    let jobs = await JobPost.find({ category: passedCategory })
      .populate("authorId")
      .sort([["dateOfPosting", -1]]);
    return res.status(200).json({ msg: "Success", jobs });
    
  } catch (error) {
    res.json(error);
  }
}

exports.getJobsCount = async (req, res) => {
  let counter = {}
  
  try {
    let it = await (await JobPost.find({category: 'IT-Software-Web' })).length
    
    if(it){
      counter["IT-Software-Web"] = it
    } else {
      counter["IT-Software-Web"] = 0
    }
    
    let pharm = await (await JobPost.find({category: 'Pharmaceuticals' })).length
    
    if(pharm){
      counter['Pharmaceuticals'] = pharm
    } else{
      counter['Pharmaceuticals'] = 0
    }
    let fin = await (await JobPost.find({category: 'Accounting-Finance' })).length
    if(fin){
      counter["Accounting-Finance"] = fin
    } else {
      counter["Accounting-Finance"] = 0
    } 
    let bnk = await (await JobPost.find({category: 'Bank' })).length
    if(bnk){
      counter["Bank"] = bnk
    } else {
      counter["Bank"] = 0
    } 
    let arch = await (await JobPost.find({category: 'Engineer-Architects' })).length
    if(arch){
      counter["Engineer-Architects"] = arch
    } else {
      counter["Engineer-Architects"] = 0
    }
    let textile = await (await JobPost.find({category: 'Textile' })).length
    if(textile){
      counter["Textile"] = textile
    } else {
      counter["Textile"] = 0
    } 
    let hr = await (await JobPost.find({ category: 'HR' })).length
    if(hr){
      counter["HR"] = hr
    } else {
      counter["HR"] = 0
    } 
    let man = await (await JobPost.find({ category: 'Management' })).length
    if(man){
      counter["Management"] = man
    } else {
      counter["Management"] = 0
    } 
    let grph = await (await JobPost.find({ category: 'Graphic-Design' })).length
    if(grph){
      counter["Graphic-Design"] = grph
    } else {
      counter["Graphic-Design"] = 0
    } 
    let pdc = await (await JobPost.find({ category: 'Product-Operation' })).length
    if(pdc){
      counter["Product-Operation"] = pdc
    } else {
      counter["Product-Operation"] = 0
    } 
    let dm = await (await JobPost.find({ category: 'Digital-Marketing' })).length
    if(dm){
      counter["Digital-Marketing"] = dm
    } else {
      counter["Digital-Marketing"] = 0
    } 
    let sls = await (await JobPost.find({ category: 'Sales-Marketing' })).length
    if(sls){
      counter["Sales-Marketing"] = sls
    } else {
      counter["Sales-Marketing"] = 0
    } 
    let sec = await (await JobPost.find({ category: 'Security-Consultant' })).length
    if(sec){
      counter["Security-Consultant"] = sec
    } else {
      counter["Security-Consultant"] = 0
    } 
    let resr = await (await JobPost.find({ category: 'Research' })).length
    if(resr){
      counter["Research"] = resr
    } else {
      counter["Research"] = 0
    } 
    let elec = await (await JobPost.find({ category: 'Electrical' })).length
    if(elec){
      counter["Electrical"] = elec
    } else {
      counter["Electrical"] = 0
    } 
    let tele = await (await JobPost.find({ category: 'Telecommunications' })).length
    if(tele){
      counter["Telecommunications"] = tele
    } else {
      counter["Telecommunications"] = 0
    } 
    let med = await (await JobPost.find({ category: 'Medical' })).length
    if(med){
      counter["Medical"] = med
    } else {
      counter["Electrical"] = 0
    } 
    let ngo = await (await JobPost.find({ category: 'NGO' })).length
    if(ngo){
      counter["NGO"] = ngo
    } else {
      counter["Electrical"] = 0
    } 
    let dt = await (await JobPost.find({ category: 'Data-Entry' })).length
    if(dt){
      counter["Data-Entry"] = dt
    } else {
      counter["Data-Entry"] = 0
    } 
    let dr = await (await JobPost.find({ category: 'Driving' })).length
    if(dr){
      counter["Driving"] = dr
    } else {
      counter["Driving"] = 0
    } 
    let law = await (await JobPost.find({ category: 'Law' })).length
    if(law){
      counter["Law"] = law
    } else {
      counter["Law"] = 0
    } 

    return res.status(200).json({ msg: "Success", counter });
  } catch (error) {
    res.json(error);
  }
  
}

exports.getSimilarJobs = async (req, res) => {

  let category = req.params.category
  let currentPostId = req.params.currentPostId
  try {
    let jobs = await JobPost.find({ category: category, _id: {$ne: currentPostId} })
      .populate("authorId")
      .sort([["dateOfPosting", -1]]).limit(3);
    return res.status(200).json({ msg: "Success", jobs });
    
  } catch (error) {
    res.json(error);
  }


}

exports.getRejectedApplicants = async (req, res) => {
  let jobId = req.params.jobId
  try {
    let rejectedDocument = await RejectionList.find({postId: jobId}).populate('rejectedApplicants')
    
    res.status(200).json({msg: "Success", rejectedDocument})
  } catch (error) {
    res.json(error);
  }
}

exports.retakeApplicant = async (req, res) => {
  let jobId = req.params.jobId
  let applicantId = req.params.applicantId

  try {
    
    // const postMod = JobPost.findOneAndUpdate(
    //   { _id: jobId },
    //   { $push: { applicants: req.params.applicantId } }
    // );
    // const rejMod = await RejectionList.findOneAndUpdate(
    //   { postId: jobId },
    //   { 
    //     $pull: {
    //       rejectedApplicants: { _id: applicantId }
    //   }
    //   }, { new: true }
    // )
    await RejectionList.findOneAndUpdate(
      { postId: jobId },
      { $pull: { rejectedApplicants: req.params.applicantId}}
    )
    await JobPost.findOneAndUpdate(
      { _id: jobId },
      { $push: { applicants: req.params.applicantId } }
    );

    // if(rejMod){
    //   res.status(201).json({
    //     status: "Retake Successfull",
    //   })
    // }
    

    // await Promise.all([postMod, rejMod]);
    res.status(201).json({
      status: "Retake Successfull",
    })
    

  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Retake Failed",
      error: error,
    });
  }
}

exports.promotePost = async (req, res) => {
  let postId = req.params.postId

  try {
    await JobPost.findOneAndUpdate({ _id: postId}, {featured: true})
    res.status(201).json({
      status: "Promote Successfull",
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "Promote Failed",
      error: error,
    });
  }

  // res.status(201).json({
  //   status: "promote route working",
  // })

}

exports.getSimilardJobs = async (req, res) => {

  let category = req.params.category
  let currentPostId = req.params.currentPostId
  try {
    let jobs = await JobPost.find({ category: category, _id: {$ne: currentPostId} })
      .populate("authorId")
      .sort([["dateOfPosting", -1]]).limit(3);
    return res.status(200).json({ msg: "Success", jobs });
    
  } catch (error) {
    res.json(error);
  }


}

exports.getFeatured = async (req, res) => {
  try {
    let fJobs = await JobPost.find({featured: true}).populate("authorId").sort([["dateOfPosting", -1]]).limit(3)
    return res.status(200).json({ msg: "Success", fJobs });

  } catch (error) {
    res.json(error);
  }
}