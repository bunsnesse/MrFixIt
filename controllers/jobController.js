const db = require("../models");

// Defining methods for the jobController
module.exports = {
  findAll: async function (req, res) {

    // find all jobs
    // remove the jobs from the array if it has been applied

    let jobs = await db.Offer.find(req.query).sort({ date: -1 });
    return res.json(jobs);

    // let allHires = await db.Hire.find(req.query);
    // //console.log(allHires);
    // //console.log(jobs);
    // let filteredJobs = jobs.filter((job) => {
    //   // if the job appear in allHires, return false
    //   // else, return true
    //   let found = allHires.find((offer) => {
    //     return offer.offerId.equals(job._id);
    //   })
    //   return !found;
      
    // })

    // return res.json(filteredJobs);
    // console.log(filteredJobs);
    // db.Offer
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  },
  findHandyman: function (req, res) {
    db.Offer
      .find({ handyman: { $ne: false } })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findYardwork: function (req, res) {
    db.Offer
      .find({ yardwork: { $ne: false } })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findGroceries: function (req, res) {
    db.Offer
      .find({ groceries: { $ne: false } })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCleaners: function (req, res) {
    db.Offer
      .find({ cleaners: { $ne: false } })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Offer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Offer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Offer
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Offer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};