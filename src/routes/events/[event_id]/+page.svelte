<script>
    import EventEdit from "$lib/components/EventEdit.svelte";

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
<EventEdit {data} {form} /><br />

<!-- Teilnehmer Hinzufügen -->
<h2>TEILNEHMER HINZUFÜGEN</h2>
<form method="POST" action="?/addTeilnehmer">
    <label for="teilnehmer">CHOOSE TEILNEHMER</label><br />
    <select name="teilnehmerId" id="teilnehmer" class="form-control">
        {#each data.teilnehmer as teilnehmer}
            <option value={teilnehmer._id}>{teilnehmer.vorname} {teilnehmer.nachname}</option>
        {/each}
    </select><br />
    <button class="btn btn-primary mt-2">ADD TEILNEHMER</button>
</form>

<br />
<!-- Tabelle der Teilnehmer im Event -->
<h2>TEILNEHMER IM EVENT</h2>
{#if data.event.teilnehmer?.length > 0}
    <table class="table table-striped mt-3">
        <thead>
            <tr>
                <th>Vorname</th>
                <th>Nachname</th>
                <th>Teilnehmer-ID</th> <!-- Optional: Teilnehmer-ID anzeigen -->
            </tr>
        </thead>
        <tbody>
            {#each data.event.teilnehmer as teilnehmer}
                <tr>
                    <td>{teilnehmer.vorname}</td>
                    <td>{teilnehmer.nachname}</td>
                    <td>{teilnehmer._id}</td> <!-- Optional: Teilnehmer-ID anzeigen -->
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <p>Es wurden noch keine Teilnehmer hinzugefügt.</p>
{/if}