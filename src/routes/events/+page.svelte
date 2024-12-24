<!-- SCRIPT -->
<script>
    import EventCard from "$lib/components/EventCard.svelte";

    let event = {
        eventname: "",
        beschreibung: "",
        datum: "",
        adresse: "",
    };

    let { data } = $props();
</script>

<!-- HTML -->
<h1>EVENTS</h1>

<!-- TEILNEHMER ADD -->
<a href="/teilnehmer/create" class="btn btn-primary" role="button">ADD TEILNEHMER</a><br /><br />

<!-- EVENT LIST -->
<EventCard {data}></EventCard>
