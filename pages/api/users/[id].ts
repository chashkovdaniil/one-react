import { verify } from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../util/mongodb";
import { authenticated } from "../../../middleware/authenticated";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { client, db } = await database();
  const collection = db.collection('users');
  const query = {
    _id: new ObjectId(req.query.id as string)
  };
  const user = (await collection.find(query).toArray())[0];
  res.status(200).json({
    "id": user._id,
    "email": user.email
  });
};