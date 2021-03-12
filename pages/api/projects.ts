import { Cursor } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../util/mongodb';

export default async function projects(req: NextApiRequest, res: NextApiResponse) {
    const { client, db } = await database();
    if (await client.isConnected()) {
        const collection = db.collection('projects');
        let cursor: Cursor = collection.find();
        const limit = parseInt(req.query.limit as string);

        if ((typeof limit == "number") && !isNaN(limit)) {
            cursor = cursor.limit(limit);
        }

        let projects: Array<any> = await cursor.toArray();
        res.status(200).json(projects);

        return;
    }
    return res.status(502).json({ msg: 'Database is not connected' });
}