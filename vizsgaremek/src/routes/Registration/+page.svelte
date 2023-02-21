<script>
    import { getStores } from "$app/stores";


    let logosrc= '';
 </script>
 <div class="allCenter flex w-full justify-center min-h-screen">
    
 <div class="cont flex-col items-center gap-3 bg-transparent">
     <h1 class="cin font-bold">
         CINEMAVIEW
    </h1> 
    <div class="blurs rounded-t-2xl shadow backdrop-blur-sm">
         <div class="form gap-5 h-full w-full">
             <h1>Registration</h1>
 
             <form action="">
                 <input class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" type="text" placeholder="Username">
                 <input class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" type="text" placeholder="Firstname">
                 <input class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" type="text" placeholder="Lastname">
                 
                 <input class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" type="password" placeholder="Password">
                 <input class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" type="password" placeholder="Re-Password">
                 
                 
                 <button class="w-72 h-12 text-center shadow rounded-lg">Create</button>
                 <p class="small">Already have an account? <a href="../">Login here</a></p>
             </form>
             
         </div>
    </div>
 </div>
 
    
        
        
         
 </div>
   <style>
     @font-face {
     font-family: normalFont;
     src: url(../../lib/fonts/Sequel100Black-55.ttf);
   }
   @font-face {
     font-family: italicFont;
     src: url(../../lib/fonts/Sequel100Black-56.ttf);
   }
   *{
         font-family: normalFont;
         color: white;
      }
      
      .allCenter{
         background-image: url('../../lib/images/theme.jpg');
         background-position: center;
         background-repeat: no-repeat;
      }
      .cont{
       padding-top: 5px;
         display: flex;
         align-items: center;
         width:410px;
         min-height: 100vh;
      }
     
      .blurs{
         background-color: rgba(54, 54, 54, 0.281);
         height: 100%;
         width: 100%;
      }
      .form{
         display: flex;
         align-items: center;
         flex-direction: column;
         border-radius: 10px;
         padding: 20px;
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
         gap: 30px;
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
      .cin{
       font-size: 34px;
      }
      .small{
       font-size: 10px;
      }
      .ch{
       width: 12px;
       height: 12px;
       background-color: white;
       border-radius: 50%;
       vertical-align: middle;
       border: none;
       appearance: none;
       -webkit-appearance: none;
       outline: none;
       cursor: pointer;
      }
      .ch:checked{
       background-color: gray;
      }
 
      @media (max-width:420px){
       .cont{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap:10px;
          padding-top: 100px;
       }
       
       .blurs{
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          position: absolute;
          bottom: 0;
          height: 70%;
       }
       .form{
          gap: 40px;
       }
       form{
          gap: 20px;
       }
      }
      
      
   </style>