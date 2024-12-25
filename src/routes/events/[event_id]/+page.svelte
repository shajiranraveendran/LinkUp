<!-- SCRIPT -->
<script>
    import EventDetail from "$lib/components/EventDetail.svelte";

    let { data } = $props();
</script>

<!-- HTML -->
<h1>EVENT DETAIL</h1>

<!-- BACK BUTTON -->
<a href="/events" class="btn btn-primary" role="button">BACK</a><br /><br />

<EventDetail { data }></EventDetail>

