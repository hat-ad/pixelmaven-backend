const db = require("../../NOSQL/database");

exports.createMovie = (body) => db.Movie.create(body);

exports.getMovie = (filter) =>
  db.Movie.find(filter)
    .populate({ path: "Directors" })
    .populate({ path: "Producers" })
    .populate({ path: "Cast" });
