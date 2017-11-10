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

//
// });
// });
// }




// router.get('/', function (req, res) {
// 	res.redirect('/index');
// });


router.get('/', function(req, res) {
    burger.all(function(data) {
        var burgerObject = { burgers: data };
        //console.log(hbsObject);
        res.render('index', burgerObject);
    });
});


router.post('/', function(req, res) {
    burger.insertOne(
        ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
        function(result) {
            // res.json({id:result.insertId})
            res.redirect("/");
        });
});


router.post("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(data) {
    	console.log("redirecting");
    });
    res.redirect("/");
});





module.exports = router;