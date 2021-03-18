import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const authenticated = (handler: NextApiHandler) => async (
  req: NextApiRequest, res: NextApiResponse
) => {
  const { PRIVATE_KEY }: any = process.env;
  verify(req.headers.authorization!, PRIVATE_KEY, async function (err: any, decoded: any) {
    if (!err && decoded) {
      return await handler(req, res);
    }
    res.status(401).json({ "message": "Sorry. You are not authenticated" });
  });

};