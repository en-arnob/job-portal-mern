const { Schema, model } = require("mongoose");

const CandidateSchema = new Schema({
  usertype: {
    type: String,
    // required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    maxlength: 20,
  },
  fullname: {
    type: String,
    required: true,
    maxlength: 100,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
  },
  institute: {
    type: String,
    maxlength: 200,
  },
  designation: {
    type: String,
    maxlength: 50,
  },
  portfolioLink: {
    type: String,
    trim: true,
  },
  skills: Object,
  expertise: Object,
  experience: {
    type: String,
    maxlength: 20,
  },
  language: Object,
  coverLetter: {
    type: String,
    maxlength: 250,
  },
  resume: {
    type: String,
    maxlength: 50,
  },
  bio: {
    type: String,
    maxlength: 250,
  },
  certification: {
    type: String,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  birthday: {
    type: Date,
  },
  profileImage: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
});

const UserCandidate = model("UserCandidate", CandidateSchema);
module.exports = UserCandidate;
