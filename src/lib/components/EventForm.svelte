<!-- EVENT FORM -->
<form method="POST" action="?/create">
    <div class="mb-3">
        <label for="" class="form-label">EVENTNAME</label>
        <input name="eventname" class="form-control" type="text" required />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">BESCHREIBUNG</label>
        <input name="beschreibung" class="form-control" type="text" required />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">DATUM</label>
        <input name="datum" class="form-control" type="date" />
    </div>
    <div class="mb-3">
        <label for="" class="form-label">ADRESSE</label>
        <input name="adresse" class="form-control" type="text" />
    <br />
    <button type="submit" class="btn btn-primary">SUBMIT</button>
</form>
