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

    insertOne: function(burger_name, cb){
    orm.insertOne('burgers', 'burger_name', function(res){
      cb(res);
    });
  },
  // update: function(objColVals, condition, cb) {
  //   orm.update("burgers", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
  //   delete: function(cols, vals, cb){
  //   orm.delete("burgers", cols, vals   , function(res){
  //     cb(res);
  //   });
  // }
};




// Export the database functions for the controller (catsController.js).
module.exports = burger;