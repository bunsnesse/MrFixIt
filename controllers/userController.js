const db = require("../models");
var jwt = require('jsonwebtoken');

// Defining methods for the helpController
module.exports = {
  login: async function(req, res) {
    let {email, password} = req.body;
    // find the user record with the email
    // if no user found, return 500
    // if user is found, compare the password
    let users = await db.User.find({email});
    if (users.length == 0) {
      res.status(500).json({});
    }

    let user = users[0];
    if (user.password === password) {
      let token = jwt.sign({id: user._id}, "igor");
      res.json({token});
    } else {
      res.status(500).json({});
    }

  },
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};