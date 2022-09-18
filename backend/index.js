const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const mongooses = require("mongoose");
const MovieModel = require("./models/Movies");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://robteaw:su262n9h5OnVfBgs@cluster0.zjmrpcr.mongodb.net/collection"
);

app.get("/getMovies", (req, res) => {
  MovieModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createMovie", async (req, res) => {
  const movie = req.body;
  const newMovie = new MovieModel(movie);
  await newMovie.save();
  res.json(movie);
});

app.delete("/deleteMovie", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.id);
    return res.status(200).json({ success: true, msg: "Movie deleted!" });
  } catch (err) {
    console.error(err);
  }
});

app.listen(3001, () => {
  console.log("Server running!");
});
