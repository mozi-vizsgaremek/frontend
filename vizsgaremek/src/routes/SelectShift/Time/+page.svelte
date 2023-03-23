<script>
    import PhoneNav from "../../../lib/svelte/PhoneNav.svelte";
    import Navbar from "../../../lib/svelte/Navbar.svelte";

    import { page } from "$app/stores";
    const id = $page.url.searchParams.get("?/:id");
</script>
<body>
    
<div class="allCenter flex w-full min-h-screen">
    <div class="navbar">
        <Navbar/>
    </div>
    <div class="resp-hamburger">
        <PhoneNav />
    </div>
    
    <div class="content pt-2.5 min-h-screen">
        <h1>Select Time</h1>
        <hr />
        <h1>{id}</h1>
        <div class="cardcontainer">
            <div class="cards p-2.5" />
        </div>
    </div>
    
</div>

</body>
<style>
    @font-face {
        font-family: normalFont;
        src: url(../../../lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }
    body{
        background: #161616;
    }
    h1 {
        color: white;
    }

  
    .allCenter {
        padding-top: 30px;
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
