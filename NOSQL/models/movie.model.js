const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema({
  castType: {
    type: String,
    enum: ["LEAD", "SUPPORTING", "BACKGROUND"],
    default: "LEAD",
  },
  castName: { type: String },
});

const DirectorSchema = new mongoose.Schema({
  directorName: { type: String },
});

const ProducersSchema = new mongoose.Schema({
  producerName: { type: String },
});

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    link: { type: String, required: false },
    thumbnails: { type: String, required: false },
    trailer: { type: String, required: false },
    extras: { type: String, required: false },
    cast: [{ type: CastSchema }],
    director: [{ type: DirectorSchema }],
    producer: [{ type: ProducersSchema }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", movieSchema);
