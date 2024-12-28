import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

// CONNECT TO MONGODB
const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("LinkUpDB");

// TEILNEHMER //

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

// GET PERSON
export async function getPerson(id) {
    let person = null;
    try {
        const collection = db.collection("teilnehmer");
        const query = { _id: new ObjectId(id) };
        person = await collection.findOne(query);

        if (!person) {
            console.log("No person with id " + id);
        } else {
            person._id = person._id.toString();
        }
    } catch (error) {
        console.log(error.message);
    }
    return person;
}

// CREATE TEILNEHMER
export async function createTeilnehmer(person) {
    try {
        const collection = db.collection("teilnehmer");
        const result = await collection.insertOne(person);

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

        console.log(`Teilnehmer: ${person.vorname} ${person.nachname} wurde aktualisiert.`);
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

        console.log(`Teilnehmer: ${person.vorname} ${person.nachname} wurde gelöscht.`);
    } catch (error) {
        console.error("Fehler in deletePerson:", error);
    }
}

// EVENTS //

// GET EVENTS
export async function getEvents() {
    let events = [];
    try {
        const collection = db.collection("events");
        const query = {};
        events = await collection.find(query).toArray();
        events.forEach((event) => {
            event._id = event._id.toString();
        });
    } catch (error) {
        console.error("Fehler in getEvents:", error);
        throw error;
    }
    return events;
}

// GET EVENT
export async function getEvent(id) {
    let event = null;
    try {
        const collection = db.collection("events");
        const query = { _id: new ObjectId(id) };
        event = await collection.findOne(query);

        if (!event) {
            console.log("No event with id " + id);
        } else {
            event._id = event._id.toString();
        }
    } catch (error) {
        console.log(error.message);
    }
    return event;
}

// CREATE EVENT
export async function createEvent(event) {
    event.poster = "/images/placeholder.jpg";
    try {
        const collection = db.collection("events");
        const result = await collection.insertOne(event);

        console.log(`Event: ${event.eventname} wurde erstellt.`);
        return result.insertedId.toString();
    } catch (error) {
        console.error("Fehler in createEvent:", error);
    }
    return null;
}

// UPDATE EVENT
export async function updateEvent(event) {
    try {
        const id = event._id;
        delete event._id;

        const collection = db.collection("events");
        const query = { _id: new ObjectId(id) };
        const result = await collection.updateOne(query, { $set: event });

        console.log(`Event: ${event.eventname} wurde aktualisiert.`);
    } catch (error) {
        console.error("Fehler in updateEvent:", error);
    }
}

// DELETE EVENT
export async function deleteEvent(id) {
    try {
        const collection = db.collection("events");
        const query = { _id: new ObjectId(id) };
        const event = await collection.findOne(query);
        await collection.deleteOne(query);

        console.log(`Event: ${event.eventname} wurde gelöscht.`);
    } catch (error) {
        console.error("Fehler in deleteEvent:", error);
    }
}



// TEILNEHMER ZU EVENTS //

// ADD TEILNEHMER TO EVENT
export async function addTeilnehmerToEvent(eventId, teilnehmerId) {
    try {
        const collectionEvents = db.collection("events");
        const collectionTeilnehmer = db.collection("teilnehmer");

        const teilnehmer = await collectionTeilnehmer.findOne({ _id: new ObjectId(teilnehmerId) });
        if (!teilnehmer) {
            throw new Error(`Teilnehmer mit ID ${teilnehmerId} nicht gefunden.`);
        }

        const teilnehmerObj = {
            _id: teilnehmer._id.toString(),
            vorname: teilnehmer.vorname,
            nachname: teilnehmer.nachname,
        };

        const query = { _id: new ObjectId(eventId) };
        const update = { $push: { teilnehmer: teilnehmerObj } };
        await collectionEvents.updateOne(query, update);

        console.log(`Teilnehmer ${teilnehmer.vorname} ${teilnehmer.nachname} wurde zum Event hinzugefügt.`);
    } catch (error) {
        console.error("Fehler beim Hinzufügen des Teilnehmers zum Event:", error);
    }
}

// REMOVE TEILNEHMER FROM EVENT
export async function removeTeilnehmerFromEvent(eventId, teilnehmerId) {
    try {
        const collectionEvents = db.collection("events");

        const query = { _id: new ObjectId(eventId) };
        const update = { $pull: { teilnehmer: { _id: teilnehmerId } } };
        await collectionEvents.updateOne(query, update);

        console.log(`Teilnehmer mit ID ${teilnehmerId} wurde aus dem Event entfernt.`);
    } catch (error) {
        console.error("Fehler beim Entfernen des Teilnehmers aus dem Event:", error);
    }
}
