import { getTeilnehmer } from "$lib/db.js";

export async function load() {
    return {
        teilnehmer: await getTeilnehmer(),
    };
}
