const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const homeCardSchema = new Schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
    link: { type: String, required: true },

  });

  module.exports = mongoose.model('Home', homeCardSchema);