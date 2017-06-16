const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'firstName is required.']
  },
  lastName: {
    type: String,
    required: [true, 'lastName is required.']
  },
  email: {
    type: String,
    required: [true, 'email is required.']
  },
  phone: { type: String, default: '' },
  birthdate: { type: Date, default: null },
  profile_picture: { type: String, default: '' },
  groups: {
    family: { type: Boolean, default: false },
    friend: { type: Boolean, default: false },
    colleague: { type: Boolean, default: false },
    associate: { type: Boolean, default: false }
  },
  comments: { type: String, default: '' }
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;
