const db = require("../../NOSQL/database");

exports.createMember = (body) => db.Member.create(body);
