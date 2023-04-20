<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    let userRole = data.role == "admin" || data.role == "manager";
</script>

<body>
    <div class="allCenter flex w-full min-h-screen">
        <div class="content pt-2.5">
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    <a href="./SelectShift">
                        <div class="card">
                            <div class="title">Book your shift</div>
                        </div>
                    </a>

                    <a href="./Overview">
                        <div class="card">
                            <div class="title">Overview</div>
                        </div>
                    </a>
                    {#if userRole}
                        <a href="./ManagerShifts">
                            <div class="card">
                                <div class="title">Add shift</div>
                            </div>
                        </a>
                        <a href="./CreateScreening">
                            <div class="card">
                                <div class="title">Create screening</div>
                            </div>
                        </a>
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
    .card {
        padding: 20px;
        text-align: center;
        color: white;
        width: 350px;
        min-height: 200px;
        border-radius: 10px;
z-index: 1;
        backdrop-filter: blur(5px);
        background: radial-gradient(circle at 10% 20%, #73C8A9 0%, #373B44 90%);

        border-radius: 26px;

        box-shadow:
            inset -8px -8px 16px 0px rgba(0, 0, 0, 0.6),
            inset 0px 11px 28px 0px rgba(255, 255, 255, 0.2);
        transition: all 0.5s;
    }
    .card:hover {
        transition: all 0.5s;
        transform: scale(1.05);
        cursor: pointer;
    }
    .title{
        font-size: 20px;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
