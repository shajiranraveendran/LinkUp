<!-- SCRIPT -->
<script>
    import TeilnehmerEdit from "$lib/components/TeilnehmerEdit.svelte";

    let { data, form } = $props();
</script>

<!-- HTML -->
<h1>TEILNEHMER DETAIL</h1>

<!-- BACK BUTTON -->
<a href="/teilnehmer" class="btn btn-primary" role="button">BACK</a><br /><br />

<!-- MESSAGE: TEILNEHMER UPDATE -->
{#if form?.success}
    <div class="alert alert-primary mt-3">
        TEILNEHMER: "{form.vorname} {form.nachname}" wurde aktualisiert!
    </div>
{/if}

<!-- TEILNEHMER EDIT -->
<TeilnehmerEdit {data} {form} />