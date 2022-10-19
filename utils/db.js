import {MongoClient} from "mongodb";
const MONGOURI = process.env.MONGOURI;
const DBName = "telefonbuch";

console.log("mongo", MONGOURI);

const client = new MongoClient(MONGOURI);
let db;

const connect = async () => {
    if (db){
        return db;
    }
    await client.connect();
    let dbnew = client.db(DBName);
    db = dbnew;
    return db;
}

export default connect;