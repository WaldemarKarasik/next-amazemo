const express = require("express");
const User = require("../database/models/User");
const passport = require("passport");
require("../passport");
const router = express.Router();

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const signinUser = await User.findOne({
      email,
      password,
    }).lean();
    if (!signinUser) {
      return res.json({ message: "User not found", success: false });
    }
    const user = signinUser;
    delete user.password;
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});

router.get("/create-admin", async (req, res) => {
  try {
    const user = new User({
      name: "Daniel",
      email: "komsomolradio@gmail.com",
      isAdmin: true,
      password: "irkytsk87",
    });
    const savedUser = await user.save();
    return res.status(201).json(savedUser);
  } catch (e) {
    console.log(e);
  }
});

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    console.log(req);
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router;
