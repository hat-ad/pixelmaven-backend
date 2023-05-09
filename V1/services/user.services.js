const db = require("../../NOSQL/database");

exports.getUserByEmail = (email) => db.User.findOne({ email });

exports.createUser = (body) => db.User.create(body);
