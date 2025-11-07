const users = require("../db/users");

function index(req, res) {
  res.send(users.map((user) => user.email));
}

function create(req, res, next) {
  if (
    users.find(
      (user) =>
        user.email == req.body.email && user.password == req.body.password
    )
  ) {
    return res.status(200).json({
      status: "OK",
    });
  }

  next();
}

module.exports = { index, create };
