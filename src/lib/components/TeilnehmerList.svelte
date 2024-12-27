<!-- SCRIPT -->
<script>
    export let data;

</script>

<!-- HTML -->
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
                <td>{person.email}</td>
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

<style>
    .action-btn {
        display: flex;
        gap: 10px;
    }
</style>
