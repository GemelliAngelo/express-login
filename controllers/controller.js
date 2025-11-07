const users = require("../db/users");

function index(req, res) {
  res.send(
    users.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    }))
  );
}

function create(req, res, next) {
  const user = users.find(
    (user) => user.email == req.body.email && user.password == req.body.password
  );
  if (user) {
    return res.status(200).json({
      status: "OK",
      user: user,
    });
  }

  next();
}

module.exports = { index, create };
