const {Schema, model} = require('mongoose')

const ClientSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        maxlength: 20,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true
      },
      organization: {
          type: String,
          maxlength: 200,
          required: true
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
          trim: true
      },
      officeAdress: Object,
     
      password: {
          type: String,
          trim: true,
          required: true,
      },
      confirmPass: {
          type: String,
          trim: true,
          required: true,
      },
      phone: {
          type: String,
          trim: true,
          required: true,
          unique: true,
      },
      birthday: {
          type: Date,
          required: true,
      },
      profileImage: {
          type: String,
          rrquired: true,
      },
      gender: {
          type: String,
          required: true,
      }

})

const UserClients = model('UserClient', ClientSchema)
module.exports = UserClient