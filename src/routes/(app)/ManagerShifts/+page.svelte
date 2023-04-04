<script>
    import PhoneNav from "$lib/svelte/PhoneNav.svelte";
    import Navbar from "$lib/svelte/Navbar.svelte";

    import { page } from "$app/stores";
    export const data = $page.form;

    import { browser } from "$app/environment";

    if (data != null && data["chageOk"] && browser) {
        
        alert("Laci")
    }

</script>

<body>
    <div class="allCenter ">
        
        
        <div class="content pt-2.5 min-h-screen">
           

            <div class="cardcontainer">
                <div class="cards p-2.5">
                    <form action="?/CreateShift" method="post">
                        <input type="datetime" name="shiftFrom" />
                        <input type="datetime" name="shiftTo" />
                        <input type="submit" value="Add" class="on" />
                    </form>
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
   
    .on {
        width: 200px;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        background: linear-gradient(
            180deg,
            rgba(43, 50, 58, 1) 0%,
            rgba(23, 28, 33, 1) 100%
        );
        color: white;
    }
    .on:hover {
        cursor: pointer;
    }
    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
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
