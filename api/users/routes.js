const express = require("express");
const router = express.Router();
const upload = require("../../middleware/multer");

const { signUp } = require("./controllers");

router.post("/signup", signUp);

module.exports = router;
