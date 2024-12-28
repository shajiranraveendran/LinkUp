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
<EventEdit {data} {form} /><br /><br />

<!-- Teilnehmer Hinzufügen -->
<h2>TEILNEHMER HINZUFÜGEN</h2>
<form
    method="POST"
    action="?/addTeilnehmer"
    class="d-flex align-items-center gap-2"
>
    <select name="teilnehmerId" id="teilnehmer" class="form-control w-50">
        {#each data.teilnehmer as teilnehmer}
            <option value={teilnehmer._id}
                >{teilnehmer.vorname} {teilnehmer.nachname}</option
            >
        {/each}
    </select>
    <button class="btn btn-primary">ADD TEILNEHMER</button>
</form>

<!-- Tabelle der Teilnehmer im Event -->
{#if data.event.teilnehmer?.length > 0}
    <br /><br />
    <table>
        <thead>
            <tr>
                <th>VORNAME</th>
                <th>NACHNAME</th>
                <th>TEILNEHMER-ID</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {#each data.event.teilnehmer as teilnehmer}
                <tr>
                    <td>{teilnehmer.vorname}</td>
                    <td>{teilnehmer.nachname}</td>
                    <td>{teilnehmer._id}</td>
                    <td>
                        <!-- Entfernen-Button -->
                        <form method="POST" action="?/removeTeilnehmer">
                            <input
                                type="hidden"
                                name="teilnehmerId"
                                value={teilnehmer._id}
                            />
                            <button class="btn btn-danger">REMOVE</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <br />
    <p>Es wurden noch keine Teilnehmer hinzugefügt.</p>
{/if}
