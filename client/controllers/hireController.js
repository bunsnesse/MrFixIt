const db = require("../models");

// Defining methods for the jobController
module.exports = {
  findAll: function(req, res) {
    db.Hire
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  findAllHireWithDetail: async function(req, res) {
    // get all hires
    // for each hire, get the job detail
    let allHire = await db.Hire.find(req.query);
    let allHireWithDetail = [];
    for (let i = 0; i < allHire.length; i++) {
      let id = allHire[i].offerId;
      let hireId = allHire[i]._id;
      let offerDetail = await db.Offer.findById(id);
      let obj = offerDetail.toObject();
      obj.hireId = hireId;
      allHireWithDetail.push(obj);
    }
  
    return res.json(allHireWithDetail);
    // db.Hire
    //   .find(req.query)
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  }, 
  findById: function(req, res) {
    db.Hire
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Hire
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Hire
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Hire
      .findById({ _id: req.params.hireId })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};