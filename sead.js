var db = require("./models");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stayseasfunsurfdb');

const BeachData = [
  {
    name: "Pleasure Point",
    location: "Capitola, California",
    longitude: 121.9716900628907,
    latitude: 36.95408762204531,
    spot_id: 1,
    beachPosts: [
      {
        user: "Jay Moriarty",
        title: "Check out the break",
        text: "Best spot to always catch the wave is between the brown house and the street light!!"
      }
    ]
  },
  {
    name: "Steamer Lane",
    location: "Santa Cruz, California",
    longitude: 122.0259610960292,
    latitude: 36.95109229195622,
    spot_id: 2,
    beachPosts: [
      {
        user: "Jack O'neill",
        title: "Where I lost my eye",
        text: "Three most important things in life, surf, surf and surf."
      }
    ]
  },
  {
    name: "Cowells",
    location: "Santa Cruz, California",
    longitude: 122.024563155438,
    latitude: 36.95808081143832,
    spot_id: 3,
    beachPosts: [
      {
        user: "Stacy",
        title: "Friendly people just having fun",
        text: "most friendly people here to surf with out of all the beaches in Santa Cruz"
      },
      {
        user: "James",
        title: "Best Spot in town!",
        text: "Waves are very consistent; best place to learn!"
      }
    ]
  },
  {
    name: "38th Avenue",
    location: "Capitola, California",
    longitude: 121.9690033240836,
    latitude: 36.95739375025615,
    spot_id: 4,
    beachPosts: [
      {
        user: "Santa Cruz local",
        title: "Territorial",
        text: "Beware of the locals!"
      }
    ]
  }
]



db.Beach.remove({}, function(err){
  db.Beach.create(BeachData, function(err, beaches){
    if (err) { return console.log('ERROR', err); }
  });
});
