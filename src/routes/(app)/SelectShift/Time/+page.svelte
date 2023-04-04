<script>
    import PhoneNav from "$lib/svelte/PhoneNav.svelte";
    import Navbar from "$lib/svelte/Navbar.svelte";

    import { page } from "$app/stores";
    const id = $page.url.searchParams.get("?/:id");
</script>
<body>
    
<div class="allCenter flex w-full min-h-screen">
   
    
    <div class="content pt-2.5 min-h-screen">
        
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
        src: url($lib/fonts/Sequel100Black-55.ttf);
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
        
        .allCenter{
            padding-top: 0;
        }
        
        
    }
</style>
