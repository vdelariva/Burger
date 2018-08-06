
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
  // Get all burger data from db
  burger.all(function(data){
    res.render("index", {burgers:data});

  });
});

router.get("/*", function(req, res){
  res.redirect("/");
});

router.post("/create", function(req, res){
  // Add new burger to db
  burger.create(req.body.burger_name, function(data){
    res.redirect("/")
  })
});

router.put("/update/:id", function(req, res){
  var condition = `id = ${req.params.id}`;
  // Update burger entry in db
  burger.update({devoured:req.body.devoured}, condition, function(data){
    res.redirect("/");
  });
});

modules.export = router;