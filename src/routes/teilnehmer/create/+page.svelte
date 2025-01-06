<!-- SCRIPT -->
<script>
    import TeilnehmerForm from "$lib/components/TeilnehmerForm.svelte";

    let { form } = $props();
</script>

<!-- HTML -->
<h1>ADD TEILNEHMER</h1>

<!-- BACK BUTTON -->
<a href="/teilnehmer" class="btn btn-primary" role="button">BACK</a><br /><br />

<!-- MESSAGE: TEILNEHMER ERSTELLEN -->
{#if form?.success}
    <div class="alert alert-success mt-3">
        TEILNEHMER: "{form.varname} {form.nachname}" wurde erstellt!
    </div>
{/if}

<!-- TEILNEHMER FORMULAR -->
<TeilnehmerForm { form } />

