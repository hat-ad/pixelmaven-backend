const express = require("express");
const router = express.Router();

const UserRouter = require("./routes/user.router");
router.use("/user", UserRouter);

module.exports = router;
