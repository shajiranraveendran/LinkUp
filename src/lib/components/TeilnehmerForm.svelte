<!-- SCRIPT -->
<script>
    let { teilnehmer } = $props();

    function output() {
        alert("Danke für die Teilnahme!");
    }
</script>


<!-- HTML -->
<!-- FORM -->
<form onsubmit={output}>
    <div class="mb-3">
        <label class="form-label" for="">VORNAME:</label>
        <input
            class="form-control"
            type="text"
            bind:value={teilnehmer.vorname}
        />
    </div>

    <div class="mb-3">
        <label class="form-label" for="">NACHNAME:</label>
        <input
            class="form-control"
            type="text"
            bind:value={teilnehmer.nachname}
        />
    </div>

    <div class="mb-5">
        <label class="form-label" for="">EMAIL:</label>
        <input
            class="form-control"
            type="email"
            bind:value={teilnehmer.email}
        />
    </div>

    <div class="mb-3">
        <button class="btn btn-primary" type="submit">SPEICHERN</button>
    </div>
</form>
