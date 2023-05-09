const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    alias: { type: String, required: false },
    dob: { type: String, required: true },
    belongs: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Member", MemberSchema);
