const db = require("../../NOSQL/database");

exports.getUserByEmail = async (email) => {
  const user = await db.User.findOne({ email });
  return user;
};
