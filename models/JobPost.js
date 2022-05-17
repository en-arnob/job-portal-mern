const {Schema, model} = require('mongoose')
const UserClient = require('./UserClient')


const jobPostSchema = new Schema(
    {
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
        tags: {
            type: String,
        },
        vaccancy: Number,
        dateOfPosting: {
            type: Date,
            default: Date.now,
        },
        deadline: String,
        jobType: {
            type: String,
            required: true,
        },

    }
)

const JobPost = model("JobPost", jobPostSchema)
module.exports = JobPost