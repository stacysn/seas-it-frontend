var db = require('../models');

function getAllBeachPosts(req, res){//GET all posts
  db.Beach.findById(req.params.beachId, function(err, beach) {
    if (err) res.json(err);
    res.json(beach.posts);
  });
}

function newBeachPost(req, res){ //POST a new post
  db.Beach.findById(req.params.beachId, function(err, beach){
    const doc = {
      user: req.body.user,
      title: req.body.title,
      text: req.body.text,
      date: new Date()
    };
    var newBeachPost = new db.BeachPost(doc);
    beach.posts.unshift(newBeachPost);
    beach.save(function(err, savedBeach){
      if (err) res.json(err);
      res.json(newBeachPost);
    });
  });
}
//route to delete specific post by id
function destroy(req, res){
  db.Beach.findById(req.params.beachId, function(err, beach){
    let correctBeachPost = beach.posts.id(req.params.postId)
    console.log("req.params.postId", req.params.postId);
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

function getOne(req, res){ //GET one beachPost
  db.Beach.findById(req.params.beachId, function (err, beach) {
    if (err) return res.json(err);
    res.json(beach.posts.id(req.params.postId));
  });
}

function updateBeachPost(req, res){
  db.Beach.findById(req.params.beachId, function (err, beach) {
    if (err) return res.json(err);
    const post = beach.posts.id(req.params.postId);
    for (let i in req.body) {
      post[i] = req.body[i];
    }
    beach.save(function(err, beach) {
      if (err) return res.json(err);
      res.json(post);
    });
  });
}

module.exports = {
  getAllBeachPosts: getAllBeachPosts,
  newBeachPost: newBeachPost,
  destroy: destroy,
  getOne: getOne,
  updateBeachPost: updateBeachPost
}
