<script>
    let { form } = $props();
</script>

<h1>ADD TEILNEHMER</h1>
<a href="/teilnehmer" class="btn btn-primary" role="button">BACK</a><br /><br />

<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="" class="form-label">Vorname</label>
        <input name="vorname" class="form-control" type="text" required />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Nachname</label>
        <input name="nachname" class="form-control" type="text" required />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input name="email" class="form-control" type="email" required />
    </div>
    <br />
    <button type="submit" class="btn btn-primary">ADD TEILNEHMER</button>
</form>

{#if form?.success}
    <p>Teilnehmer erfolgreich erstellt!</p>
{:else if form?.error}
    <p>Fehler bei der Erstellung des Teilnehmers!</p>
{/if}
