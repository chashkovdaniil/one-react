import { Cursor } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../util/mongodb';

export default async function projects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { client, db } = await database();
  if (client.isConnected()) {
    const collection = db.collection('projects');
    const limit = parseInt(req.query.limit as string);
    let cursor: Cursor = collection.find();

    if ((typeof limit == "number") && !isNaN(limit)) {
      cursor = cursor.limit(limit);
    }

    let projects: Array<any> = await cursor.toArray();
    res.status(200).json(projects);

    return;
  }
  return res.status(503).json({ message: 'Database is not connected' });
}