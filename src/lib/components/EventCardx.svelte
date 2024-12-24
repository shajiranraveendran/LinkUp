<!-- SCRIPT -->
<script>
    let { data } = $props();
</script>


<!-- HTML -->
<!-- EVENT CARD -->
<table>
    <thead>
        <tr>
            <th>EVENT</th>
            <th>BESCHREIBUNG</th>
            <th>DATUM</th>
            <th>ADRESSE</th>
            <th>AKTION</th>
        </tr>
    </thead>
    <tbody>
        {#each data.events as event}
            <tr>
                <td>{event.eventname}</td>
                <td>{event.beschreibung}</td>
                <td>{event.datum}</td>
                <td>{event.adresse}</td>
                <td>
                    <form method="POST" action="?/delete">
                        <input type="hidden" name="id" value={event._id} />
                        <button class="btn btn-danger">DELETE</button>
                    </form>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
