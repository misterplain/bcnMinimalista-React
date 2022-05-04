const express = require("express");
const mongoose = require("mongoose");
const { check } = require('express-validator');

const homeCardsControllers= require("../controllers/home-card-controllers");
const router = express.Router();

router.get('/home', homeCardsControllers.getHomeCards)



//export to app.js
module.exports = router;
