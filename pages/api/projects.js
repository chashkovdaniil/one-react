import Project from '../../models/Project';
import {connectToDatabase} from '../../util/mongodb';

export default async function handler(req, res) {
    const { client, db } = await connectToDatabase();
    if (await client.isConnected()) {
        const collection = db.collection('projects');

        collection.find({}).toArray(function (err, projects) {
            res.status(200).json(projects);
        });
        return;
    }
    return res.status(502).json({msg: 'Database is not connected'});
}