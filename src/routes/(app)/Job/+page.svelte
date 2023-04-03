<script>
    import PhoneNav from "$lib/svelte/PhoneNav.svelte";
    import Navbar from "$lib/svelte/Navbar.svelte";
</script>
<body>
 
<div class="allCenter flex w-full min-h-screen">
    <div class="navbar">
        <Navbar />
    </div>
    <div class="resp-hamburger">
        <PhoneNav />
    </div>
    
    <div class="content pt-2.5 min-h-screen">
       

        <div class="cardcontainer">
            <div class="cards p-2.5">
                <a href="./SelectShift">
                <div class="card">
                    
                    <div class="title">
                        Book your shift
                    </div>
                
                </div>
            </a>

            <a href="./Overview">
                <div class="card">
                    <div class="title">Overview</div>
                </div>
            </a>
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
    body{
        background: #161616;
    }

    .allCenter {
        padding-top: 30px;
    }
  
    
   

    .resp-hamburger {
        visibility: hidden;
        position: absolute;
    }

    .content {
        width:100%;
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
    .card {
        padding: 20px;
        color: white;
        width: 350px;
        min-height: 200px;
        border-radius: 10px;

        background: linear-gradient(
            90deg,
            rgba(43, 50, 58, 1) 0%,
            rgba(23, 28, 33, 1) 100%
        );
        transition: all 0.5s;
    }
    .card:hover {
        transition: all .5s;
        animation: anim1 2s;
        cursor: pointer;
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
