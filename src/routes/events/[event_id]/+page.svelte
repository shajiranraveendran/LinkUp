<script>
    import EventEdit from "$lib/components/EventEdit.svelte";
    import TeilnehmerList from "$lib/components/TeilnehmerList.svelte";

    let { data, form } = $props();
</script>

<h1>EVENT DETAIL</h1>

<a href="/events" class="btn" role="button">BACK</a><br /><br />

{#if form?.success}
    <div class="alert alert-primary mt-3">
        Event: "{form?.eventname}" wurde erfolgreich aktualisiert!
    </div>
{/if}

<EventEdit {data} {form} /><br />

<form method="POST" action="?/addTeilnehmer">
    <label for="teilnehmer">CHOOSE TEILNEHMER</label><br />
    <select name="teilnehmerId" id="teilnehmer" class="form-control">
        {#each data.teilnehmer as teilnehmer}
            <option value={teilnehmer._id}>{teilnehmer.vorname} {teilnehmer.nachname}</option>
        {/each}
    </select><br />
    <button class="btn btn-primary mt-2">ADD TEILNEHMER</button>
</form>
