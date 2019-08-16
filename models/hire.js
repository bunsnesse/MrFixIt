const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hireSchema = new Schema({
  userWhoHireThisJob: { type: mongoose.Types.ObjectId },
  offerId: { type: mongoose.Types.ObjectId },
  jobDate: {type: Date}
});

const Hire = mongoose.model("Hire", hireSchema);

module.exports = Hire;