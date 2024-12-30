<!-- SCRIPT -->
<script>
    import EventEdit from "./EventEdit.svelte";

    export let data;
</script>

<!-- EVENT DETAIL -->
<div class="event-detail">
    <img src={data.event.poster} alt={data.event.eventname} class="detail-poster" />
    <div class="form-container">
        <input name="id" type="hidden" value={data.event._id} />
        <div>
            <div class="detail-title">{data.event.eventname}</div><br />
            <div>{data.event.datum}</div>
            <div>{data.event.adresse}</div><br />
            <div>{data.event.beschreibung}</div>
        </div><br />
    </div>
</div><br />


<!-- STYLE -->
<style>
    .event-detail {
        display: flex;
        gap: 50px;
    }

    .detail-title {
        font-size: 30px;
        border-bottom: 1px solid #cccccc2d;
    }
</style>
