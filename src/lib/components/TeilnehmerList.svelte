<script>
    export let data;

    let activeSort = null;
    let isAscending = true;

    // SORTIEREN NACH VORNAME ODER NACHNAME
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

<!-- FILTER BUTTONS -->
<div class="button-container">
    <button on:click={() => sortByTeilnehmer('vorname')} class="btn btn-filter">
        SORT BY VORNAME {activeSort === 'vorname' ? (isAscending ? '↑' : '↓') : ''}
    </button>
    <button on:click={() => sortByTeilnehmer('nachname')} class="btn btn-filter">
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
        {#each data.teilnehmer as person}
            <tr>
                <td>{person.vorname}</td>
                <td>{person.nachname}</td>
                <td><a href="mailto:{person.email}" class="mail">{person.email}</a></td>
                <td>
                    <div class="action-btn">
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
    .button-container {
        display: flex;
        margin-bottom: 20px;
    }

    .btn-filter {
        width: 20%;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .action-btn {
        display: flex;
        gap: 10px;
    }
</style>
