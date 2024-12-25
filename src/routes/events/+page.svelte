<!-- SCRIPT -->
<script>
    import EventCard from "$lib/components/EventCard.svelte";
    let { data } = $props();
</script>

<!-- HTML -->
<h1>EVENTS</h1>

<!-- EVENT ADD -->
<a href="/events/create" class="btn btn-primary" role="button">ADD EVENT</a><br /><br />

<!-- MESSAGE -->
{#if data?.success}
    <div class="alert alert-success mt-3">
        Event wurde erfolgreich gelöscht!
    </div>
{/if}

<!-- EVENT LIST -->
<EventCard { data }></EventCard>


