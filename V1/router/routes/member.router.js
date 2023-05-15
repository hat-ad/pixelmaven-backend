const express = require("express");
const router = express.Router();
const MemberController = require("../../controllers/member.controller");

router.post("/create", MemberController.createMember);

module.exports = router;
