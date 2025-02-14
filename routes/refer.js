const express = require("express");
const handleRefer = require("../controllers/refer");
const router = express.Router();

router.post("/", handleRefer);

module.exports = router;