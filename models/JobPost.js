const {Schema, model} = require('mongoose')

const jobPostSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            maxlength: 100,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: UserClient,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
        },
    }
)