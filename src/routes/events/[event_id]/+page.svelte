<!-- SCIRPT -->
<script>
    import EventDetail from "$lib/components/EventDetail.svelte";
    import EventEdit from "$lib/components/EventEdit.svelte";
    import ImageText from "$lib/components/ImageText.svelte";
    import TeilnehmerInEvent from "$lib/components/TeilnehmerInEvent.svelte";
    import TeilnehmerToEvent from "$lib/components/TeilnehmerToEvent.svelte";

    let { data, form } = $props();
</script>

<!-- HTML -->
<h1>EVENT DETAIL</h1>

<!-- BACK BUTTON -->
<a href="/events" class="btn" role="button">BACK</a><br /><br />

<!-- MESSAGE: EVENT UPDATE -->
{#if form?.success && form?.eventname}
    <div class="alert alert-primary mt-3">
        Event: "{form.eventname}" wurde aktualisiert!
    </div>
{/if}

<!-- MESSAGE: TEILNEHMER ADD -->
{#if form?.success && form?.action === "addTeilnehmer"}
    <div class="alert alert-success mt-3">
        Teilnehmer: "{form.vorname} {form.nachname}" wurde zum Event hinzugefügt!
    </div>
{/if}

<!-- MESSAGE: TEILNEHMER REMOVE -->
{#if form?.success && form?.action === "removeTeilnehmer"}
    <div class="alert alert-danger mt-3">
        Teilnehmer: "{form.vorname} {form.nachname}" wurde aus dem Event entfernt!
    </div>
{/if}

<!-- EVENT EDIT -->
<EventEdit {data} {form} /><br /><br /><br /><br />

<hr style="border: 1px solid rgb(0,0,0); width: 100%; margin: 20px auto;"><br /><br />

<!-- TEILNEHMER ZUM EVENT HINZUFÜGEN -->
<TeilnehmerToEvent {data} />

<!-- TEILNEHMER ZUM EVENT ANZEIGEN -->
<TeilnehmerInEvent {data} />

<!--
<EventDetail {data} />
-->