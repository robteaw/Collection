const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true },
});

const MovieModel = mongoose.model("movies", MovieSchema);
module.exports = MovieModel;
