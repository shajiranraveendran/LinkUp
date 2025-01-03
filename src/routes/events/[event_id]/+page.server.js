import { getEvent, getTeilnehmer, addTeilnehmerToEvent, removeTeilnehmerFromEvent, updateEvent, deleteEvent } from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const event = await getEvent(params.event_id); // EVENT + TEILNEHMER LADEN
    const teilnehmer = await getTeilnehmer(); // ALLE TEILNEHMER LADEN (DROPDOWN)
    return {
        event,
        teilnehmer,
    };
}

export const actions = {
    // EVENT AKTUALISIEREN
    update: async ({ request }) => {
        const data = await request.formData();
        const event = {
            _id: data.get("id"),
            eventname: data.get("eventname"),
            beschreibung: data.get("beschreibung"),
            datum: data.get("datum"),
            adresse: data.get("adresse"),
        };

        try {
            await updateEvent(event);
            return { success: true, eventname: event.eventname };
        } catch {
            return { success: false };
        }
    },

    // EVENT LÖSCHEN
    delete: async ({ request }) => {
        const data = await request.formData();
        const eventId = data.get("id");
        const eventName = data.get("eventname");
    
        await deleteEvent(eventId);
        throw redirect(303, "/events", {success: true, eventname: eventName});

    },
    

    // TEILNEHMER HINZUFÜGEN
    addTeilnehmer: async ({ request, params }) => {
        const data = await request.formData();
        const teilnehmerId = data.get("teilnehmerId");

        try {
            const teilnehmer = await addTeilnehmerToEvent(params.event_id, teilnehmerId);
            return { success: true, action: "addTeilnehmer", vorname: teilnehmer.vorname, nachname: teilnehmer.nachname, email: teilnehmer.email };
        } catch {
            return { success: false };
        }
    },

    // TEILNEHMER ENTFERNEN
    removeTeilnehmer: async ({ request, params }) => {
        const data = await request.formData();
        const teilnehmerId = data.get("teilnehmerId");

        try {
            const teilnehmer = await removeTeilnehmerFromEvent(params.event_id, teilnehmerId);
            return { success: true, action: "removeTeilnehmer", vorname: teilnehmer.vorname, nachname: teilnehmer.nachname, email: teilnehmer.email };
        } catch {
            return { success: false };
        }
    },
};
