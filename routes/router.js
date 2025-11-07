const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");
const emailsController = require("../controllers/emailsController");

router.get("/", controller.index);
router.post("/login", controller.create);

router.post("/contact", emailsController.sendMail);

module.exports = router;
