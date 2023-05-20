const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dob: { type: String, required: false },
    gender: { type: String, required: false },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
