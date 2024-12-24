import { createTeilnehmer } from '$lib/db.js';
import { redirect } from '@sveltejs/kit';


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
            return redirect(303, '/teilnehmer');
        } catch (error) {
            return { success: false };
        }
    }
};