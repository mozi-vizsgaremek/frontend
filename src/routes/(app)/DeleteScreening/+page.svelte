<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<body>
    <div class="allCenter flex w-full min-h-screen">
        <div class="content pt-2.5">
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    <ul>
                        {#each data.screenings as screening}
                        <a href={`./DeleteScreening/${screening.id}`}>
                            <li>
                                
                                    <h1 >{screening.movieTitle}</h1>
                                
                            </li>
                        </a>
                        {/each}
                    </ul>
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

    .allCenter {
        padding-top: 50px;
    }
    li{
        border: 2px solid rgba(249,116,0,1);
        padding: 20px;
        min-width: 100px;
        text-align: center;
        border-radius: 5px;
    }

    .content {
        width: 100%;
    }
    h1 {
        color: white;
    }

    .cardcontainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
