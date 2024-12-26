<!-- SCRIPT -->
<script>
    let { data } = $props();
    
</script>


<!-- HTML -->
<h1>TEILNEHMER DETAIL</h1>

<!-- BACK BUTTON -->
<a href="/teilnehmer" class="btn btn-primary" role="button">BACK</a><br /><br />

<!-- MESSAGE -->
{#if data.success}
    <div class="alert alert-success mt-3">
        {data.vorname} wurde erfolgreich aktualisiert!
    </div>
{/if}

<!-- TEILNEHMER DETAIL -->
<div class="event-detail">
    <div class="form-container">

        <form method="POST" action="?/update">
            <input name="id" type="hidden" value={data.person._id} />

            <div class="mb-3">
                <label class="form-label" for="">VORNAME</label>
                <input class="form-control" type="text" name="vorname" id="" value={data.person.vorname}/>
            </div>

            <div class="mb-3">
                <label class="form-label" for="">NACHNAME</label>
                <input class="form-control" type="text" name="nachname" id="" value={data.person.nachname}/>
            </div>

            <div class="mb-3">
                <label class="form-label" for="">EMAIL</label>
                <input class="form-control" type="text" name="email" id="" value={data.person.email}/>
            </div>
            <button class="btn">UPDATE TEILNEHMER</button>
        </form>
    </div>
</div>




<!-- STYLE -->
<style>
    .event-detail {
        display: flex;
        gap: 50px;
    }

    .form-control {
        width: 500%;
    }
</style>
