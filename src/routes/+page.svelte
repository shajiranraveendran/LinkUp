<!-- SCRIPT -->
<script>
  import ImageText from "$lib/components/ImageText.svelte";
  import Video from "$lib/components/Video.svelte";
  import Page from "./events/+page.svelte";

  import { fade } from "svelte/transition";

  let showFade = false;

  function toggleFade() {
    showFade = !showFade;
  }
</script>

<!-- HTML -->
<!-- WELCOME MESSAGE -->
<div>

  <button class="btn" on:click={toggleFade}>WILLKOMMEN BEI LINKUP!</button>

  {#if showFade}
    <div transition:fade>
      BEI LINKUP SIND WIR ÜBERZEUGT, DASS DIE BESTEN VERBINDUNGEN PERSÖNLICH ENTSTEHEN.
      UNSERE PLATTFORM WURDE ENTWICKELT, UM GLEICHGESINNTE BEI VERANSTALTUNGEN ZUSAMMENZUBRINGEN,
      DIE AUF DEINE INTERESSEN ZUGESCHNITTEN SIND. OB DU DEIN BERUFLICHES NETZWERK
      ERWEITERN ODER NEUE SOZIALE KONTAKTE KNÜPFEN MÖCHTEST, LINKUP BIETET DIR DIE
      MÖGLICHKEIT, DICH VON ANGESICHT ZU ANGESICHT MIT MENSCHEN ZU TREFFEN, DIE DEINE
      LEIDENSCHAFTEN TEILEN.<br /><br />

      DURCHSTÖBERE EINE VIELZAHL VON EVENTS, MELDE DICH AN UND ERLEBE DIE KRAFT
      ECHTER BEGEGNUNGEN.<br />ES IST AN DER ZEIT, DEN BILDSCHIRM BEISEITE ZU
      LEGEND UND BEDEUTUNGSVOLLE BEZIEHUNGEN IN DER REALEN WELT ZU SCHAFFEN.<br
      /><br />

      <strong
        >WILLKOMMEN IN EINER NEUEN ART DES VERNETZENS – VERLINKE DICH JETZT MIT
        LINKUP!</strong
      >
    </div>
  {/if}
</div>

<!-- VIDEO -->
<Video />

<!-- BILDQUELLE -->
<ImageText />

<!-- STYLE -->
<style>
  div {
    background-color: rgb(5, 32, 43);
    padding: 20px;
    border-radius: 5px;
    color: rgb(12, 73, 97);
  }
</style>
