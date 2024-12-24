import { getEvent, updateEvent } from '$lib/db.js'

export async function load({ params }) {
    return {
        event: await getEvent(params.event_id)
    }
}


// EVENT AKTUALISIEREN
export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();

        let event = {
            _id: data.get('id'),
            eventname: data.get('eventname'),
            beschreibung: data.get('beschreibung'),
            datum: data.get('datum'),
            adresse: data.get('adresse'),
        };

        try {
            await updateEvent(event);
            return { success: true, eventname: event.eventname};
        } catch (error) {
            return { success: false };
        }
    }
}