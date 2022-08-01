const {Schema, model} = require('mongoose')

const RejectionSchema = new Schema({
    
    postId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'JobPost',
        unique: true,
    },
    rejectedApplicants: [
        {
          type: Schema.Types.ObjectId,
          ref: 'UserCandidate',
        },
      ],
})

const RejectionList = model('RejectionList', RejectionSchema);
module.exports = RejectionList