<script lang="ts">
    // @ts-nocheck
    import type { PageData } from "./$types";
    import { format } from 'date-fns';
    

    export let data: PageData;
</script>
<body>
   
<div class="allCenter ">
    
    
    <div class="content pt-2.5 min-h-screen">
       

        <div class="cardcontainer">
            <div class="cards p-2.5">
                {#each data.alma as entry}
                    <a href={`./Time`}>
                    <div class="dateCard">
                        <div class="word">
                        </div>
                        <div class="number">{format(entry.shiftTo, "d. E")}</div>
                        <div class="status" />
                    </div>
                    </a>
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
        padding-top: 100px;
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
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }

   

    @media (max-width: 700px) {
       
        .allCenter{
            padding-top: 0;
        }
       
        
    }
</style>
