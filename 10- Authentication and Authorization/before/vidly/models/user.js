const Joi = require('joi');
const mongoose = require('mongoose');
const passwordComplexity = require("joi-password-complexity");



const User = mongoose.model('User', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
}));

function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()

  };

  return Joi.validate(user, schema);
}

function validatePassword(password){
  const complexityOptions = {
    min: 10,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2
  }
  
  passwordComplexity(complexityOptions).validate(password);
}

exports.User = User; 
exports.validate = validateUser;