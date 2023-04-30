const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const CONNECTION_PATH = path.join(
  __dirname,
  process.env.NODE_ENV === "DEV" ? ".env.development" : ".env.production"
);

dotenv.config({
  path: CONNECTION_PATH,
});

require("./NOSQL/database/connection");
const app = express();

const PORT = process.env.PORT;

const router = require("./V1/router/");
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
