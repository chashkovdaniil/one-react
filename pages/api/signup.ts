import { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../util/mongodb";
import { hash } from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(401).json('Sorry (((');
        return;
    }
    const { client, db } = await database();
    const collection = db.collection("users");
    hash(req.body.password, 10, async (err, hash) => {
        if (err) {
            throw err;
        }
        const userDoc = req.body;
        userDoc.password = hash;
        const result = await collection.insertOne(userDoc);

        const { PRIVATE_KEY }: any = process.env;
        const token = jwt.sign(req.body.email, PRIVATE_KEY);

        res.json({"authToken": token});
    });
}