let mongoose = require ("mongoose");
let Schema = mongoose.Schema;

let BeachSchema = new Schema({
  name: String,
  location: String,
  longitude: Number,
  latitude: Number
})

module.exports = mongoose.model('Beach', BeachSchema);
