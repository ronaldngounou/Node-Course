const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const passwordComplexity = require("joi-password-complexity");
const router = express.Router();


router.post('/', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
    // Validate the user
    let user = User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Invalid email or password.'); // we don't have the user in our database

    const validPassword = await bcrypt.compare(req.body.passowrd, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password.');

    res.send(true);
});

function validateUser(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(user, schema);
  }
  

module.exports = router;
