const router = require("express").Router();
const handler = require("../handlers");

router.route("/").get(handler.showPolls); //show everything

module.exports = router;
