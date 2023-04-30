const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOOSE_CONNECTION_STRING)
  .then(() => console.log("connection to db is success!"))
  .catch((e) => console.log("Failed to connect to DB", e.message));

module.exports = mongoose;
