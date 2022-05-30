const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
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
  organization: {
    type: String,
    maxlength: 200,
  },
  designation: {
    type: String,
    maxlength: 50,
  },
  website: {
    type: String,
    trim: true,
  },
  nid: {
    type: String,
    required: true,
    trim: true,
  },
  officeAdress: String,

  password: {
    type: String,
    trim: true,
    required: true,
    select: false,
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
  verified: {
    type: Boolean,
    default: false,
  },
  
});

const UserClients = model("UserClient", ClientSchema);
module.exports = UserClients;
