var db = require('../models');

// GET ALL BEACHPOSTS  /beaches/beachPosts
function getAllBeachPosts(req, res) {
  console.log("I'M AT getAllBeachPosts!!");
  db.Beach.findById(req.params.beachId, function(err, beach) {
    if (err)
    res.send(err);
    res.json(beach.beachPosts);
  });
}

function newBeachPost(req, res){ //POST a new post
  console.log("you've hit me at newBeachPost!");
  db.Beach.findById(req.params.beachId, function(err, beach){
    const doc = {
      user: req.body.user,
      title: req.body.title,
      text: req.body.text,
    };
    var newBeachPost = new db.BeachPost(doc);
    beach.beachPosts.unshift(newBeachPost);
    beach.save(function(err, savedBeach){
      if (err) res.json(err);
      res.json(newBeachPost);
    });
  });
}

function getOne(req, res){ //GET one beachPost
  console.log("You've hit me at getOne!");
  db.Beach.findById(req.params.beachId, function (err, beach) {
    if (err) return res.json(err);
    res.json(beach.beachPosts.id(req.params.id));
  });
}

function updateBeachPost(req, res){
  console.log("You've hit me at updateBeachPost!");
  db.Beach.findById(req.params.beachId, function (err, beach) {
    if (err) return res.json(err);
    const beachPost = beach.beachPosts.id(req.params.id);
    for (let i in req.body) {
      beachPost[i] = req.body[i];
    }
    beach.save(function(err, beach) {
      if (err) return res.json(err);
      res.json(beachPost);
    });
  });
}

function destroy(req, res){
  console.log("You've got me at 'destroy' in beach post!");
  db.Beach.findById(req.params.beachId, function(err, beach){
    let correctBeachPost = beach.beachPosts.id(req.params.id)
    if(correctBeachPost){
      correctBeachPost.remove();
      beach.save(function(err, saved){
        console.log("Removed ", correctBeachPost);
        res.status(200).send();
      })
    }
    else{
      return res.status(404).send("OH NO!!");
    }
  })
}


module.exports = {
  getAllBeachPosts: getAllBeachPosts,
  newBeachPost: newBeachPost,
  getOne: getOne,
  updateBeachPost: updateBeachPost,
  destroy: destroy
};
