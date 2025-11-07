const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");
const notFound = require("../middlewares/notFound");

router.get("/", controller.index);
router.post("/", controller.create);

module.exports = router;
