<!-- SCRIPT -->
<!-- VIDEOS -->
<script>
    export let slides = [
        {
            src: "videos/video1.mp4",
            title: "Discussion",
            description: "During the brainstorming session, the project team engaged in a productive discussion about innovative app features.",
        },
        {
            src: "videos/video2.mp4",
            title: "Examination",
            description: "The committee's thorough examination of the proposal revealed several areas that needed improvement.",
        },
        {
            src: "videos/video3.mp4",
            title: "Argument",
            description: "The two colleagues had an argument over the best approach to solve the software bug.",
        },
    ];
</script>

<!-- HTML -->
<!-- CAROUSEL -->
<div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
>
    <!-- CAROUSEL AUTOMATIC SLIDE -->
    <div class="carousel-inner">
        {#each slides as slide, index}
            <div
                class="carousel-item {index === 0 ? 'active' : ''}"
                data-bs-interval="3500"
            >
                <video class="d-block w-100" autoplay muted loop>
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div class="carousel-caption">
                    <h5>{slide.title}</h5>
                    <p>{slide.description}</p>
                </div>
            </div>
        {/each}
    </div>

    <!-- CAROUSEL SIDE BUTTON -->
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
    >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
    >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>

    <!-- CAROUSEL BOTTOM BUTTON -->
    <div class="carousel-indicators">
        {#each slides as slide, index}
            <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={index}
                class={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
            ></button>
        {/each}
    </div>
</div>

<!-- STYLE -->
<style>
    .carousel {
        width: 80%;
        padding: 40px;
        margin: auto;
    }

    .carousel-inner {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .carousel-caption {
        position: absolute;
        padding: 30px;
        bottom: 20px;
        left: 0px;
        width: 100%;
        text-align: center;
        color: white;
        background: rgba(0, 0, 0, 0.7);
    }

    video {
        border-radius: 10px;
    }
</style>
