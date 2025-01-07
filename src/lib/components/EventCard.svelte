<!-- SCRIPT -->
<script>
    export let data;

    let searchQuery = "";
    let activeSort = null;
    let isAscending = true;

    // EVENTS FILTERN
    function searchByEvents() {
        return data.events.filter((event) =>
            `${event.eventname} ${event.adresse}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase()),
        );
    }

    // EVENTS SORTIEREN NACH DATUM
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

    // EVENTS SORTIEREN NACH ALPHABET
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

<!-- HTML -->
<div class="filter-container">
    <!-- EVENT SUCHEN -->
    <input type="text" placeholder="SEARCH EVENTS..." bind:value={searchQuery}/>

    <!-- EVENTS SORTIEREN -->
    <button on:click={sortByAlphabet} class="btn filter-button">
        SORT BY ALPHABET {activeSort === "alphabet" ? isAscending ? "↑": "↓" : ""}
    </button>
    <button on:click={sortByDate} class="btn filter-button">
        SORT BY DATE {activeSort === "date" ? (isAscending ? "↑" : "↓") : ""}
    </button>
</div>

<!-- EVENT LIST -->
<div class="events-container">
    {#each searchByEvents() as event}
        <div class="card">
            <div class="card-poster">
                <img src={event.poster} alt={event.eventname} class="poster" />
            </div>

            <div class="card-text">
                <a href={"/events/" + event._id} class="title">{event.eventname}</a><br />
                {event.datum}<br />
                {event.adresse}
            </div>

            <!-- EVENT DELETE -->
            <form method="POST" action="?/delete" class="delete-button">
                <input type="hidden" name="id" value={event._id} />
                <input type="hidden" name="eventname" value={event.eventname} />
                <button class="btn btn-danger">DELETE</button>
            </form>
        </div>
    {/each}
</div>

<!-- STYLE -->
<style>
    .filter-container {
        display: flex;
        margin-bottom: 20px;
    }

    input {
        height: 100%;
        width: 40%;
        padding: 10px;
        border: 1px solid rgb(5, 32, 43);
        border-radius: 5px;
        margin-right: 20px;
    }
    
    button {
        display: block;
        width: 100%;
        padding: 10px;
        text-align: center;
    }

    .filter-button {
        width: 20%;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .events-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 5px;
        width: 18%;
        height: 100%;
        background-color: rgb(5, 32, 43);
        color: #c3e4eefb;
    }

    .card:hover {
        transform: scale(1.1);
    }

    .poster {
        width: 100%;
        border-radius: 5px;
    }

    .card-text {
        padding: 20px;
    }

    .title {
        color: rgb(61, 115, 136);
        font-weight: bold;
    }

    .title:hover {
        color: #fafafafb;
    }

    .delete-button {
        margin-top: auto;
        padding: 0;
    }
</style>
