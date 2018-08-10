var orm = require ("../config/orm.js");

var burger = {
  all: function (cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  create: function(burger_name, cb){
    orm.insertOne("burgers", "burger_name", burger_name, function(res){
      cb(res);
    });
  },
  update: function(colVals, condition, cb){
    orm.updateOne("burgers", colVals, condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger;
