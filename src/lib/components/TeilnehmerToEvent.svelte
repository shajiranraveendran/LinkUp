<!-- SCRIPT -->
<script>
    export let data;
</script>


<!-- TEILNEHMER ZUM EVENT HINZUFÜGEN -->
<h2>TEILNEHMER HINZUFÜGEN</h2>
<form
    method="POST"
    action="?/addTeilnehmer"
    class="d-flex align-items-center gap-2"
>
    <select name="teilnehmerId" id="teilnehmer" class="form-control w-50">
        {#each data.teilnehmer as teilnehmer}
            <option value={teilnehmer._id}
                >{teilnehmer.vorname} {teilnehmer.nachname}</option
            >
        {/each}
    </select>
    <button class="btn btn-primary">ADD TEILNEHMER</button>
</form>