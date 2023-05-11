const services = require("../services");
const { OK, ERROR } = require("../../utils/responseHelper");

exports.createMovie = async (req, res) => {
  try {
    const {
      name,
      description,
      link,
      thumbnails,
      trailer,
      cast,
      director,
      producer,
    } = req.body;
    const movie = await services.Movie.createMovie({
      name,
      description,
      link,
      thumbnails,
      trailer,
      cast,
      director,
      producer,
    });

    return OK(res, movie, "Movie added successfully!");
  } catch (error) {
    return ERROR(res, { error }, error.message || "Something went Wrong");
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await services.Movie.getMovie({});

    return OK(res, movies, "Found all movies!");
  } catch (error) {
    return ERROR(res, { error }, error.message || "Something went Wrong");
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await services.Movie.getMovie({ _id: req.params.id });
    return OK(res, movie.length ? movie[0] : null, "Movie found successfully!");
  } catch (error) {
    return ERROR(res, { error }, error.message || "Something went Wrong");
  }
};
