// import mongoose from "mongoose";

// export default async function dabatase(req, res, next) {
//   // console.log(mongoose.connection.readyState);
//   if (mongoose.connection.readyState == 1) {
//     return next();
//   }
//   // mongoose.connection.on("connected", function () {
//   //   return next();
//   // });
//   mongoose.connect(
//     "mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/next-amazemo?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   );
//   // require("../models/User");

//   return next();
// }
import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/next-amazemo?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export default async function database(req, res, next) {
  if (client.isConnected()) {
    console.log("connectred");
    return next();
  }
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.DB_NAME);
  return next();
}
