var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.all("burgers", function(results){ 
			cb(results);
		});
	}, 


    insertOne: function(cols, vals, cb){
    orm.insertOne("burgers", cols, vals, function(results){
      cb(results);
    });
  },



  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(results) {
      cb(results);
    });
  }
};



// Export the database functions for the controller (catsController.js).
module.exports = burger;