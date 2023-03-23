<script>
    
    import MovieCard from "../../lib/svelte/MovieCard.svelte";
    
    import PhoneNav from "../../lib/svelte/PhoneNav.svelte";
    
    import Navbar from "../../lib/svelte/Navbar.svelte";

    
    
</script>
<body>
    

<div class="allCenter">
    <div class="navbar">
<Navbar/>
</div>
    <div class="resp-hamburger">
        <PhoneNav />
    </div>
    
    <div class="content pt-2.5 min-h-screen">
        <div class="searchInput pb-2.5 flex justify-center">
            <input type="text" placeholder="Search..." class="search" />
        </div>
        <hr />
        <div class="cardcontainer">
            <div class="cards p-2.5">
                <MovieCard title="Avatar" secondTitle="The way of water" url="https://posters.movieposterdb.com/22_05/1984/88247/s_88247_2768cd72.jpg"/>
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
    .allCenter {
        padding-top: 30px;
    }

    .search {
        background-color: transparent;
        border-bottom: 2px solid rgb(31, 31, 31);
        font-size: 14px;
        padding: 5px;
        outline: none;
        color: white;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    .search:focus {
        border-bottom: 2px solid #a3e583;
    }

    
   
  

    
    hr {
        border: 1px solid gray;
    }
   
    
   

    .resp-hamburger {
        visibility: hidden;
        position: absolute;
        z-index: 99;
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
            background: rgba(4, 4, 4, 0.613);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 10px;
            padding: 20px;
        }
       
    }
</style>
