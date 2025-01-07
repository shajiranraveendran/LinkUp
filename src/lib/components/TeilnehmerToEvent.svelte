<!-- SCRIPT -->
<script>
    export let data;

    // TEILNEHMER ALPHABETISCH ORDNEN
    let sortedTeilnehmer = data.teilnehmer.slice().sort((a, b) =>
        a.vorname.localeCompare(b.vorname)
    );
</script>

<!-- TEILNEHMER ZUM EVENT HINZUFÜGEN -->
<h3>TEILNEHMER HINZUFÜGEN</h3>
<form method="POST" action="?/addTeilnehmer" class="d-flex align-items-center gap-2">
    <select name="teilnehmerId" id="teilnehmer" class="form-control w-50">
        <option value="" disabled selected>CHOOSE TEILNEHMER ...</option>
        {#each sortedTeilnehmer as teilnehmer}
            <option value={teilnehmer._id}>{teilnehmer.vorname} {teilnehmer.nachname}</option>
        {/each}
    </select>
    <button class="btn btn-primary">ADD TEILNEHMER</button>
</form>
