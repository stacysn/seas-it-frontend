var db = require('../models');

var fetch = require('node-fetch');
const fetchJson = require('node-fetch-json');

function getAllBeaches(req, res){
  console.log("YOU'VE GOT ME AT getAllBeaches");
  db.Beach.find({}, function(err, allBeaches) {
    //access external db
    if (err)
      res.send(err);
      res.json(allBeaches);

  });
}
 // GET a beach
function getOne(req, response){
  db.Beach.findById(req.params.beachId, function(err, beach){
    if (err){res.send(err);}
    fetchJson('http://api.spitcast.com/api/spot/forecast/1')
      .then((res) => {
          beach.swell = res[0].shape_detail.swell,
          beach.tide = res[0].shape_detail.tide,
          beach.wind = res[0].shape_detail.wind,
          beach.size = res[0].size
          beach.save(function(err, succ){
            if (err){res.send(err);}
            response.json(succ);

          })
      })
      // res.json(beach);
    })
}


module.exports = {
  getAllBeaches: getAllBeaches,
  getOne: getOne
};
