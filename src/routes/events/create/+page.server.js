import { createEvent } from '$lib/db.js';

// EVENT ERSTELLEN
export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();
        let event = {
            eventname: data.get('eventname'),
            beschreibung: data.get('beschreibung'),
            datum: data.get('datum'),
            adresse: data.get('adresse'),
        };

        try {
            await createEvent(event);
            return { success: true, eventname: event.eventname, datum: event.datum };
        } catch (error) {
            return { success: false };
        }
    }
};