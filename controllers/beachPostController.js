var db = require('../models');

// GET /api/beachPosts
function index(req, res) {
  console.log("IM HERE");
  db.BeachPost.find({}, function(err, allBeachPostsFound){
    if (err) { return console.log('index err!: ', err); }
    res.json(allBeachPostsFound);
  });
}

// function index(req,res){
//   console.log("LOOK HERE");
//   // db.Post.find({}, function(err,posts) {
//   //   if(err){
//   //     console.log("error", err);
//   //   }
//   //   res.json(posts);
//   // });
// };

module.exports = {
  index: index
};
