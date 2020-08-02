const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const db = require("./database");
const data = require("../data");
const connectDb = require("./middlewares/connectDb");

// db.connect();

app.prepare().then(() => {
  const server = express();
  // require("./middlewares").init(server, db);
  server.use(connectDb);
  server.use("/custom-api/users", require("./routes/userRoute"));
  server.get("/custom-api/products", async (req, res) => {
    if (req.query.id) {
      const product = data.products.find((x) => x._id == req.query.id);
      if (product) {
        return res.json(product);
      }
    }
    res.json(data.products);
  });
  server.get("/custom-api/product-details", async (req, res) => {
    const { id } = req.query;
    const product = data.products.find((product) => product._id == id);
    res.json(product);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost`);
  });
});
