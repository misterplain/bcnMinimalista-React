const express = require("express");
const mongoose = require("mongoose");

const homeCardSchema = require("../models/home-card");
const router = express.Router();

router.route("/").get((req, res) => {
  homeCardSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//export to app.js
module.exports = router;
