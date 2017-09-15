var db = require("./models");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stayseasfunsurfdb');

const BeachData = [
  {
    name: "Pleasure Point",
    location: "Capitola, California",
    longitude: 121.9716900628907,
    latitude: 36.95408762204531,
    spot_id: 1
  },
  {
    name: "Steamer Lane",
    location: "Santa Cruz, California",
    longitude: 122.0259610960292,
    latitude: 36.95109229195622,
    spot_id: 2
  },
  {
    name: "Cowells",
    location: "Santa Cruz, California",
    longitude: 122.024563155438,
    latitude: 36.95808081143832,
    spot_id: 3
  },
  {
    name: "38th Avenue",
    location: "Capitola, California",
    longitude: 121.9690033240836,
    latitude: 36.95739375025615
  }
]



db.Beach.remove({}, function(err){
  db.Beach.create(BeachData, function(err, beaches){
    if (err) { return console.log('ERROR', err); }
    console.log("all beaches:", beaches.length);
  });
});
