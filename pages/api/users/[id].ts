import { verify } from "jsonwebtoken";
import { ObjectId } from "mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../util/mongodb";
const authenticated = (fn: NextApiHandler) => async (
    req: NextApiRequest, res: NextApiResponse
) => {
    const { PRIVATE_KEY }: any = process.env;
    verify(req.headers.authorization!, PRIVATE_KEY, async function(err: any, decoded: any) {
        if (!err && decoded) {
            return await fn(req, res);
        }
        res.status(500).json({"message":"Sorry. You are not authenticated"});
    });

};

export default authenticated(async function handler(req: NextApiRequest, res: NextApiResponse) {
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
});