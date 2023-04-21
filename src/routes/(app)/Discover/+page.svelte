<script>
    // @ts-nocheck

    import MovieCard from "$lib/svelte/MovieCard.svelte";

    export let data;

    let alma = data.resBody;

    let filteredBooks = [];

    let search = "";

    const teszt = () => {
        return (filteredBooks = alma.filter((movie) => {
            let movieTitle = movie.title.toLowerCase();
            return movieTitle.includes(search.toLowerCase());
        }));
    };
</script>

<body>
    <div class="allCenter">
        <div class="content pt-2.5">
            <div class="searchInput pb-2.5 flex justify-center">
                <form class="form">
                    <button>
                        <svg
                            width="17"
                            height="16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-labelledby="search"
                        >
                            <path
                                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                stroke="currentColor"
                                stroke-width="1.333"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>
                    <input
                        class="input"
                        bind:value={search}
                        on:input={teszt}
                        placeholder="Search..."
                        required
                        type="text"
                    />
                    <button class="reset" type="reset">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </form>
            </div>
            <div class="cardcontainer">
                <div class="cards p-2.5">
                    {#if filteredBooks.length > 0}
                        {#each filteredBooks as movie}
                            <MovieCard
                                idurl={movie.id}
                                title={movie.title}
                                secondTitle={movie.subtitle}
                                url={movie.thumbnailUrl}
                            />
                        {/each}
                    {:else}
                        {#each data.resBody as movie}
                            <MovieCard
                                idurl={movie.id}
                                title={movie.title}
                                secondTitle={movie.subtitle}
                                url={movie.thumbnailUrl}
                            />
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
    * {
        font-family: normalFont;
    }
    body {
        background: #161616;
    }
    .allCenter {
        padding-top: 30px;
    }

    .form button {
        border: none;
        background: none;
        color: #d2042d;
    }
    .form {
        margin-top: 20px;
        margin-bottom: 20px;
        --timing: 0.3s;
        --width-of-input: 300px;
        --height-of-input: 40px;
        --border-height: 2px;
        --input-bg: linear-gradient(145deg, #141414, #181818);
        box-shadow: 20px 20px 60px #0e0e0e, -20px -20px 60px #1e1e1e;
        --border-color: #d2042d;
        --border-radius: 10px;
        --after-border-radius: 5px;
        position: relative;
        width: var(--width-of-input);
        height: var(--height-of-input);
        display: flex;
        align-items: center;
        padding-inline: 0.8em;
        border-radius: var(--border-radius);
        transition: border-radius 0.5s ease;
        background: var(--input-bg, #fff);
    }
    .input {
        font-size: 0.9rem;
        background-color: transparent;
        width: 100%;
        height: 100%;
        padding-inline: 0.5em;
        padding-block: 0.7em;
        border: none;
        color: white;
    }
    .form:before {
        content: "";
        position: absolute;
        background: var(--border-color);
        transform: scaleX(0);
        transform-origin: center;
        width: 100%;
        height: var(--border-height);
        left: 0;
        bottom: 0;
        border-radius: 1px;
        transition: transform var(--timing) ease;
    }
    .form:focus-within {
        border-radius: var(--after-border-radius);
    }

    input:focus {
        outline: none;
    }
    .form:focus-within:before {
        transform: scale(1);
    }
    .reset {
        border: none;
        background: none;
        opacity: 0;
        visibility: hidden;
    }
    input:not(:placeholder-shown) ~ .reset {
        opacity: 1;
        visibility: visible;
    }
    .form svg {
        width: 17px;
        margin-top: 3px;
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
        gap: 50px;
        justify-content: center;
    }

    @media (max-width: 700px) {
        .allCenter {
            padding-top: 0;
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
