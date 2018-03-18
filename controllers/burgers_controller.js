var express = require("express");
var router = express.Router();
var db = require("../models/");

// // get route -> index
// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

router.get("/", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll({})
    .then(function (data) {
      var hbsObjext ={
        burgers: data
      };
      res.render('index',hbsObjext);
    })
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function (result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update/:id", function(req, res) {
  db.Burger.update({
    devoured: true,
    where: {
      id: req.params.id,
    }, 
  }).then(function (result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .done in Ajax
    res.json("/");
  });
});

module.exports = router;
