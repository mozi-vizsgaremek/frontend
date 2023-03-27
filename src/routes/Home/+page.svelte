<script>
    import MovieCard from "../../lib/svelte/MovieCard.svelte";
    import PhoneNav from "../../lib/svelte/PhoneNav.svelte";
    import Navbar from "../../lib/svelte/Navbar.svelte";

    import img1 from "../../lib/images/bg6.jpg";
</script>

<head>
    <title>Home</title>
</head>
<body>
    <div class="allCenter">
        <div class="navbar">
            <Navbar />
        </div>
        <div class="resp-hamburger">
            <PhoneNav />
        </div>

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
                        <MovieCard
                            title="Terminator"
                            secondTitle=""
                            url="https://posters.movieposterdb.com/22_05/1984/88247/s_88247_2768cd72.jpg"
                        />
                        <MovieCard
                            title="Ginger & Rosa"
                            secondTitle="2012"
                            url="https://posters.movieposterdb.com/13_08/2012/2115295/l_2115295_f44314c4.jpg"
                        />
                        <MovieCard
                            title="Stranger Things"
                            secondTitle="3"
                            url="https://posters.movieposterdb.com/20_01/2016/4574334/l_4574334_a6c22024.jpg"
                        />
                        <MovieCard
                            title="Avatar"
                            secondTitle="The way of water"
                            url="https://posters.movieposterdb.com/23_01/2009/499549/l_avatar-movie-poster_c111a145.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

<style>
    @font-face {
        font-family: normalFont;
        src: url(../../lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }

    body {
        background: #161616;
    }
    .resp-hamburger {
        visibility: hidden;
        position: absolute;
        z-index: 99;
    }
    .texts {
        padding-top: 200px;
        padding-left: 50px;
    }
    .pop {
        width: 100%;
        height: 600px;
        background-image: linear-gradient(
                to bottom,
                rgba(245, 246, 252, 0),
                #161616
            ),
            url("../../lib/images/cover.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .title {
        font-size: 35px;
        color: white;
    }
    .secondTitle {
        font-size: 20px;
        color: white;
    }
    .desc {
        margin-top: 25px;
        font-size: 12px;
        max-width: 600px;
        color: white;
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
        background: linear-gradient(
            142deg,
            rgba(129, 65, 62, 1) 0%,
            rgba(106, 0, 0, 1) 100%
        );
    }
    .allCenter {
        padding-top: 30px;
    }

    .content {
        width: 100%;
    }
    h2 {
        color: white;
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
        .navbar {
            position: absolute;
            visibility: collapse;
        }
        .allCenter {
            padding-top: 0;
        }

        .resp-hamburger {
            visibility: visible;
            position: fixed;
            bottom: 10px;
            width: 100%;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 10px;
            padding: 20px;
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
