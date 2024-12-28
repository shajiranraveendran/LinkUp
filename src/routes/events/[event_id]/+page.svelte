<script>
    import EventEdit from "$lib/components/EventEdit.svelte";
    import TeilnehmerInEvent from "$lib/components/TeilnehmerInEvent.svelte";
    import TeilnehmerToEvent from "$lib/components/TeilnehmerToEvent.svelte";

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

<!-- TEILNEHMER ZUM EVENT HINZUFÜGEN -->
<TeilnehmerToEvent {data} />

<!-- TEILNEHMER ZUM EVENT ANZEIGEN -->
<TeilnehmerInEvent {data} />