<!-- SCRIPT -->
<script>
    export let data;

    let searchQuery = '';
    let activeSort = null;
    let isAscending = true;

    // TEILNEHMER SUCHEN
    function searchByTeilnehmer() {
        return data.teilnehmer.filter(person =>
            `${person.vorname} ${person.nachname}`
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        );
    }

    // TEILNEHMER SORTIEREN NACH VORNAME ODER NACHNAME
    function sortByTeilnehmer(field) {
        if (activeSort === field) {
            isAscending = !isAscending;
        } else {
            activeSort = field;
            isAscending = true;
        }

        data.teilnehmer = [...data.teilnehmer].sort((personA, personZ) => {
            const valueA = personA[field].toLowerCase();
            const valueZ = personZ[field].toLowerCase();
            return isAscending ? valueA.localeCompare(valueZ) : valueZ.localeCompare(valueA);
        });
    }
</script>

<!-- HTML -->
<div class="button-container">

    <!-- TEILNEHMER SUCHEN -->
    <input type="text" placeholder="SEARCH TEILNEHMER ..." bind:value={searchQuery} class="search-input" />

    <!-- TEILNEHMER SORTIEREN -->
    <button on:click={() => sortByTeilnehmer('vorname')} class="btn filter-button">
        SORT BY VORNAME {activeSort === 'vorname' ? (isAscending ? '↑' : '↓') : ''}
    </button>
    <button on:click={() => sortByTeilnehmer('nachname')} class="btn filter-button">
        SORT BY NACHNAME {activeSort === 'nachname' ? (isAscending ? '↑' : '↓') : ''}
    </button>
</div>

<!-- TEILNEHMER LIST -->
<table>
    <thead>
        <tr>
            <th>VORNAME</th>
            <th>NACHNAME</th>
            <th>EMAIL</th>
            <th>AKTION</th>
        </tr>
    </thead>
    <tbody>
        {#each searchByTeilnehmer() as person}
            <tr>
                <td>{person.vorname}</td>
                <td>{person.nachname}</td>
                <td><a href="mailto:{person.email}" class="mail">{person.email}</a></td>
                <td>
                    <div class="action-button">
                        <a href={"/teilnehmer/" + person._id} class="btn">EDIT</a>
                        <form method="POST" action="?/delete">
                            <input type="hidden" name="id" value={person._id} />
                            <input type="hidden" name="vorname" value={person.vorname} />
                            <input type="hidden" name="nachname" value={person.nachname} />
                            <button class="btn">DELETE</button>
                        </form>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<!-- STYLE -->
<style>
    .search-input {
        width: 40%;
        padding: 10px;
        border: 1px solid rgb(5, 32, 43);
        border-radius: 5px;
        margin-right: 20px;
    }

    .button-container {
        display: flex;
        margin-bottom: 20px;
    }

    .filter-button {
        width: 20%;
        margin-right: 20px;
        margin-bottom: 20px;
        display: block;
        padding: 10px;
        text-align: center;
    }

    .action-button {
        display: flex;
        gap: 10px;
    }

    input {
        height: 100%;
    }
</style>
