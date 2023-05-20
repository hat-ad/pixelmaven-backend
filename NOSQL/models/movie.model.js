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
    release: {
      type: String,
    },
  },
  { timestamps: true }
);

movieSchema.virtual("Directors", {
  ref: "Member",
  localField: ["director.directorName"],
  foreignField: ["name"],
});

movieSchema.virtual("Producers", {
  ref: "Member",
  localField: ["producer.producerName"],
  foreignField: ["name"],
});

movieSchema.virtual("Cast", {
  ref: "Member",
  localField: ["cast.castName"],
  foreignField: ["name"],
});

movieSchema.set("toObject", { virtuals: true });
movieSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("movie", movieSchema);
