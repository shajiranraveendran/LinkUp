<!-- SCRIPT -->
<script>
    import EventCard from "$lib/components/EventCard.svelte";
    import ImageText from "$lib/components/ImageText.svelte";

    export let data;
    export let form;
</script>

<!-- HTML -->
<h1>EVENTS</h1>

<!-- EVENT ADD -->
<a href="/events/create" class="btn btn-primary" role="button">ADD EVENT</a><br />

<!-- MESSAGE: EVENT LÖSCHEN -->
{#if form?.success}
    <div class="alert alert-danger mt-3">
        EVENT: "{form.eventname}" wurde gelöscht!
    </div>
{/if}

<!-- EVENT LIST -->
<br /><br /><EventCard {data} /><br /><br />

<ImageText />