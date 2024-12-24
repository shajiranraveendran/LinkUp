<script>
    let { data } = $props();
</script>

<table>
    <thead>
        <tr>
            <th scope="col">VORNAME</th>
            <th scope="col">NACHNAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">AKTION</th>
        </tr>
    </thead>
    <tbody>
        {#each data.teilnehmer as person}
            <tr>
                <td>{person.vorname}</td>
                <td>{person.nachname}</td>
                <td>{person.email}</td>
                <td>
                    <form method="POST" action="?/delete">
                        <input type="hidden" name="id" value={person._id} />
                        <button class="btn btn-danger">DELETE</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
