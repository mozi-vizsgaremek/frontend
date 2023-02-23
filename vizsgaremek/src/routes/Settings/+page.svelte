<script>
    // We import our page components (similar to the one above).
    
    import Page1 from './Page1.svelte';
     import Page2 from './Page2.svelte';
     import Page3 from './Page3.svelte';
   
     const pages = [Page1, Page2, Page3];
   
     // The current page of our form.
     let page = 0;
   
     // The state of all of our pages
     // @ts-ignore
     /**
        * @type {any[]}
        */
       
     let pagesState = [];
   
     // Our handlers
     // @ts-ignore
     function onSubmit(values) {
       if (page === pages.length - 1) {
         // On our final page with POST our data somewhere
         // @ts-ignore
         console.log('Submitted data: ', pagesState)
       } else {
         // If we're not on the last page, store our data and increase a step
         pagesState[page] = values;
         // @ts-ignore
         pagesState = pagesState; // Triggering update
         page +=1;
       }
     }
     // @ts-ignore
     function onSubmitDouble(values) {
       if (page === pages.length - 1) {
         // On our final page with POST our data somewhere
         // @ts-ignore
         console.log('Submitted data: ', pagesState)
       } else {
         // If we're not on the last page, store our data and increase a step
         pagesState[page] = values;
         // @ts-ignore
         pagesState = pagesState; // Triggering update
         page +=2;
       }
     }
   // @ts-ignore
     function onBack(values) {
       if (page === 0) return;
           pagesState[page] = values;
           // @ts-ignore
       pagesState = pagesState; // Triggering update
       page -= 1;
     }
     // @ts-ignore
     function double(values){
        if (page === 0) return;
           pagesState[page] = values;
           // @ts-ignore
       pagesState = pagesState; // Triggering update
       page -= 2;
     }
     
   </script>
       
       <div class="allCenter flex w-full min-h-screen">
           <div class="resp-hamburger">
               <ul>
                   <li><a href="#" class=" text-gray-400">Home</a></li>
                   <li><a href="#" class="text-gray-400">Discover</a></li>
                   <li><a href="#" class="text-gray-400">Tickets</a></li>
                   <li><a href="#" class="text-gray-400">Profil</a></li>
               </ul>
           </div>
           <div class="sideBar h-screen p-5 bg-transparent">
               <div class="Logo pb-5 text-white">CV</div>
       
               <div class="menu">
                   <ul class="p-2">
                       <p class="menuTitle text-gray-400 pb-2.5">Menu</p>
                       <li class="p-2.5 rounded-xl"><a href="./Home" class=" text-gray-400">Home</a></li>
                       <li class="p-2.5 rounded-xl"><a href="./Discover" class="text-gray-400">Discovery</a></li>
                       <li class="p-2.5 rounded-xl"><a href="./Tickets" class="text-gray-400">Tickets</a></li>
                   </ul>
                   <hr>
                   <ul class="p-2">
                       <li class="p-2.5 rounded-xl"><a href="./Settings" class="active text-gray-400">Settings</a></li>
                       <li class="p-2.5 rounded-xl"><a href="./" class="text-gray-400">Logout</a></li>
                   </ul>
               </div>
               <div class="profile flex items-center">
                   <div class="circle"></div>
                   <h3>lenfear23</h3>
               </div>
           </div>
           <div class="content pt-2.5 min-h-screen">
               <h2 class="p-2.5">My tickets</h2>
               <hr>
               
               
               <div class="cardcontainer">
                   <svelte:component
   this={pages[page]}
   {onSubmit}
   {onSubmitDouble}
   {onBack}
   {double}
   initialValues={pagesState[page]}
   />

               <div class="cards p-2.5">
                   
               </div>
           </div>
           </div>
           <div class="upComing">
               <h3 class="up">Upcoming Movies</h3>
               <div class="upcard">
                   <p class="cim pt-16">Avatar 2</p>
                   <div class="coming pb-5">2023/03/10</div>
                   <div class="desc text-center">
                       asdasd dsajd nwfieun iewgi uneinweinf iwnefi wenniunb
                   </div>
               </div>
               <div class="upcard">
                   <p class="cim">Avatar 2</p>
                   <div class="coming pb-5">2023/03/10</div>
                   <div class="desc">
                       asdasd dsajd nwfieun iewgi uneinweinf iwnefi wenniunb
                   </div>
               </div>
               <div class="upcard">
                   <p class="cim">Avatar 2</p>
                   <div class="coming pb-5">2023/03/10</div>
                   <div class="desc">
                       asdasd dsajd nwfieun iewgi uneinweinf iwnefi wenniunb
                   </div>
               </div>
           </div>
       </div>
       
       <style>
           @font-face {
            font-family: normalFont;
            src: url(../../lib/fonts/Sequel100Black-55.ttf);
          }
          *{
           font-family: normalFont;
          }
       
          .upcard{
           display: flex ;
           flex-direction: column;
           align-items: center;
          }
          
          .coming{
           font-size: 13px;
          }
          .desc{
           font-size: 10px;
          }
       
           .allCenter{
               background: linear-gradient(180deg, rgba(43,50,58,1) 0%, rgba(23,28,33,1) 100%);
           }
           .sideBar{
               width: 300px;
           }
           .Logo{
               font-family: normalFont;
               font-size: 26px;
           }
           .menuTitle{
               font-size: 13px;
           }
           
           li{
               width: 200px;
               transition: all 0.5s;
           }
           li:hover{
               cursor: pointer;
               background-color: rgba(232, 232, 232, 0.218);
           }
           
           .active{
               color: white;
           }
           hr{
               border: 1px solid gray;
           }
           .circle{
               width: 30px;
               height: 30px;
               border-radius: 50%;
               background-color: white;
               margin-right: 10px;
           }
           h3{
               color: white;
           }
           .profile{
               position: absolute;
               bottom: 20px;
           }
           .profile:hover{
               cursor: pointer;
           }
       
       
           .resp-hamburger{
               visibility: hidden;
               position: absolute;
           }
          
       
           .content{
               width: 80%;
           }
           h3{
               font-size: 15px;
           }
           
           h2{
               color: white;
               font-size: 23px;
           }
           .cardcontainer{
               display: flex;
               flex-direction: column;
               padding: 10px;
           }
           .cards{
               display: flex;
               flex-wrap: wrap;
               gap: 50px;
               
           }
           .active{color: white;
           }
          
       
       
       
       
           .upComing{
               width: 300px;
               min-height: 100vh;
               display: flex;
               flex-direction: column;
               align-items: center;
               padding-top: 20px;
               gap: 20px;
           }
           .upcard{
               width: 200px;
               height: 200px;
               border-radius: 10px;
               background-position: center;
               background-size: cover;
               background-repeat: no-repeat;
               color: white;
               background-image:
               linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(40, 40, 40, 0.73)),
           url('../../lib/images/avatar.jpg');
       
           }
           .up{
               padding-bottom: 5px;
           }
          
          @media (max-width:1200px){
           .upComing{
              visibility: collapse;
              position: absolute;
           }
          
       
          }
          @media (max-width:670px){
           .sideBar{
               position: absolute;
               visibility: collapse;
       
           }
           .content{
               width: 100%;
           }
           .resp-hamburger{
               visibility: visible;
               position: fixed;
               bottom: 10px;
               width: 100%;
               background: rgba(4, 4, 4, 0.613);
               box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
               backdrop-filter: blur( 4px );
               -webkit-backdrop-filter:blur( 4px );
               border-radius: 10px;
               padding: 20px;
           }
           .resp-hamburger ul{
               display: flex;
               justify-content: center;
               gap:30px;
           }
           .resp-hamburger ul li{
               width: fit-content;
               color: white;
           }
           
          }
       </style>