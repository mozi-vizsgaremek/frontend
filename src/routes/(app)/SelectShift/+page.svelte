<script lang="ts">
    // @ts-nocheck
    import type { PageData } from "./$types";
    import { format } from "date-fns";

    export let data: PageData;

    let userRole = data.role == "admin" || data.role == "manager";
</script>

<body>
    <div class="allCenter">
        <div class="content pt-2.5 min-h-screen">
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    {#if userRole}
                        {#each data.alma as entry}
                            <div class="dateCardDelete">
                                <div class="word" />
                                <div class="number">
                                    {format(entry.shiftTo, "d. E")}
                                </div>

                                <div class="buttons">
                                    <a href={`./Time`} class="book">Book</a>
                                    <a
                                        href={`./SelectShift/${entry.id}`}
                                        class="delete">Delete</a
                                    >
                                </div>
                            </div>
                        {/each}
                    {:else}
                        {#each data.alma as entry}
                            <a href={`./Time`}>
                                <div class="dateCard">
                                    <div class="word" />
                                    <div class="number">
                                        {format(entry.shiftTo, "d. E")}
                                    </div>

                                    <div class="status" />
                                </div>
                            </a>
                        {/each}
                    {/if}
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
    body {
        background: #161616;
    }
    .status {
        width: 70%;
        min-height: 5px;
        background-color: #07822a;
        border-radius: 2px;
    }
    .dateCard {
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
    .buttons {
        color: black;
        display: flex;
        font-size: 12px;
        gap: 5px;
    }
    .buttons a {
        padding: 10px;
        border-radius: 10px;
    }
    .book {
        border: 1px solid rgb(13, 129, 32);
        transition: all 0.5s;
    }
    .book:hover {
        background-color: #07822a;
    }
    .delete {
        border: 1px solid rgb(178, 4, 4);
        transition: all 0.5s;
    }
    .delete:hover {
        background-color: rgb(178, 4, 4);
    }

    .dateCardDelete {
        padding: 20px;
        color: white;
        width: 150px;
        min-height: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        transition: all 0.5s;

        backdrop-filter: blur(5px);

        background-color: white;

        border-radius: 20px;
        box-shadow: inset -8px -8px 16px 0px rgba(0, 0, 0, 0.4),
            inset 0px 11px 28px 0px rgba(255, 255, 255, 0.2);
    }
    .dateCard:hover,
    .dateCardDelete:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    * {
        font-family: normalFont;
    }

    .allCenter {
        padding-top: 100px;
    }

    .content {
        width: 100%;
    }
    .number {
        text-align: center;
        color: black;
    }
    .cardcontainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
