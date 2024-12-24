import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

// CONNECT TO MONGODB
const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("LinkUpDB");



//////////////////////////////////////////
// LINKUP
//////////////////////////////////////////



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

    // CONSOLE LOG
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

        // CONSOLE LOG
        console.log(`Teilnehmer: ${person.vorname} ${person.nachname} wurde erstellt.`);
        return result.insertedId.toString();
    } catch (error) {
        console.error("Fehler in createTeilnehmer:", error);
    }
    return null;
}

// UPDATE TEILNEHMER
export async function updatePerson(person) {
    try {
        const id = person._id;
        delete person._id;
        const collection = db.collection("teilnehmer");
        const query = { _id: new ObjectId(id) };
        const result = await collection.updateOne(query, { $set: person });

        // CONSOLE LOG
        console.log(`Teilnehmer: ${id} wurde aktualisiert.`);
    } catch (error) {
        console.error("Fehler in updatePerson:", error);
    }
}

// DELETE TEILNEHMER
export async function deletePerson(id) {
    try {
        const collection = db.collection("teilnehmer");
        const query = { _id: new ObjectId(id) };
        const person = await collection.findOne(query);
        await collection.deleteOne(query);

        // CONSOLE LOG
        console.log(`Teilnehmer: ${person.vorname} ${person.nachname} wurde gelöscht.`);
    } catch (error) {
        console.error("Fehler in deletePerson:", error);
    }
}
