const express = require("express");
const app = express();

require("dotenv").config();

const { APP_HOST, APP_PORT } = process.env;

const router = require("./routes/router");

app.use(express.json());

app.use("/login", router);

app.get("/", (req, res) => {
  res.send(`APP CONNESSA`);
});

const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

app.use(notFound);
app.use(errorsHandler);

// # SERVER LISTENING
app.listen(APP_PORT, () => {
  console.log(`App listening at ${APP_HOST}:${APP_PORT}`);
});
