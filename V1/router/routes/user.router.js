const express = require("express");
const router = express.Router();
const UserController = require("../../controllers/user.contoller");

router.get("/email", UserController.getUser);

module.exports = router;
