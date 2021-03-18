import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../util/mongodb";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(401).json('Sorry (((');
    return;
  }
  const { client, db } = await database();
  const collection = db.collection("users");
  const query = {
    email: req.body.email
  }
  const user = await collection.findOne(query);
  if (!user) {
    res.status(401).json({ "message": "User not found" });
    return;
  }
  compare(req.body.password, user.password, (err, result) => {
    if (err) {
      throw err;
    }
    if (!result) {
      res.json({ "message": "Password is wrong" });
      return;
    }

    const { PRIVATE_KEY }: any = process.env;
    const token = sign(req.body.email, PRIVATE_KEY);

    res.json({ "authToken": token });
  });
  console.log(user);
}