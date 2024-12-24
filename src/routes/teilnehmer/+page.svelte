<!-- SCRIPT -->
<script>
    import TeilnehmerForm from "$lib/components/TeilnehmerForm.svelte";
    import TeilnehmerList from "$lib/components/TeilnehmerList.svelte";

    let teilnehmer = {
        vorname: "",
        nachname: "",
        email: "",
    };

    let { data } = $props();
</script>


<!-- HTML -->
<h1>TEILNEHMER</h1>

<!-- TEILNEHMER ADD -->
<a href="/teilnehmer/create" class="btn btn-primary" role="button">ADD TEILNEHMER</a><br /><br />

<!-- TEILNEHMER LIST -->
<TeilnehmerList {data}></TeilnehmerList>
