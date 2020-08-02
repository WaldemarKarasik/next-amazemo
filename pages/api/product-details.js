import nextConnect from "next-connect";
import middleware from "../../database/middlewares";
import { data } from "../../data";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  const { id } = req.query;
  const product = data.products.find((product) => product._id == id);
  res.json(product);
});

export default handler;
