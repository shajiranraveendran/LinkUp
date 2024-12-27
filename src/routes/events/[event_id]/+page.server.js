import { getEvent, getTeilnehmer, updateEvent } from "$lib/db.js";

export async function load({ params }) {
    const event = await getEvent(params.event_id);
    // Lade alle Teilnehmer
    const teilnehmer = await getTeilnehmer();
    return {
        event,
        teilnehmer,  // Alle Teilnehmer für die Auswahl im Formular
    };
}

export const actions = {
    // Event aktualisieren
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
    },

    // Teilnehmer hinzufügen
    addTeilnehmer: async ({ request, params }) => {
        const data = await request.formData();
        const teilnehmerId = data.get('teilnehmerId');
        
        try {
            // Teilnehmer zum Event hinzufügen
            const event = await getEvent(params.event_id);
            if (!event.teilnehmer) {
                event.teilnehmer = [];
            }
            event.teilnehmer.push(teilnehmerId);

            await updateEvent(event); // Event mit hinzugefügtem Teilnehmer aktualisieren
            return { success: true };
        } catch {
            return { success: false };
        }
    }
};
