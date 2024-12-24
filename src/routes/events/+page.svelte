<!-- SCRIPT -->
<script>
    import EventForm from "$lib/components/EventForm.svelte";

    let event = {
        eventname: "",
        beschreibung: "",
        datum: "",
        adresse: "",
    };
</script>

<!-- HTML -->
<h1>EVENTS</h1>

<!-- EVENT LIST -->
<EventForm {event}></EventForm>
