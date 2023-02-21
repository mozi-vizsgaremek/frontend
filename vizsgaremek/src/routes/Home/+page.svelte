<script>
// @ts-nocheck



</script>

<div class="allCenter flex">
    <div class="sideBar">
        <div class="Logo">CV</div>

        <div class="menu">
            <ul>
                <p class="menuTitle">Menu</p>
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">Discovery</a></li>
                <li><a href="#">Tickets</a></li>
            </ul>
            <hr>
            <ul>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
        <div class="profile flex items-center">
            <div class="circle"></div>
            <h3>lenfear23</h3>
        </div>
    </div>
    <div class="content">
        <h2>Popular Movies</h2>
        <hr>
        <div class="carousel">

        </div>
        <h2>Top Rated</h2>
        <hr>
        <div class="cardcontainer">
        <div class="cards">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>
    </div>
    </div>
    <div class="upComing">
        <h3 class="up">Upcoming Movies</h3>
        <div class="upcard">
            <p class="cim">Avatar 2</p>
            <div class="coming">2023/03/10</div>
            <div class="desc">
                asdasd dsajd nwfieun iewgi uneinweinf iwnefi wenniunb
            </div>
        </div>
        <div class="upcard">
            <p class="cim">Avatar 2</p>
            <div class="coming">2023/03/10</div>
            <div class="desc">
                asdasd dsajd nwfieun iewgi uneinweinf iwnefi wenniunb
            </div>
        </div>
        <div class="upcard">
            <p class="cim">Avatar 2</p>
            <div class="coming">2023/03/10</div>
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
   .cim{
    padding-top: 60px;
   }
   .coming{
    font-size: 13px;
    padding-bottom: 20px;
   }
   .desc{
    text-align: center;
    font-size: 10px;
   }

    .allCenter{
        width: 100%;
        min-height: 100vh;
        background: rgb(43,50,58);
        background: linear-gradient(180deg, rgba(43,50,58,1) 0%, rgba(23,28,33,1) 100%);
    }
    .sideBar{
        width: 300px;
        min-height: 100vh;
        background-color: transparent;
        padding: 20px;
    }
    .Logo{
        font-family: normalFont;
        color: white;
        font-size: 26px;
        padding-bottom: 20px;
    }
    .menuTitle{
        font-size: 13px;
        color: gray;
    }
    ul{
        padding: 10px;
    }
    li{
        padding: 10px;
        color: gray;
        border-radius: 10px;
        width: 200px;
        transition: all 0.5s;
    }
    li:hover{
        cursor: pointer;
        background-color: rgba(232, 232, 232, 0.218);
    }
    p{
        padding-bottom: 10px;
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





    .content{
        width: 80%;
        min-height: 100vh;
        padding-top: 10px;
    }
    h2{
        color: white;
        font-size: 23px;
        padding: 10px;
    }
    .cardcontainer{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cards{
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        
    }
    .card{
        
        width: 170px;
        height: 250px;
        background-image: url('../../lib/images/avatar.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.5s;
    }
    .card:hover{
        transform: scale(1.05);
        filter: blur(3px);
        cursor: pointer;
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
</style>