<script>
    // @ts-nocheck

    let dates =[
        {day:'WE', nu:'02'},
        {day:'TH', nu:'03'},
        {day:'TR', nu:'04'},
        {day:'SA', nu:'05'},
        {day:'SU', nu:'06'},
        {day:'MO', nu:'07'},
        {day:'TO', nu:'08'},
        {day:'WE', nu:'09'},
        {day:'TH', nu:'10'},
        {day:'TR', nu:'11'},
        {day:'SA', nu:'12'},
        {day:'SU', nu:'13'},
        {day:'MO', nu:'14'},
        {day:'TO', nu:'13'},
        {day:'WE', nu:'15'},
        {day:'TH', nu:'16'},
        {day:'TR', nu:'17'},
        {day:'SA', nu:'18'},
        {day:'SU', nu:'19'},
        

    ]
    </script>
    
    <div class="allCenter flex w-full min-h-screen">
        <div class="resp-hamburger">
            <ul>
                <li><a href="#" class="active text-gray-400">Home</a></li>
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
                    <li class="p-2.5 rounded-xl"><a href="./Home" class="text-gray-400">Home</a></li>
                    <li class="p-2.5 rounded-xl"><a href="./Discover" class="text-gray-400">Discovery</a></li>
                    <li class="p-2.5 rounded-xl"><a href="./Tickets" class="text-gray-400">Tickets</a></li>
                    <li class="p-2.5 rounded-xl"><a href="./Job" class="active text-gray-400">Job</a></li>
                </ul>
                <hr>
                <ul class="p-2">
                    <li class="p-2.5 rounded-xl"><a href="./Settings" class="text-gray-400">Settings</a></li>
                    <li class="p-2.5 rounded-xl"><a href="./" class="text-gray-400">Logout</a></li>
                </ul>
            </div>
            <div class="profile flex items-center">
                <div class="circle"></div>
                <h3>lenfear23</h3>
            </div>
        </div>
        <div class="content pt-2.5 min-h-screen">
            <h2 class="p-2.5">Job</h2>
            <hr>
            
            <div class="cardcontainer">
            <div class="cards p-2.5">
                {#each dates as {day, nu}}
                <div class="dateCard">
                    <div class="word">{day}</div>
                    <div class="number">{nu}</div>
                    <div class="status"></div>
                </div>
                {/each}
            </div>
        </div>
        </div>
       
    </div>
    
    <style>
        @font-face {
         font-family: normalFont;
         src: url(../../lib/fonts/Sequel100Black-55.ttf);
       }
       .status{
        width: 70%;
        min-height: 5px;
        background-color: #00FF47;
        border-radius: 2px;
       }
       .dateCard{
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
            background: linear-gradient(90deg, rgba(43,50,58,0.3) 0%, rgba(23,28,33,0.6) 100%);
            box-shadow:  10px 10px 60px #252b31,
             -10px -10px 60px #1c1a1a;
             transition: all .5s;
       }
       .dateCard:hover{
        cursor: pointer;
        transform: scale(1.05);
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
        h2{
            color: white;
            font-size: 23px;
        }
        .cardcontainer{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .cards{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 50px;
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