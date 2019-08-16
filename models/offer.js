const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
 // fee: { type: Number, required: true },
 // location: { type: String, required: true },
  yardwork: { type: Boolean },
  handyman: { type: Boolean },
  cleaners: { type: Boolean },
  groceries: { type: Boolean },
  jobDetails: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  state: { type: String, required: true },
  date: { type: Date, default: Date.now },
  price:{type: Number,required: true},
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;