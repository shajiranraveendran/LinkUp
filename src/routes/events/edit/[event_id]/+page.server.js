import { getEvent, updateEvent } from '$lib/db.js';

// EVENT LADEN
export async function load({ params }) {
    return { data: await getEvent(params.event_id) };
}

// AKTIONEN DEFINIEREN
export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();
        const event = {
            _id: data.get('id'),
            eventname: data.get('eventname'),
            beschreibung: data.get('beschreibung'),
            datum: data.get('datum'),
            adresse: data.get('adresse'),
        };

        try {
            await updateEvent(event);
            return { success: true, eventname: event.eventname };
        } catch {
            return { success: false };
        }
    }
};
