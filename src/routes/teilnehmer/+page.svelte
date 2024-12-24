<script>
    import TeilnehmerForm from "$lib/components/TeilnehmerForm.svelte";

    let teilnehmer = {
        vorname: "",
        nachname: "",
        email: "",
    };

    let { data } = $props();
</script>

<h1>TEILNEHMER</h1>

<TeilnehmerForm {teilnehmer}></TeilnehmerForm>

<h3>Liste von allen Teilnehmer</h3>
<table>
    <thead>
        <tr>
            <th>Vorname</th>
            <th>Nachname</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {#each data.teilnehmer as person}
            <tr>
                <td>{person.vorname}</td>
                <td>{person.nachname}</td>
                <td>{person.email}</td>
            </tr>
        {/each}
    </tbody>
</table>