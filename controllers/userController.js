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
  let image = req.file
  
 
  if(userType === 'candidate'){

    try {
        let ur = `/uploads/${req.file.filename}`
        
      let user = await UserCandidate.findById(userId)
      if (!user) {
        fs.unlinkSync(req.file)
        res.status(400).json({ errors: "No User"});

      }else if(user.profileImage){
          
        fs.unlinkSync(path.join(__dirname, '..', user.profileImage))
        let updatedUser = await UserCandidate.findByIdAndUpdate(userId, {profileImage: ur})
        res.status(200).json({ msg: "Success", updatedUser});
        
      } else{
          let updatedUser = await UserCandidate.findByIdAndUpdate(userId, {profileImage: ur})
        res.status(200).json({ msg: "Success", updatedUser});
      }
    } catch (error) {
      fs.unlinkSync(req.file)
      res.status(400).json({ errors: error.message});
      
    }

  } else if (userType === 'recruiter') {
    try {
        let ur = `/uploads/${req.file.filename}`
      let user = await UserClient.findById(userId)
      if (!user) {
          fs.unlinkSync(req.file)
          res.status(400).json({ errors: "No User"});
        
      }else if(user.profileImage){
          
        fs.unlinkSync(path.join(__dirname, '..', user.profileImage))
        let updatedUser = await UserClient.findByIdAndUpdate(userId, {profileImage: ur})
        res.status(200).json({ msg: "Success", updatedUser});
        
      } else{
          let updatedUser = await UserClient.findByIdAndUpdate(userId, {profileImage: ur})
        res.status(200).json({ msg: "Success", updatedUser});
      }
    } catch (error) {
    //   fs.unlinkSync(path.join(__dirname, '..', 'uploads', req.file.filename))
    fs.unlinkSync(req.file)
      res.status(400).json({ errors: error.message});
      
      
    } 

  } else {
    res.status(400).json({errors: "User Error"})
  }
  
}
