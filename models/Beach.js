let mongoose = require ("mongoose");
let Schema = mongoose.Schema;

let BeachSchema = new Schema({
  name: String,
  location: String,
  longitude: Number,
  latitude: Number,
  api_id: Number,
  swell: String,
  tide: String,
  wind: String,
  size: Number
})

module.exports = mongoose.model('Beach', BeachSchema);
