<!-- SCRIPT -->
<script>
    let { event } = $props();

    function output() {
        alert("Event wurde gespeichert!");
    }
</script>


<!-- HTML -->
<!-- FORM -->
<form onsubmit={output}>
    <div class="mb-3">
        <label class="form-label" for="">EVENTNAME:</label>
        <input class="form-control" type="text" bind:value={event.eventname} />
    </div>

    <div class="mb-3">
        <label class="form-label" for="">BESCHREIBUNG:</label>
        <input class="form-control" type="text" bind:value={event.beschreibung}
        />
    </div>

    <div class="mb-3">
        <label class="form-label" for="">DATUM:</label>
        <input class="form-control" type="date" bind:value={event.datum} />
    </div>

    <div class="mb-5">
        <label class="form-label" for="">ADRESSE:</label>
        <input class="form-control" type="text" bind:value={event.adresse} />
    </div>

    <div class="mb-3">
        <button class="btn btn-primary" type="submit">SPEICHERN</button>
    </div>
</form>
