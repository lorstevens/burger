var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// router.post("/", function (req, res){


// module.exports = function (app){
// 	app.get("/", function(req,res){
// 	burger.all(function(data){
// 		var allBurgers = {
// 		burgers: data,
// 		};
	
// 	res.render("index", allBurgers);

// });

// 	app.post("/", function(req,res){
// 		burger.insertOne([req.body.burger_name], function(data){
// 		res.redirect("/");
// });
	
// });
// });
// }




router.get('/', function (req, res) {
  res.redirect('/index');
});

router.get('/', function (req, res) {
  burger.all(function(data) {
    var burgerObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', burgerObject);
  });
});

router.post('/', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/');
  });
});

module.exports = router;

// app.post("/", function(req,res){
	
// })

// app.update("/", function(req,res){
	
// })

// module.exports = router;