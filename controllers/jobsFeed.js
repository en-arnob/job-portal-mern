const jwt_decode = require('jwt-decode');
const JobPost = require('../models/JobPost')


exports.getJobsController = (req, res) => {
    res.send('Jobs here')
}

exports.postJobsController = async (req, res) => {

    const {token} = req.body
    try {
        const decoded = await jwt_decode(token);
    const user = decoded.user
    } catch (error) {

        return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Token" }] });
    }
    const decoded = await jwt_decode(token);
    const user = decoded.user

    if (user.usertype != 'recruiter') {
        return res
        .status(400)
        .json({ errors: [{ msg: "You don't have permissions to post jobs" }] });
    }

    const data = req.body

    try {
        const job = await JobPost.create({
            title: data.title,
            authorId: user._id,
            body: data.body,
            tags: data.tags,
            vaccancy: data.vaccancy,
            deadline: data.deadline,
            jobType: data.jobType,
        })
        return res
        .status(200)
        .json({ msg: "Job Posted Successfully"});

    } catch (error) {
        return res.status(500).json({ errors: error });
        
    }

}