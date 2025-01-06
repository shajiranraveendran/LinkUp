import { getPerson, updatePerson } from '$lib/db.js'

export async function load({ params }) {
    return {
        person: await getPerson(params.person_id)
    }
}

// PERSON AKTUALISIEREN
export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();

        let person = {
            _id: data.get('id'),
            vorname: data.get('vorname'),
            nachname: data.get('nachname'),
            email: data.get('email'),
        };

        try {
            await updatePerson(person);
            return { success: true, vorname: person.vorname, nachname: person.nachname };
        } catch (error) {
            return { success: false };
        }
    }
}