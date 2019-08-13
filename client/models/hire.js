const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hireSchema = new Schema({
  //userId: { type: mongoose.Types.ObjectId },
  offerId: { type: mongoose.Types.ObjectId }
});

const Hire = mongoose.model("Hire", hireSchema);

module.exports = Hire;