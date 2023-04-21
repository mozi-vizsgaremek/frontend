<script lang="ts">
    import MovieCard from "$lib/svelte/MovieCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<head>
    <title>Home</title>
</head>
<body>
    <div class="allCenter">
        <div class="content pt-2.5 min-h-screen">
            <div class="pop">
                <div class="texts">
                    <div class="title">Avatar</div>
                    <div class="secondTitle">The way of water</div>
                    <div class="desc">
                        Jake Sully lives with his newfound family formed on the
                        extrasolar moon Pandora. Once a familiar threat returns
                        to finish what was previously started, Jake must work
                        with Neytiri and the army of the Na'vi race to protect
                        their home.
                    </div>
                    <button class="btn">Buy ticket</button>
                </div>
            </div>

            <div class="carousel" />
            <div class="movies">
                <h2 class="p-2.5">Top Rated</h2>
                <div class="cardcontainer">
                    <div class="cards p-2.5">
                        {#each data.resBody as movie}
                            <MovieCard
                                idurl={movie.id}
                                title={movie.title}
                                secondTitle={movie.subtitle}
                                url={movie.thumbnailUrl}
                            />
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<style>
    @font-face {
        font-family: normalFont;
        src: url($lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }

    body {
        background: #161616;
    }

    .texts {
        padding-top: 150px;
        padding-left: 50px;
    }
    .pop {
        width: 100%;
        height: 450px;
        background-image: linear-gradient(
                to bottom,
                rgba(245, 246, 252, 0),
                #161616
            ),
            url("$lib/images/cover.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        font-size: 35px;
        color: #ffcc00;
    }
    .secondTitle {
        font-size: 20px;
        color: #faf5e9;
    }
    .desc {
        margin-top: 25px;
        font-size: 12px;
        max-width: 600px;
        color: #faf5e9;
    }
    .movies {
        padding: 20px;
    }
    .btn {
        margin-top: 25px;
        padding: 10px;
        border-radius: 10px;
        color: white;
        width: 200px;
        background: #009b4d;
    }
    .allCenter {
        padding-top: 30px;
    }

    .content {
        width: 100%;
    }
    h2 {
        color: #ffcc00;
        font-size: 23px;
    }
    .cardcontainer {
        display: flex;
        flex-direction: column;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
        .content {
            padding-top: 0;
        }

        .texts {
            padding-left: 10px;
            text-align: center;
        }
        .cardcontainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .cards {
            gap: 10px;
        }
    }

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #161616;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #d2042d;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #ad0325;
    }
</style>
