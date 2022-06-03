const UserClient = require("../models/UserClient");
const UserCandidate = require("../models/UserCandidate");

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
};
