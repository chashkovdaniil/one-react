import { NextApiRequest, NextApiResponse } from 'next';
import {connectToDatabase} from '../../../util/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { client, db } = await connectToDatabase();
    const { url } = req.query;
    if (await client.isConnected()) {
        const collection = db.collection('projects');
        let project: Array<any> = (await collection.find({url: url}).toArray())[0];
        res.status(200).json(project);
        
        return;
    }
    return res.status(502).json({msg: 'Database is not connected'});
}