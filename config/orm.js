var connection = require("../config/connection.js");
// var mysql = require('mysql');

var orm = {

  all: function(tableInput, cb) {
    connection.query("SELECT * FROM burgers", [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

// ===============================================================



// function insertOne (){

// }

// function updateOne (){

// }

};
module.exports = orm;

