const db = require("../../NOSQL/database");

exports.createMovie = (body) => db.Movie.create(body);

exports.getMovies = (filter) =>
  db.Movie.find(filter)
    .populate({ path: "Directors" })
    .populate({ path: "Producers" })
    .populate({ path: "Cast" })
    .lean();

exports.getMovie = (filter) =>
  db.Movie.findOne(filter)
    .populate({ path: "Directors" })
    .populate({ path: "Producers" })
    .populate({ path: "Cast" })
    .lean();
