<!-- SCRIPT -->
<script>
    export let data;
</script>


<!-- TEILNEHMER DETAIL -->
<div class="event-detail">
    <div class="form-container">
        <form method="POST" action="?/update">
            <input name="id" type="hidden" value={data.person._id} />

            <div class="mb-3">
                <label class="form-label" for="">VORNAME</label>
                <input class="form-control" type="text" name="vorname" id="" value={data.person.vorname} required/>
            </div>

            <div class="mb-3">
                <label class="form-label" for="">NACHNAME</label>
                <input class="form-control" type="text" name="nachname" id="" value={data.person.nachname} required/>
            </div>

            <div class="mb-3">
                <label class="form-label" for="">EMAIL</label>
                <input class="form-control" type="text" name="email" id="" value={data.person.email} required/>
            </div>
            <button class="btn">UPDATE TEILNEHMER</button>
        </form>
    </div>
</div>

<style>
    .event-detail {
        display: flex;
        gap: 50px;
    }

    .form-control {
        width: 500%;
    }
</style>
