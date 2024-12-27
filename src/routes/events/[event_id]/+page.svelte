<script>
    import EventEdit from "$lib/components/EventEdit.svelte";
    import TeilnehmerList from "$lib/components/TeilnehmerList.svelte";

    let { data, form } = $props();
</script>

<h1>EVENT DETAIL</h1>

<!-- BACK BUTTON -->
<a href="/events" class="btn" role="button">BACK</a><br /><br />

<!-- Erfolgsnachricht für Event-Update -->
{#if form?.success}
    <div class="alert alert-primary mt-3">
        Event: "{form?.eventname}" wurde erfolgreich aktualisiert!
    </div>
{/if}

<!-- EVENT EDIT -->
<EventEdit {data} {form} />

<!-- Teilnehmer Hinzufügen -->
<form method="POST" action="?/addTeilnehmer">
    <label for="teilnehmer">Wähle Teilnehmer:</label>
    <select name="teilnehmerId" id="teilnehmer" class="form-control">
        {#each data.teilnehmer as teilnehmer}
            <option value={teilnehmer._id}>{teilnehmer.vorname} {teilnehmer.nachname}</option>
        {/each}
    </select>
    <button class="btn btn-primary mt-2">Teilnehmer Hinzufügen</button>
</form>

<!-- Hinzugefügte Teilnehmer Anzeige -->
<h2>Teilnehmerliste</h2>
<ul>
    {#each data.teilnehmer as teilnehmer}
        <li>{teilnehmer.vorname} {teilnehmer.nachname}</li>
    {/each}
</ul>
