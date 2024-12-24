import { MongoClient } from "mongodb";
import { DB_URI } from "$env/static/private";

// CONNECT TO MONGODB
const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("LinkUpDB");

// GET TEILNEHMER
export async function getTeilnehmer() {
    let teilnehmer = [];
    try {
        const collection = db.collection("teilnehmer");
        const query = {};
        teilnehmer = await collection.find(query).toArray();
        teilnehmer.forEach((person) => {
            person._id = person._id.toString();
        });
    } catch (error) {
        console.error("Fehler in getTeilnehmer:", error);
        throw error;
    }
    return teilnehmer;
}

// CREATE TEILNEHMER
export async function createTeilnehmer(person) {
    try {
        const collection = db.collection("teilnehmer");
        const result = await collection.insertOne(person);
        return result.insertedId.toString(); // convert ObjectId to String
    } catch (error) {
        console.log(error.message);
    }
    return null;
}