const express = require("express");
const router = express.Router();

const UserRouter = require("./routes/user.router");
router.use("/user", UserRouter);

const MovieRouter = require("./routes/movie.router");
router.use("/movie", MovieRouter);

const MemberRouter = require("./routes/member.router");
router.use("/member", MemberRouter);

module.exports = router;
