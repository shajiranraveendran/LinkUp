import { getTeilnehmer, deletePerson } from "$lib/db.js";

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
        const id = data.get('id');
        const vorname = data.get('vorname');
        const nachname = data.get('nachname');

        // MESSAGE
        try {
            await deletePerson(id);
            return { success: true, vorname: vorname, nachname: nachname };
        } catch (error) {
            console.error("Fehler beim Löschen des Events: ", error);
            return { success: false };
        }

    }
};
