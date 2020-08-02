const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    dropDups: true,
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  facebookId: String,
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!this.isModified("password")) {
    return next();
  }
  const hashedPassword = await bcryptjs.hash(user.password, 10);
  user.password = hashedPassword;
  return next();
});

module.exports = mongoose.model("User", userSchema);
