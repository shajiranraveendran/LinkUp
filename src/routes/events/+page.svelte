<script>
    import EventForm from "$lib/components/EventForm.svelte";

    let event = {
        eventname: "",
        beschreibung: "",
        datum: "",
        adresse: "",
    };
</script>

<h1>EVENTS</h1>

<EventForm {event}></EventForm>
