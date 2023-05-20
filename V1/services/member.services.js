const db = require("../../NOSQL/database");

exports.createMember = (body) => db.Member.create(body);

exports.findMember = (name) =>
  db.Member.findOne({
    name: { $regex: new RegExp(name), $options: "i" },
  }).lean();
