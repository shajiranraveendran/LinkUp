<!-- SCRIPT -->
<script>
    import EventEdit from "$lib/components/EventEdit.svelte";

    export let data;

    function goBack() {
        window.history.back();
    }
</script>


<!-- HTML -->
<h1>EDIT EVENT</h1>

<!-- BACK BUTTON -->
<button class="btn" on:click={goBack}>BACK</button>

<!-- EVENT EDIT -->
<EventEdit {data}></EventEdit>