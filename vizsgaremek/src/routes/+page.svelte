<script>
   let logosrc= '';
</script>
<div class="allCenter flex w-full justify-center min-h-screen">
   
<div class="cont flex-col items-center gap-10 bg-transparent">
    <img src='src\routes\cinemalogo.png' alt="Logo" class="kep">
    <h1 class="text-6xl font-bold">
        CINEMAVIEW
   </h1> 
   <div class="blurs rounded-t-2xl shadow backdrop-blur-sm">
        <div class="form gap-5 h-full w-full">
            <h1>Login</h1>

            <form action="">
                <input class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" type="text" placeholder="Username">
                <input class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" type="password" placeholder="Password">
                <div class="check flex justify-around w-72">
                  <div class="stay flex">
                  <input type="checkbox">
                  <h2 class="text-xs">Stay signed</h2>
               </div>
               <div class="forgot flex">
                  <a href="" class="text-xs">Forgott password?</a>
               </div>
                </div>
                
                <button class="w-72 h-12 text-center shadow rounded-lg">Login</button>
                <p class="text-xs">Don’t have an account? <a href="">Register here</a></p>
            </form>
            
        </div>
   </div>
</div>

   
       
       
        
</div>
  <style>
    @font-face {
	font-family: normalFont;
	src: url(../lib/fonts/Sequel100Black-55.ttf);
  }
  @font-face {
	font-family: italicFont;
	src: url(../lib/fonts/Sequel100Black-56.ttf);
  }
  *{
        font-family: normalFont;
        color: white;
     }
     
     .allCenter{
        background-image: url('../lib/images/theme.jpg');
        background-position: center;
        background-repeat: no-repeat;
     }
     .cont{
        display: flex;
        align-items: center;
        width:410px;
        min-height: 100vh;
     }
     .kep{
        width: 100px;
        height: 100px;
     }
     .blurs{
        background-color: rgba(54, 54, 54, 0.281);
        height: 450px;
        width: 100%;
     }
     .form{
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 10px;
        padding: 40px;
     }
     h1{
        font-size: 25px;
     }
     form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
     }
     input{
      font-family: italicFont;
     }
     a{
      font-family: italicFont;
     }
     button{
      background: rgb(43,50,58);
background: linear-gradient(180deg, rgba(43,50,58,1) 0%, rgba(23,28,33,1) 100%);
     }
     
     
  </style>