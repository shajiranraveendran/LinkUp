<!-- SCRIPT -->
<script>
    import EventEdit from "$lib/components/EventEdit.svelte";

    let { data, form } = $props();
</script>


<!-- HTML -->
<h1>EVENT DETAIL</h1>

<!-- BACK BUTTON -->
<a href="/events" class="btn" role="button">BACK</a><br /><br />

<!-- MESSAGE -->
{#if form?.success}
    <div class="alert alert-primary mt-3">
        EVENT: "{form.eventname}" wurde aktualisiert!
    </div>
{/if}

<!-- EVENT EDIT-->
<EventEdit {data} {form} />
