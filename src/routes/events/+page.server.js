import { getEvents, deleteEvent, updateEvent } from '$lib/db.js';

// EVENTS ANZEIGEN
export async function load() {
    return {
        events: await getEvents()
    };
}

// EVENT LÖSCHEN
export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();

        // EVENT NACH ID LÖSCHEN
        deleteEvent(data.get('id'));

        let event = {
            _id: data.get('id'),
            eventname: data.get('eventname'),
            beschreibung: data.get('beschreibung'),
            datum: data.get('datum'),
            adresse: data.get('adresse'),
        };

        // EVENT AKTUALISIEREN
        await updateEvent(event);

        return { success: true };
    }
};

