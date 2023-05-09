const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema({
  castType: { type: String, enum: ["LEAD", "SUPPORTING", "BACKGROUND"] },
  castName: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
});

const DirectorSchema = new mongoose.Schema({
  directorName: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
});

const ProducersSchema = new mongoose.Schema({
  producerName: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
});

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    link: { type: String, required: false },
    thumbnails: { type: String, required: true, unique: true },
    trailer: { type: String, required: true },
    extras: { type: Boolean, default: false, required: true },
    isAvailable: { type: String },
    cast: [{ type: CastSchema }],
    director: [{ type: DirectorSchema }],
    producer: [{ type: ProducersSchema }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", movieSchema);
