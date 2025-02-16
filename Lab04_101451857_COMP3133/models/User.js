const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [4, 'Username must be at least 4 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email address'
    }
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s]+$/.test(v);
      },
      message: 'City name can only contain alphabets and spaces'
    }
  },
  website: {
    type: String,
    required: [true, 'Website is required'],
    validate: {
      validator: function(v) {
        return validator.isURL(v, { protocols: ['http', 'https'], require_protocol: true });
      },
      message: 'Please provide a valid website URL (must start with http:// or https://)'
    }
  },
  zipCode: {
    type: String,
    required: [true, 'Zip code is required'],
    validate: {
      validator: function(v) {
        return /^\d{5}-\d{4}$/.test(v);
      },
      message: 'Zip code must be in format 12345-1234'
    }
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function(v) {
        return /^1-\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: 'Phone must be in format 1-123-123-1234'
    }
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;