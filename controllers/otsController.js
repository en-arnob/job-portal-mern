const UserCandidate = require("../models/UserCandidate");

exports.getOTSCandidates = async (req, res) => {

    let locationString = req.params.locationString
    let workType = req.params.workType
    let wtExp = new RegExp(workType, 'i')

    try {
        
        let otsCandidates = await UserCandidate.find({ otsProvider: 'Yes', expertise: {$regex: wtExp } });

        return res.status(200).json({ msg: "Success", otsCandidates });
    } catch (error) {
        res.json(error);
    }
}