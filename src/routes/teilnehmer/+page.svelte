<!-- SCRIPT -->
<script>
    import TeilnehmerList from "$lib/components/TeilnehmerList.svelte";
    
    let { data, form} = $props();
</script>


<!-- HTML -->
<h1>TEILNEHMER</h1>

<!-- TEILNEHMER ADD -->
<a href="/teilnehmer/create" class="btn btn-primary" role="button">ADD TEILNEHMER</a><br /><br />


<!-- MESSAGE -->
{#if form?.success}
    <div class="alert alert-danger mt-3">
        TEILNEHMER: "{form.vorname} {form.nachname}" wurde gelöscht!
    </div>
{/if}


<!-- TEILNEHMER LIST -->
<TeilnehmerList {data}></TeilnehmerList>
