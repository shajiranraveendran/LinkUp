<!-- SCRIPT -->
<script>
    let { data, form} = $props();
</script>

<!-- HTML -->
<h1>EVENT DETAIL</h1>

<!-- BACK BUTTON -->
<a href="/events" class="btn" role="button">BACK</a><br /><br />

<!-- MESSAGE -->
{#if form?.success}
    <div class="alert alert-primary mt-3">
        EVENT: "{form.eventname}" wurde aktualisiert!
    </div>
{/if}

<div class="event-detail">
    <img src={data.event.poster} alt={data.event.eventname} class="poster" />
    <div class="form-container">
        <form method="POST" action="?/update">
            <input name="id" type="hidden" value={data.event._id} />

            <div class="mb-3">
                <label class="form-label" for="">EVENTNAME</label>
                <input class="form-control" type="text" name="eventname" id="" value={data.event.eventname}/>
            </div>

            <div class="mb-3">
                <label class="form-label" for="">BESCHREIBUNG</label>
                <textarea class="form-control" name="beschreibung" id="" rows="10">{data.event.beschreibung}</textarea>
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
