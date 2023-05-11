const express = require("express");
const router = express.Router();
const MovieController = require("../../controllers/movie.controller");

router.post("/create", MovieController.createMovie);
router.get("/list", MovieController.getAllMovies);
router.get("/single/:id", MovieController.getMovieById);

module.exports = router;
