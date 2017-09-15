var db = require('../models');

function getAllBeaches(req, res){
  console.log("YOU'VE GOT ME");
  db.Beaches.find({}, function(err, beachPosts){
    if (err) {
      res.send(err);
    }
    res.json(beachPosts);
  })
}


module.exports = {
  getAllBeaches: getAllBeaches,
};
