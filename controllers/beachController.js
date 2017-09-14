Beachvar db = require('../models');

function getAllBeaches(req, res){
  db.Beach.find(function(err, posts){
  if (err)
    res.send(err);
    res.json(posts);
  })
}

  function postBeach(req,res){  //POST one beach
    var beach = new db.Beach();
    beach.beach = req.body.city;
    city.country = req.body.country;
    city.img = req.body.img;

    city.save(function(err){
      if (err)
        res.send(err);
        res.json({message: 'Beach post success!'});
    });
  }

  function getOne(req, res){  // GET a beach
    db.Beach.findById(req.params.beachId, function(err, beach){
      if (err)
        res.send(err);
        res.json(beach);
      })
  }

  function destroy(req, res){ // DELETE a beach
    db.Beach.findOneAndRemove({_id: req.params.beachId}, function(err){
      if (err){
        res.status(500);
      }
      res.json({message: 'Beach Deleted!'})
    })
  }

  function update(req, res) {  // UPDATE a beach
    db.Beach.findById(req.params.id, function (err, beach) {
      if (err) return res.json(err);
      for (let i in req.body) {
        beach[i] = req.body[i];
      }
      beach.save(function (err, beach) {
        if (err) return res.json(err);
        res.json(beach);
      })
    })
  }

  module.exports = {
    getAllBeaches: getAllBeaches,
    postBeach: postBeach,
    getOne: getOne,
    destroy: destroy,
    update: update
  }
