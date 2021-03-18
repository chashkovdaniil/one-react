import { MongoClient } from 'mongodb'
import Database from '../interfaces/database';

const { MONGODB_URI, MONGODB_DB }: any = process.env

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}
declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      mongo: any;
    }
  }
}
let cached: Database = global.mongo;

export async function database(): Promise<Database> {
  if (cached) {
    if (!cached.client.isConnected()) {
      throw new Error('Connection failed');
      // return null;
    }
    return cached;
  }


  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  const client = await MongoClient.connect(MONGODB_URI, opts);
  const db = client.db(MONGODB_DB);

  cached = global.mongo = { client: client, db: db };

  return cached;
}