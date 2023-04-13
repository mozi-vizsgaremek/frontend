<script lang="ts">
    import { format } from "date-fns";
    import type { PageData } from "./$types";
    export let data;
</script>

<body>
    <div class="allCenter flex w-full min-h-screen">
        <div class="content pt-2.5">
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    {#each data.upComing as entry}
                    <a href={`./Overview/${entry.id}`} class="delete">
                    <div class="dateCardDelete">
                        <div class="word" />
                        <div class="buttons">
                        <div class="number">
                            {format(entry.shiftFrom, "d. E")}<p>
                                {format(entry.shiftFrom, "kk:mm")} - {format(entry.shiftTo, "kk:mm")}
                        </div>
                    </div>
                       
                    </div>
                </a>
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
        color: black;
        width: 180px;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        text-align: center;
        transition: all 0.5s;

        backdrop-filter: blur(5px);

        background-color: rgb(231, 203, 203);

        border-radius: 20px;
        box-shadow: inset -8px -8px 16px 0px rgba(33, 35, 35, 0.6),
            inset 0px 11px 28px 0px rgb(255, 255, 255);
    }
    .dateCardDelete:hover{
        transform: scale(1.05);
        background-color: red;
        
        box-shadow: inset -8px -8px 16px 0px rgba(33, 35, 35, 0.6),
            inset 0px 11px 28px 0px rgba(0, 0, 0, 0.744);
    }
    .buttons{
        color: black;
        display: flex;
        font-size: 12px;
        gap: 5px;
    }
   
    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
