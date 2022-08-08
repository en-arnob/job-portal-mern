const { Schema, model } = require("mongoose");
const UserClient = require("./UserClient");
const UserCandidate = require("./UserCandidate");

const jobPostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    maxlength: 100,
    required: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: UserClient,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
  },
  tags: {
    type: String,
    required: true,
  },
  vaccancy: {
    type: Number,
    required: true,
  },
  dateOfPosting: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    
    
  },
  zip: {
    type: String,
    
    
  },
  address: {
    type: String,
    
  
  },
  category: {
    type: String,
    required: true,
  },
  
  
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: UserCandidate,
      unique: true,
    },
  ],
});

const JobPost = model("JobPost", jobPostSchema);
module.exports = JobPost;
