<script>
    import MovieCard from "./MovieCard.svelte";
    import PhoneNav from "./PhoneNav.svelte";
    // @ts-ignore
    
    import SideBar from "./SideBar.svelte";
    import Upcoming from "./Upcoming.svelte";
</script>

<div class="allCenter flex w-full min-h-screen">
    <div class="resp-hamburger">
        <PhoneNav/>
    </div>
    <div class="sideBar h-screen p-5 bg-transparent">
        <div class="Logo pb-5 text-white">CV</div>

       <SideBar username="Laci"/>
    </div>
    <div class="content pt-2.5 min-h-screen">
        <h2 class="p-2.5">Popular Movies</h2>
        <hr />
        <div class="carousel" />
        <h2 class="p-2.5">Top Rated</h2>
        <hr />
        <div class="cardcontainer">
            <div class="cards p-2.5">
                <MovieCard title="Avatar" secondTitle="The way of water" />

                <MovieCard title="Avatar" secondTitle="The way of water" />

                <MovieCard title="Avatar" secondTitle="The way of water" />

                <MovieCard title="Avatar" secondTitle="The way of water" />

                <MovieCard title="Avatar" secondTitle="The way of water" />
            </div>
        </div>
    </div>
    <div class="upComing">
        <Upcoming/>
    </div>
</div>

<style>
    @font-face {
        font-family: normalFont;
        src: url(../../lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }

   
    .allCenter {
        background: linear-gradient(
            180deg,
            rgba(43, 50, 58, 1) 0%,
            rgba(23, 28, 33, 1) 100%
        );
    }
    .sideBar {
        width: 300px;
        height: 100%; /* Full-height: remove this if you want "auto" height */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 20px;
    }
    .Logo {
        font-family: normalFont;
        font-size: 26px;
    }
    

   
    hr {
        border: 1px solid gray;
    }
  
    
   

    .resp-hamburger {
        visibility: hidden;
        position: absolute;
    }

    .content {
        width: 80%;
        margin-left: 300px;
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

    .upComing {
        width: 300px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        gap: 20px;
    }
    

    @media (max-width: 1200px) {
        .upComing {
            visibility: collapse;
            position: absolute;
        }
    }
    @media (max-width: 670px) {
        .sideBar {
            position: absolute;
            visibility: collapse;
        }
        .content {
            width: 100%;

            margin-left: 0;
        }

        .resp-hamburger {
            z-index: 99;
            visibility: visible;
            position: fixed;
            bottom: 10px;
            width: 100%;
            background: rgba(4, 4, 4, 0.613);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 10px;
            padding: 20px;
        }
       
    }
</style>
