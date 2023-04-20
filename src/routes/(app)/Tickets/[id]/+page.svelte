<script>
    
   import { notifications } from "$lib/notifications";
   import { page } from "$app/stores";
   import { browser } from "$app/environment";
    import Toast from "$lib/svelte/Toast.svelte";
   export const dataNot = $page.form;


    if (dataNot != null && dataNot["chageOk"] && browser) {
     
        notifications.success("Success", 2000);

        
      window.location.pathname = "../";
  }
</script>
<body>
    
<div class="allCenter flex w-full min-h-screen">
   
    
    <div class="content pt-2.5 min-h-screen">
        
        <div class="cardcontainer">
            <div class="cards p-2.5" >
                <form method="POST">
                <h1>Number of seats</h1>
                <input type="number" value="1" placeholder="Seats" name="seats">
                <button>Book</button>
            </form>
            </div>
        </div>
        
   <Toast />
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
    h1{
        color: white;
        font-size: 30px;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
    input {
      font-family: italicFont;
      width: 90%;
      padding: 15px;
      font-size: 15px;
      color: #fff;
      background-color: rgb(28, 28, 30);
      box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
      border-radius: 10px;
      border: none;
      outline: none;
      transition: 0.4s;
   }
   input:hover {
      box-shadow: 0 0 0 0.15vw rgba(235, 135, 135, 0.186);
   }

   input:focus {
      box-shadow: 0 0 0 0.15vw #d2042d;
   }
   button {
     color: white;
     background: #009B4D;
     width: 90%;
     height: 40px;
     border-radius: 10px;
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
        justify-content: center;
    }
    
    @media (max-width: 700px) {
        
        .allCenter{
            padding-top: 0;
        }
        
        
    }
</style>
