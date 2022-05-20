const express = require("express");
const router = express.Router();
const Home = require("../models/home");

//import controllers

//route
router
  .route("/")
  .get((req, res, next) => {
    Home.find()
      .then((home) => {
        console.log("Homes fetched", home)
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(home);
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Home.create(req.body)
      .then((home) => {
        console.log("Home created", home);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(home);
      })
      .catch((err) => {
        next(err);
      });
  })
  .delete((req, res, next) => {
    Home.deleteMany()
      .then((home) => {
        console.log("All home deleted");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(home);
      })
      .catch((err) => next(err));
  });

module.exports = router;

