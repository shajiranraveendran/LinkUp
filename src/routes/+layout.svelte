<!-- SCRIPT -->
<script>
    import { fly } from "svelte/transition";
    let { children } = $props();
</script>

<!-- HTML -->
<!-- NAVIGATION-->
<div class="nav" transition:fly>
    <img src="\images\logo.jpg" alt="Logo" class ="logo">

    <nav class="navbar">
        <div class="container-fluid">
            <a class="nav-link navfont" href="/">HOME</a>
            <a class="nav-link navfont" href="/events">EVENTS</a>
            <a class="nav-link navfont" href="/teilnehmer">TEILNEHMER</a>
        </div>
    </nav>
</div>

<!-- PAGE INHALT-->
<div>
    {@render children()}
</div>

<!-- FOOTER -->
<footer class="nav footer">
    @2025 RAVEENDRAN SHAJIRAN - PROTOTYPING
</footer>

<!-- STYLE -->
 <style>
    .logo {
        height: 50px;
        margin: 10px 10px;
        position: absolute;
    }
 </style>