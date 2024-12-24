<!-- SCRIPT -->
<script>
    import "./styles.css";
    let { children } = $props();
</script>

<!-- NAVIGATION-->
<div class="nav">
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
