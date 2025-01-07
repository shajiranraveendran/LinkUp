import { createTeilnehmer } from '$lib/db.js';

// TEILNEHMER ERSTELLEN
export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();
        let person = {
            vorname: data.get('vorname'),
            nachname: data.get('nachname'),
            email: data.get('email')
        };

        try {
            await createTeilnehmer(person);
            return { success: true, varname: person.vorname, nachname: person.nachname };
        } catch (error) {
            return { success: false };
        }
    }
};