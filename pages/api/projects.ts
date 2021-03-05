import { NextApiRequest, NextApiResponse } from 'next';
import Project from '../../data/models/Project';
import {connectToDatabase} from '../../util/mongodb';

export default async function projects(req: NextApiRequest, res: NextApiResponse) {
    const { client, db } = await connectToDatabase();
    if (await client.isConnected()) {
        const collection = db.collection('projects');
        let projects: Array<any> = await collection.find().toArray();
        res.status(200).json(projects);
        console.log('stream');
        
        return;
    }
    return res.status(502).json({msg: 'Database is not connected'});
}