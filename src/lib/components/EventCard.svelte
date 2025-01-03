<!-- SCRIPT -->
<script>
    export let data;
</script>

<!-- HTML -->
<!-- EVENT CARD -->
<div class="events-container">
    {#each data.events as event}
        <div class="card">
            <div class="card-poster">
                <img src={event.poster} alt={event.eventname} class="poster" />
            </div>

            <div class="card-text">
                <a href={"/events/" + event._id} class="title">{event.eventname}</a><br />
                {event.datum}<br />
                {event.adresse}
            </div>

            <!-- DELETE BUTTON -->
            <form method="POST" action="?/delete" class="delete-form">
                <input type="hidden" name="id" value={event._id} />
                <input type="hidden" name="eventname" value={event.eventname} />
                <button class="btn btn-danger">DELETE</button>
            </form>

        </div>
    {/each}
</div>

<!-- STYLE -->
<style>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .card-text {
        flex-grow: 1;
    }

    .delete-form {
        margin-top: auto;
        padding: 0;
    }

    button {
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 16px;
        text-align: center;
    }
</style>
