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

<h1>TEILNEHMER</h1>
<a href="/teilnehmer/create" class="btn btn-primary" role="button">ADD TEILNEHMER</a><br /><br />

<!--<TeilnehmerForm {teilnehmer}></TeilnehmerForm>-->
<TeilnehmerList {data}></TeilnehmerList>
