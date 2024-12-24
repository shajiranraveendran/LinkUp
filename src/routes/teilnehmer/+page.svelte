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

<TeilnehmerForm {teilnehmer}></TeilnehmerForm>
<TeilnehmerList {data}></TeilnehmerList>