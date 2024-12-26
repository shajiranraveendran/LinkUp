<!-- SCRIPT -->
<script>
    let { data } = $props();
</script>

<!-- HTML -->
<!-- EVENT DETAIL -->
<div class="event-detail">
    <img src={data.event.poster} alt={data.event.eventname} class="poster" />
    <div class="form-container">


        <form method="POST">
            <input name="id" type="hidden" value={data.event._id} />

            <div class="mb-3">
                <label class="form-label" for="">EVENTNAME</label>
                <input class="form-control" type="text" name="eventname" id="" value={data.event.eventname}/>
            </div>

            <div class="mb-3">
                <label class="form-label" for="">BESCHREIBUNG</label>
                <input class="form-control" type="text" name="beschreibung" id="" value={data.event.beschreibung}/>
            </div>

            <div class="mb-3">
                <label class="form-label" for="">DATUM</label>
                <input class="form-control" type="" name="datum" id="" value={data.event.datum}/>
            </div>

            <div class="mb-3">
                <label class="form-label " for="">ADRESSE</label>
                <input class="form-control" type="text" name="adresse" id="" value={data.event.adresse}/>
            </div>

            <button class="btn btn-primary">UPDATE EVENT</button>
        </form>
    </div>
</div>

<!-- MESSAGE -->
{#if data.success}
    <div class="alert alert-success mt-3">
        EVENT: "{data.event.eventname}" wurde aktualisiert!
    </div>
{/if}


<!-- STYLE -->
<style>
    .event-detail {
        display: flex;
        gap: 50px;
    }

    .form-control {
        width: 500%;
    }
</style>
