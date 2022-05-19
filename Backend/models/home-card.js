const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const homeCardSchema = new Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
  link: { type: String, required: true },
});

homeCardSchema.plugin(uniqueValidator);

const Home = mongoose.model('Home', homeCardSchema);

module.exports = Home;
