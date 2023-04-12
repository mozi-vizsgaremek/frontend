<script>
    

    import { format } from 'date-fns';
    export let data;
</script>
<body>
    
<div class="allCenter flex w-full min-h-screen">
   
    
    <div class="content pt-2.5 min-h-screen">
        
        <div class="cardcontainer">
            <div class="cards p-2.5" >
                
                {#each data.alma as entry}
                <a href={`Time/${entry.id}`}>
                    <form method="POST" action="?/bookShift">
                    <div class="dateCard">
                        <div class="buttons">
                        <div class="number">{format(entry.shiftFrom, "kk:mm")} - {format(entry.shiftTo, "kk:mm")}</div>
                    </div>
                    </div>
                </form>
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
    * {
        font-family: normalFont;
    }
    body{
        background: #161616;
    }
    

  
    .allCenter {
        padding-top: 30px;
    }
   
    .number{
        color: black;
        font-size: 13px;
    }

    .dateCard {
        padding: 20px;
        color: black;
        width: 180px;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        transition: all 0.5s;

        backdrop-filter: blur(5px);

        background-color: rgb(231, 203, 203);

        border-radius: 20px;
        box-shadow: inset -8px -8px 16px 0px rgba(33, 35, 35, 0.6),
            inset 0px 11px 28px 0px rgb(255, 255, 255);
    }
    .buttons{
        color: black;
        display: flex;
        font-size: 12px;
        gap: 5px;
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
