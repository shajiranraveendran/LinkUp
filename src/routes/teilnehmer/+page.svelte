<script>
    import TeilnehmerForm from "$lib/components/TeilnehmerForm.svelte";

    let teilnehmer = {
        vorname: "",
        nachname: "",
        email: "",
    };



</script>

<h1>TEILNEHMER</h1>

    <TeilnehmerForm {teilnehmer}></TeilnehmerForm>