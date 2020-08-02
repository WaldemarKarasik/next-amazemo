// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nextConnect from "next-connect";
import middleware from "../../../database/middlewares/index";
// import { data } from "../../../data";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  console.log(req.dbClient);
  res.json("h");
});

export default handler;
