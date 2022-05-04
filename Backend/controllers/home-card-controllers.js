// generate unique id
// const uuid = require("uuid/v4");
// const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");

const HomeCard = require("../models/home-card");

const getHomeCards = async (req, res, next) => {
  const cardId = req.params.uid;
  let cards;
  try {
    cards = await HomeCard.find(cardId);
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json({ cards: cards.map((card) => card.toObject({ getters: true })) });
};

exports.getHomeCards = getHomeCards;
