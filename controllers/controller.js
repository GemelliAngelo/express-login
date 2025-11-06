const users = require("../db/users");

function index(req, res) {
  res.send(users.map((user) => user.email));
}

function create(req, res) {
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

  return res.status(400).json({
    status: "Bad Request",
  });
}

module.exports = { index, create };
