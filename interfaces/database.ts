import { MongoClient, Db } from "mongodb";

interface Database extends Object{
    client: MongoClient;
    db: Db;
}
export default Database