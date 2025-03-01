const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/user');

const  register = async(req, res) => {
    //Validate record and insuring all paremetes are there
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required"});
        }

    // Create new user
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    // Save user
    const q = await user.save();

  if (!q) {
    return res.status(400).json(err);
  } else {
    const token = user.generateJwt();
    return res.status(200).json(token);
  }
};

const login = (req, res) => {
    //Validate record and insuring all paremetes are there
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    //Passport handles authentication 
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            //Error in authorization process
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            //Return new user token
            const token = user.generateJwt();
            res
                .status(200)
                .json({token});
        } else {
            res
                .status(401)
                .json(info);
        }
    }) (req, res);
};

module.exports = {
    register,
    login
};