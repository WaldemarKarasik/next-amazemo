const express = require("express");
const User = require("../database/models/User");

const router = express.Router();

router.get("/create-admin", async (req, res) => {
  res.json("hello");
});

module.exports = router;
