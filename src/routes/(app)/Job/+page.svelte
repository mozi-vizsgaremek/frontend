<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;

    let userRole = data.role == "admin" || data.role == "manager";
</script>
<body>
 
<div class="allCenter flex w-full min-h-screen">
    
    
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
            {#if userRole}
            <a href="./ManagerShifts">
                <div class="card">
                    <div class="title">Add shift</div>
                </div>
            </a>
            {/if}
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
  
    
   


    .content {
        width:100%;
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
        
        .allCenter{
            padding-top: 0;
        }
       
        
    }
</style>
