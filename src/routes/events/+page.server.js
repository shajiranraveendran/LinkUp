import { getEvents, deleteEvent } from '$lib/db.js';

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
        const eventId = data.get('id');
        const eventName = data.get('eventname');
        
        try {
            await deleteEvent(eventId);
            return { success: true, eventname: eventName };
        } catch (error) {
            console.error("Fehler beim Löschen des Events: ", error);
            return { success: false };
        }
    }
};