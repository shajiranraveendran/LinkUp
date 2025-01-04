<script>
    export let data;

    let activeSort = null;
    let isAscending = true;

    // SORTIEREN NACH DATUM
    function sortByDate() {
        if (activeSort === "date") {
            isAscending = !isAscending;
        } else {
            activeSort = "date";
            isAscending = true;
        }
        data.events = [...data.events].sort((eventA, eventZ) => {
            const dateA = new Date(eventA.datum);
            const dateZ = new Date(eventZ.datum);
            return isAscending ? dateA - dateZ : dateZ - dateA;
        });
    }

    // SORTIEREN NACH ALPHABET
    function sortByAlphabet() {
        if (activeSort === "alphabet") {
            isAscending = !isAscending;
        } else {
            activeSort = "alphabet";
            isAscending = true;
        }
        data.events = [...data.events].sort((eventA, eventZ) => {
            const nameA = eventA.eventname.toLowerCase();
            const nameZ = eventZ.eventname.toLowerCase();
            return isAscending ? nameA.localeCompare(nameZ) : nameZ.localeCompare(nameA);
        });
    }
</script>

<!-- FILTER BUTTONS -->
<div class="button-container">
    <button on:click={sortByDate} class="btn btn-filter">
        SORT BY DATE {activeSort === "date" ? (isAscending ? '↑' : '↓') : ''}
    </button>
    <button on:click={sortByAlphabet} class="btn btn-filter">
        SORT BY ALPHABET {activeSort === "alphabet" ? (isAscending ? '↑' : '↓') : ''}
    </button>
</div>

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
    .events-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

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

    .button-container {
        display: flex;
    }

    .btn-filter {
        width: 20%;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    button {
        display: block;
        width: 100%;
        padding: 10px;
        font-size: 16px;
        text-align: center;
    }
</style>
