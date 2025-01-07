<!-- SCRIPT -->
<script>
    import { fly } from "svelte/transition";
    let { children } = $props();
</script>

<!-- HTML -->
<!-- NAVIGATION-->
<div class="nav" transition:fly>
    <img src="\images\logo.jpg" alt="Logo" class="logo" />

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
<footer class="nav footer">@2025 RAVEENDRAN SHAJIRAN - PROTOTYPING</footer>

<!-- STYLE -->
<style>
    /* NAVIGATION */
    .logo {
        height: 50px;
        margin: 25px 10px;
        position: absolute;
    }

    .nav {
        border: 1px solid #cccccc2d;
        background-color: rgb(5, 32, 43);
        border-radius: 5px;
    }

    .navbar {
        display: flex;
        margin: auto;
    }

    .navfont {
        color: rgb(61, 115, 136);
        margin: 15px;
        font-size: 25px;
    }

    .navfont:hover {
        color: #fafafafb;
    }

    /* FOOTER */
    .footer {
        text-align: center;
        padding: 20px;
        margin-top: 50px;
    }
</style>