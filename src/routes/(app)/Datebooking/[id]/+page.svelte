<script>
    import { format } from "date-fns";

    export let data;

</script>

<body>
    <div class="allCenter">
        <!--Content-->
        <div class="content">
            <!--Image-->
            <div
                class="movieCover"
                style="background-image: url({data.movie.bannerUrl});"
            />
            <!--Movie desc and book-->
            <div class="all">
                <div class="title">{data.movie.title}</div>
                <div class="alcim">{data.movie.subtitle}</div>
                <div class="category">
                </div>
                <div class="desc">
                    <p>{data.movie.description}</p>
                </div>
                <h2>Select Date</h2>
                <div class="dates">
                    {#each data.screenings as screening}
                        <a href={`../Tickets/${screening.id}`}>
                            <div class="dateCard">
                                {format(screening.time, "d. E k:mm")}
                            </div>
                        </a>
                    {/each}
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
    .desc {
        font-size: 10px;
    }

    .allCenter {
        padding-top: 50px;
    }
    .dates {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .dateCard {
        padding: 20px;
        color: black;
        width: 90px;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        transition: all 0.5s;
        color: #FAF5E9;
        backdrop-filter: blur(5px);

        background-color: #009B4D;

        border-radius: 20px;
        box-shadow: inset -8px -8px 16px 0px rgba(33, 35, 35, 0.6),
            inset 0px 11px 28px 0px rgba(99, 99, 99, 0.253);
    }
    .dateCard:hover{
        transform: scale(1.05);
    }
    .alcim {
        color: #faf5e9;
    }
    .movieCover {
        background-image: url("$lib/images/cover.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 92vh;
    }
    .desc {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .desc p {
        width: 400px;
    }
    .all {
        position: absolute;
        top: 20%;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        color: white;
        gap: 20px;
        text-align: center;
        width: 100%;
    }

    .content {
        width: 100%;
    }

    .title {
        font-size: 24px;
        color: #ffcc00;
    }
    .category {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .catcard {
        width: 100px;
        height: 25px;
        padding: 5px;
        background-color: white;
        border-radius: 2px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
