//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    db = require('./models'),
    controllers = require('./controllers'),

var app = express(),
    router = express.Router();

var port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use('/api', router);

//*****getting all beaches and 1 beach by Id *****//
// /api/beaches
router.get('/beaches', controllers.beach.getAllBeaches)
router.get('/beaches/:beachId', controllers.beach.getOneBeach)

//******Beach Posts *****//
router.get('/beaches/:beachId/beachPosts', controllers.beachPost.getAllBeachPosts)
router.post('/beaches/:beachId/beachPosts', controllers.beachPost.newBeachPost)

router.get('/beaches/:beachId/beachPosts/:id', controllers.beachPost.getOne)
router.put('/beaches/:beachId/beachPosts/:id', controllers.beachPost.updateBeachPost)
router.delete('/beaches/:beachId/beachPosts/:id', controllers.beachPost.destroy)


//set route path and init API
router.get('/', function(req,res) {
  res.json({message: 'API Initialized!'});
});

//start server
app.listen(port, function() {
  console.log("API IS RUNNING ON PORT " + port);
})
