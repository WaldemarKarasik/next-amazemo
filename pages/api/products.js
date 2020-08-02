// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import middleware from "../../database/middlewares/index";
import { data } from "../../data";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  if (req.query.id) {
    const product = data.products.find((x) => x._id == req.query.id);
    if (product) {
      return res.json(product);
    }
  }
  res.json(data.products);
});

export default handler;
