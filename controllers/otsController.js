const UserCandidate = require("../models/UserCandidate");

exports.getOTSCandidates = async (req, res) => {
    let locationString = req.params.locationString
        let workType = req.params.workType
    try {
        



        res.json({
            msg: `Hello Api ${location}` 
        })
    } catch (error) {
        res.json(error);
    }
}