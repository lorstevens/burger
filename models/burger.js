var orm = require("../config/orm.js");

var burger = {
	all: function(cb){
		orm.all("burgers", function(results){ //does burger reference the burgers table?
			cb(results);
		});
	}, 
	// insertOne: function(table, cols, vals, cb) {
 //    orm.insertOne("burgers", cols, vals, function(res) {
 //      cb(res);
 //    });
 //  }

    insertOne: function(cols, vals, cb){
    orm.insertOne('burgers', cols, vals, function(results){
      cb(results);
    });
  },

  //   delete: function(cols, vals, cb){
  //   orm.delete("burgers", cols, vals   , function(res){
  //     cb(res);
  //   });
  // }

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(results) {
      cb(results);
    });
  }
};



// Export the database functions for the controller (catsController.js).
module.exports = burger;