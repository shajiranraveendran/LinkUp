<!-- SCRIPT -->
<script>
    export let data;
    export let form;
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
