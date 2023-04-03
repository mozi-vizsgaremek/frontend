<script>
    // @ts-nocheck
    import PhoneNav from "$lib/svelte/PhoneNav.svelte";
    import Navbar from "$lib/svelte/Navbar.svelte";
    import { page } from "$app/stores";
    export const data = $page.form;

    import { browser } from "$app/environment";

    let dates = [
        { day: "WE", nu: "02" },
        { day: "TH", nu: "03" },
        { day: "TR", nu: "04" },
        { day: "SA", nu: "05" },
        { day: "SU", nu: "06" },
        { day: "MO", nu: "07" },
        { day: "TO", nu: "08" },
        { day: "WE", nu: "09" },
        { day: "TH", nu: "10" },
        { day: "TR", nu: "11" },
        { day: "SA", nu: "12" },
        { day: "SU", nu: "13" },
        { day: "MO", nu: "14" },
        { day: "TO", nu: "13" },
        { day: "WE", nu: "15" },
        { day: "TH", nu: "16" },
        { day: "TR", nu: "17" },
        { day: "SA", nu: "18" },
        { day: "SU", nu: "19" },
    ];

    if (data != null && data["regOk"] && browser) {
        alert("booked")
    }
    if (data != null && data["alma"] && browser) {
        for(let i =0; i<data.alma.length; i++){
        console.log(data.alma[i].shiftFrom + `-` + data.alma[i].shiftTo)
    }
    }
    
</script>
<body>
   
<div class="allCenter ">
    <div class="navbar">
        <Navbar/>
    </div>
    <div class="resp-hamburger">
        <PhoneNav />
    </div>
    
    <div class="content pt-2.5 min-h-screen">
        <h2 class="p-2.5">Job</h2>
        <hr />

        <div class="cardcontainer">
            <div class="cards p-2.5">
                {#each dates as { day, nu }}
                <form method="POST" action="?/bookShift">
                    <div class="dateCard">
                        <div class="word">
                            <a href="SelectShift/Time"> </a>
                        </div>
                        <div class="number">{nu}</div>
                        <div class="status" />
                        <button>send</button>
                    </div>
                </form>
                {/each}
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
    body{
        background: #161616;
    }
    .status {
        width: 70%;
        min-height: 5px;
        background-color: #00ff47;
        border-radius: 2px;
    }
    .dateCard {
        padding: 20px;
        color: white;
        width: 90px;
        min-height: 50px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: linear-gradient(
            90deg,
            rgba(43, 50, 58, 0.3) 0%,
            rgba(23, 28, 33, 0.6) 100%
        );
        box-shadow: 10px 10px 60px #252b31, -10px -10px 60px #1c1a1a;
        transition: all 0.5s;
    }
    .dateCard:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
    * {
        font-family: normalFont;
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
        justify-content: center;
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
