<script lang="ts">
    import { format } from "date-fns";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<body>
    <div class="allCenter flex w-full min-h-screen">
        <div class="content pt-2.5">
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    {#each data.alma as entry}
                    <div class="dateCardDelete">
                        <div class="word" />
                        <div class="number">
                            {format(entry.shiftTo, "d. E")}
                        </div>

                        <div class="buttons">
                        <a href={`./Overview/${entry.id}`} class="delete">Delete</a>
                    </div>
                    </div>
            {/each}
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

    .content {
        width: 100%;
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
    .dateCardDelete {
        padding: 20px;
        color: white;
        width: 90px;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        transition: all 0.5s;

        backdrop-filter: blur(5px);

        background-color: rgb(231, 203, 203);

        border-radius: 20px;
        box-shadow: inset -8px -8px 16px 0px rgba(33, 35, 35, 0.6),
            inset 0px 11px 28px 0px rgb(255, 255, 255);
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
