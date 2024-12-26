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

        // TEILNEHMER NACH ID LÖSCHEN
        deletePerson(data.get('id'));

        let person = {
            _id: data.get('id'),
            vorname: data.get('vorname'),
            nachname: data.get('nachname'),
            email: data.get('email'),
        };
        const vor = data.get('vorname');
        const nach = data.get('nachname');

        // TEILNEHMER AKTUALISIEREN
        await updatePerson(person);


        // MESSAGE
        try {
            await deletePerson(person._id);
            return { success: true, vorname: vor, nachname: nach };
        } catch (error) {
            console.error("Fehler beim Löschen des Events: ", error);
            return { success: false };
        }

    }
};
