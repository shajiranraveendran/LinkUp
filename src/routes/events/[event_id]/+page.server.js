import { getEvent, updateEvent, deleteEvent } from '$lib/db.js'

// EVENTS ANZEIGEN
export async function load({ params }) {
        return { event: await getEvent(params.event_id) };
}


export const actions = {
    // EVENT AKTUALISIEREN
    update: async ({ request }) => {
        const data = await request.formData();
        const event = {
            _id: data.get('id'),
            eventname: data.get('eventname'),
            beschreibung: data.get('beschreibung'),
            datum: data.get('datum'),
            adresse: data.get('adresse'),
        };

        // MESSAGE
        try {
            await updateEvent(event);
            return { success: true, eventname: event.eventname };
        } catch {
            return { success: false };
        }
    }
};
