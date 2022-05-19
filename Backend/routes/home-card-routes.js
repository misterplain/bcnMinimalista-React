const express = require("express");
const uuid = require('uuid');
const Home = require("../models/home-card");
const homeCardRouter = express.Router();

//routes

homeCardRouter
  .route("/")
  .get((req, res, next) => {
    Home.find()
      .then((home) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(home);
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Home.create(req.body)
      .then((home) => {
        console.log("Home card created", home);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(home);
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported");
  })
  .delete((req, res, next) => {
    Home.deleteMany()
      .then((response) => {
        res.statusCode = response.statusCode;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

//export to app.js
module.exports = homeCardRouter;
