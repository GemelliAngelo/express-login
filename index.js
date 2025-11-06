const express = require("express");
const app = express();
const APP_HOST = "localhost";
const APP_PORT = "3000";

const router = require("./routes/router");

app.use("/login", router);

app.get("/", (req, res) => {
  res.send(`<h1>APP CONNESSA</h1>`);
});

// # SERVER LISTENING
app.listen(APP_PORT, () => {
  console.log(`App listening at ${APP_HOST}:${APP_PORT}`);
});
