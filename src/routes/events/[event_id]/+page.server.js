import { getEvent, getTeilnehmer, addTeilnehmerToEvent, removeTeilnehmerFromEvent, updateEvent } from "$lib/db.js";

export async function load({ params }) {
    const event = await getEvent(params.event_id); // Lädt das Event inklusive der Teilnehmerliste
    const teilnehmer = await getTeilnehmer(); // Lädt alle verfügbaren Teilnehmer für die Dropdown-Auswahl
    return {
        event,
        teilnehmer,
    };
}

export const actions = {
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

    addTeilnehmer: async ({ request, params }) => {
        const data = await request.formData();
        const teilnehmerId = data.get("teilnehmerId");

        try {
            await addTeilnehmerToEvent(params.event_id, teilnehmerId);
            return { success: true };
        } catch {
            return { success: false };
        }
    },


    removeTeilnehmer: async ({ request, params }) => {
        const data = await request.formData();
        const teilnehmerId = data.get("teilnehmerId");

        try {
            await removeTeilnehmerFromEvent(params.event_id, teilnehmerId);
            return { success: true };
        } catch {
            return { success: false };
        }
    },
};
