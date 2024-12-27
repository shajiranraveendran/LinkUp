<script>
    export let slides = [
        {
            src: "videos/video1.mp4",
            title: "Video Slide",
            description: "A brief description of the video content.",
        },
        {
            src: "videos/video2.mp4",
            title: "Second Slide Label",
            description:
                "Some representative placeholder content for the second slide.",
        },
        {
            src: "videos/video3.mp4",
            title: "Third Slide Label",
            description:
                "Some representative placeholder content for the third slide.",
        },
    ];
</script>

<div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
>
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
    <div class="carousel-inner">
        {#each slides as slide, index}
            <div
                class="carousel-item {index === 0 ? 'active' : ''}"
                data-bs-interval="4500"
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
</div>

<style>
    .carousel-inner {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .carousel-item video {
        width: 100%;
    }

    .carousel-caption {
        position: absolute;
        bottom: 20px;
        left: 20px;
        right: 20px;
        color: white;
    }
</style>
