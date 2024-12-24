import { getTeilnehmer, deletePerson, updatePerson } from "$lib/db.js";

// TEILNEHMER ANZEIGEN
export async function load() {
    return {
        teilnehmer: await getTeilnehmer()
    };
}

// TEILNEHMER LÖSCHEN
export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();

        // TEILNEHMER MIT ID LÖSCHEN
        deletePerson(data.get('id'));

        let person = {
            _id: data.get('id'),
            vorname: data.get('vorname'),
            nachname: data.get('nachname'),
            email: data.get('email'),
        };

        // TEILNEHMER AKTUALISIEREN
        await updatePerson(person);

        return { success: true };
    }
};
