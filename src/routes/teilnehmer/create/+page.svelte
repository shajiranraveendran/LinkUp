<!-- SCRIPT -->
<script>
    let { form } = $props();
</script>


<!-- HTML -->
<h1>ADD TEILNEHMER</h1>

<!-- BACK BUTTON -->
<a href="/teilnehmer" class="btn btn-primary" role="button">BACK</a><br /><br />

<!-- TEILNEHMER FORM -->
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

<!-- MESSAGE -->
{#if form?.success}
    <div class="alert alert-success mt-3">
        Teilnehmer {form.vorname} {form.nachname} erfolgreich erstellt!
    </div>
{/if}
