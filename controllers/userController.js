const UserClient = require("../models/UserClient");
const UserCandidate = require("../models/UserCandidate");
path = require('path')
const fs = require('fs')

exports.fetchCandidates = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await UserClient.findById(userId);
    if (user) {
      let candidates = await UserCandidate.find();
      return res.status(200).json({ msg: "Success", candidates });
    } else {
      res.send({ msg: "No Access" });
    }
  } catch (error) {
    res.json({ error: error });
  }
}

exports.updateImageController = async (req, res) => {
  const { userType, userId } = req.params;
  let name = req.body.name
  let image = req.file.path

  if(userType === 'candidate'){

    try {
      let user = await UserCandidate.findByIdAndUpdate(userId, {profileImage: image})
      if (!user) {
        fs.unlinkSync(image)
        res.status(400).json({ msg: "No User"});

        
      } else{
        res.status(200).json({ msg: "Success"});
        
      }
    } catch (error) {
      fs.unlinkSync(image)
      res.status(400).json({ msg: "Error"});
      
    }

  } else if (userType === 'recruiter') {
    try {
      let user = await UserClient.findByIdAndUpdate(userId, {profileImage: image})
      if (!user) {
        fs.unlinkSync(image)
        res.status(400).json({ msg: "No User"});
        
      } else{
        res.status(200).json({ msg: "Success"});
        
      }
    } catch (error) {
      fs.unlinkSync(image)
      res.status(400).json({ msg: "Error"});
      
    } 

  } else {
    res.status(400).json({msg: "User Error"})
  }
  
}
