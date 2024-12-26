<!-- SCRIPT -->
<script>
    import EventForm from "$lib/components/EventForm.svelte";

    let { form } = $props();
</script>


<!-- HTML -->
<h1>ADD EVENT</h1>

<!-- BACK BUTTON -->
<a href="/events" class="btn btn-primary" role="button">BACK</a><br />

<!-- MESSAGE -->
{#if form?.success}
    <div class="alert alert-success mt-3">
        EVENT: "{form.eventname}" wurde für den {form.datum} erstellt!
    </div>
{/if}

<!-- TEILNEHMER FORM -->
<br /><br /><EventForm { form }></EventForm>


