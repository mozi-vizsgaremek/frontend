<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

    let audid: string;

    let movieid: string;
</script>

<body>
    <div class="allCenter">
        <div class="content pt-2.5 min-h-screen">
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    <ul>
                        <h1>Rooms</h1>
                        {#each data.auditorium as rooms}
                            <li>
                                <button
                                    on:click={() => {
                                        audid = rooms.id;
                                    }}>
                                    {rooms.name}
                                    {rooms.seats}
                                </button>
                            </li>
                        {/each}
                    </ul>

                    <ul>
                        <h1>Movies</h1>
                        {#each data.movies as movie}
                            <li>
                                <button
                                    on:click={() => {
                                        movieid = movie.id;
                                    }}>
                                    {movie.title}
                                </button>
                            </li>
                        {/each}
                    </ul>

                    <form method="POST" action="?/CreateScreening">
                        <input
                            type="text"
                            name="auditorium"
                            readonly
                            placeholder="Auditorium Id"
                            value={audid}
                        />
                        <input
                            type="text"
                            name="movie"
                            readonly
                            placeholder="Movie Id"
                            value={movieid}
                        />
                        <input type="datetime-local" name="time" />
                        <button class="w-72 h-12 text-center shadow rounded-lg"
                            >Save</button
                        >
                    </form>
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
    ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
    }
    form button {
        
      background: linear-gradient(48deg, rgba(184,15,0,1) 0%, rgba(249,116,0,1) 100%);
        width: 90%;
        color: white;
    }

    ul button {
        padding: 10px;
        border: 1px solid rgba(249,116,0,1);
        border-radius: 5px;
        color: white;
    }

    h1 {
        font-size: 30px;
        color: white;
    }

    .content {
        width: 100%;
        height: 100%;
    }

    .cardcontainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }
    input {
        font-family: italicFont;
        width: 100%;
        padding: 20px;
        font-size: 20px;
        color: #fff;
        background-color: rgb(28, 28, 30);
        box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
        border-radius: 10px;
        border: none;
        outline: none;
        transition: 0.4s;
    }
    input:hover {
        box-shadow: 0 0 0 0.15vw rgba(235, 135, 135, 0.186);
    }

    input:focus {
        box-shadow: 0 0 0 0.15vw #d2042d;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
        }
    }
</style>
