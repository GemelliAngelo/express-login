const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const { APP_HOST, APP_PORT, APP_FRONTEND_URL } = process.env;

const corsOptions = {
  origin: APP_FRONTEND_URL,
  optionSuccessStatus: 200,
};

const router = require("./routes/router");

app.use(express.json());

app.use(cors(corsOptions));

app.use("/", router);

const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

app.use(notFound);
app.use(errorsHandler);

// # SERVER LISTENING
app.listen(APP_PORT, () => {
  console.log(`App listening at ${APP_HOST}:${APP_PORT}`);
});
