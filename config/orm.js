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


//   insertOne: function (table, cols, vals, cb){
//     connection.query("INSERT INTO burgers", [table], vals, function (err, result){
//       if (err) {
//       throw err;
//       }
//       cb(result);
//   });
// },
// }



  insertOne: function(table, column, burgerInput, callback){
    var queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';

    connection.query(queryString, [burgerInput], function(err, data){
      if(err) throw err;
      callback(data);
    });
  },
}

// function insertOne (){

// }

// function updateOne (){

// }



module.exports = orm;

