const mongoose = require("mongoose");

module.exports = async function dabatase(req, res, next) {
  // console.log(mongoose.connection.readyState);
  if (mongoose.connection.readyState == 1) {
    return next();
  }
  // mongoose.connection.on("connected", function () {
  //   return next();
  // });
  mongoose.connect(
    "mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/next-amazemo?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  );

  return next();
};
