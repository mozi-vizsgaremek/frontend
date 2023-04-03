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
        <div class="navbar">
            <Navbar />
        </div>
        <div class="resp-hamburger">
            <PhoneNav />
        </div>
        
        <div class="content pt-2.5 min-h-screen">
            <h2 class="p-2.5">Shift</h2>
            <hr />

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
