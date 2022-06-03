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
    type: String,
    required: true,
  },
  dateOfPosting: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: UserCandidate,
    },
  ],
});

const JobPost = model("JobPost", jobPostSchema);
module.exports = JobPost;
