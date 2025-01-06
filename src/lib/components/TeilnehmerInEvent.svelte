<!-- SCRIPT -->
<script>
    export let data;
</script>

<!-- HTML -->
{#if data.event.teilnehmer?.length > 0}
    <br /><br />
    <table>
        <thead>
            <tr>
                <th>TEILNEHMER-ID</th>
                <th>VORNAME</th>
                <th>NACHNAME</th>
                <th>EMAIL</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            <!-- TEILNEHMER IM EVENT ANZEIGEN (DROPDOWN) -->
            {#each data.event.teilnehmer as teilnehmer}
                <tr>
                    <td>{teilnehmer._id}</td>
                    <td>{teilnehmer.vorname}</td>
                    <td>{teilnehmer.nachname}</td>
                    <td><a href="mailto:{teilnehmer.email}" class="mail">{teilnehmer.email}</a></td>
                    <td>
                        <!-- TEILNEHMER AUS DEM EVENT ENTFERNEN -->
                        <form method="POST" action="?/removeTeilnehmer">
                            <input type="hidden" name="teilnehmerId" value={teilnehmer._id}/>
                            <button class="btn btn-danger">REMOVE</button>
                        </form>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
    
<!-- MESSAGE: FALLS KEINE TEILNEHMER VORHANDEN -->
{:else}
    <br />
    <div class="alert alert-primary mt-3">
        <i>ES WURDEN NOCH KEINE TEILNEHMER HINZUGEFÜGT.</i>
    </div>
{/if}