<!-- SCRIPT -->
<script>
    import ImageText from "./ImageText.svelte";

    export let data;
</script>

<!-- HTML -->
<div class="event-detail">
    <div class="poster-container">
        <img src={data.event.poster} alt={data.event.eventname} class="poster-detail" />
        <ImageText />
    </div>
    
    <div class="form-container">
        <!-- EVENT AKTUALISIEREN -->
        <form method="POST" action="?/update">
            <input type="hidden" name="id" value={data.event._id} />
            <div class="mb-3">
                <label class="form-label" for="">EVENTNAME</label>
                <input class="form-control" type="text" name="eventname" value={data.event.eventname} required />
            </div>
            <div class="mb-3">
                <label class="form-label" for="">BESCHREIBUNG</label>
                <textarea class="form-control" name="beschreibung" rows="10" required>{data.event.beschreibung}</textarea>
            </div>
            <div class="mb-3">
                <label class="form-label" for="">DATUM</label>
                <input class="form-control" type="date" name="datum" value={data.event.datum} />
            </div>
            <div class="mb-3">
                <label class="form-label" for="">ADRESSE</label>
                <input class="form-control" type="text" name="adresse" value={data.event.adresse} />
            </div>
            <button class="btn btn-primary">UPDATE EVENT</button>
        </form>

        <!-- EVENT LÖSCHEN -->
        <form method="POST" action="?/delete" class="mt-3">
            <input type="hidden" name="id" value={data.event._id} />
            <button class="btn btn-danger">DELETE EVENT</button>
        </form>
    </div>
</div>

<!-- STYLE -->
<style>
    .event-detail {
        display: flex;
        gap: 40px;
    }

    .poster-detail {
        height: 200px;
        border-radius: 5px;
        width: 100%;
    }

    .poster-container {
        flex: 1;
        max-width: 400px;
    }

    .form-container {
        flex: 2;
        width: 100%;
    }
</style>