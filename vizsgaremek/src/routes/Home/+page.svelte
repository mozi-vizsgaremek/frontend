<script>
    import MovieCard from "../../lib/svelte/MovieCard.svelte";
    import PhoneNav from "../../lib/svelte/PhoneNav.svelte";
    import Navbar from "../../lib/svelte/Navbar.svelte";

</script>
<head>
    <title>Home</title>
</head>
<body>
    

<div class="allCenter">
    <div class="navbar">
    <Navbar/>
</div>
    <div class="resp-hamburger">
        <PhoneNav />
    </div>
    
    <div class="content pt-2.5 min-h-screen">
        <h2 class="p-2.5">Popular Movies</h2>
        <hr />
        <div class="carousel" />
        <h2 class="p-2.5">Top Rated</h2>
        <hr />
        <div class="cardcontainer">
            <div class="cards p-2.5">
                <MovieCard
                    title="Avatar"
                    secondTitle="The way of water"
                    url="https://posters.movieposterdb.com/22_05/1984/88247/s_88247_2768cd72.jpg"
                />
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
    body{
        background: #161616;
    }
    .resp-hamburger {
        visibility: hidden;
        position: absolute;
        z-index: 99;
    }

    .allCenter {
        padding-top: 30px;
    }
    
    hr {
        border: 1px solid #D2042D;
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
        align-items: center;
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
        .allCenter{
            
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
    }
</style>
