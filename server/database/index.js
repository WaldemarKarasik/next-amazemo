const mongoose = require("mongoose");
// const config = require("../config");
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
// require("./models/portfolio");
// require("./models/forumCategory");
// require("./models/topic");
// require("./models/post");

exports.connect = () => {
  mongoose.connect(
    "mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/next-amazemo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    },
    () => {
      console.log("Connected to DB");
    }
  );
};

// exports.initSessionStore = () => {
//   const store = new MongoDBStore({
//     uri: config.DB_URI,
//     collection: "portfolio-sessions",
//   });
//   return store;
// };
