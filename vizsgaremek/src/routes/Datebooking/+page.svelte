<script>
    import PhoneNav from "./PhoneNav.svelte";
</script>

<div class="allCenter flex w-full min-h-screen">
    <!--Phone navigation-->
    <div class="resp-hamburger">
        <PhoneNav/>
    </div>
    <!--Sidebar-->
    <div class="sideBar h-screen p-5 bg-transparent">
        <!--Logo-->
        <div class="Logo pb-5 text-white">CV</div>
        <!--Links-->
        <div class="menu">
            <ul class="p-2">
                <p class="menuTitle text-gray-400 pb-2.5">Menu</p>
                <li class="p-2.5 rounded-xl">
                    <a href="./Home" class=" text-gray-400">Home</a>
                </li>
                <li class="p-2.5 rounded-xl">
                    <a href="./Discover" class="active text-gray-400"
                        >Discovery</a
                    >
                </li>
                <li class="p-2.5 rounded-xl">
                    <a href="./Tickets" class="text-gray-400">Tickets</a>
                </li>
            </ul>
            <hr />
            <ul class="p-2">
                <li class="p-2.5 rounded-xl">
                    <a href="./Settings" class="text-gray-400">Settings</a>
                </li>
                <li class="p-2.5 rounded-xl">
                    <a href="./" class="text-gray-400">Logout</a>
                </li>
            </ul>
        </div>
        <!--profile-->
        <div class="profile flex items-center">
            <div class="circle" />
            <h3>lenfear23</h3>
        </div>
    </div>
    <!--Content-->
    <div class="content min-h-screen">
        <!--Image-->
        <div class="movieCover" />
        <!--Movie desc and book-->
        <div class="all">
            <div class="title">Avatar 2</div>
            <div class="alcim">The way of water</div>
            <div class="category">
                <div class="catcard">Action</div>
                <div class="catcard">Scifi</div>
            </div>
            <div class="desc">
                <p>
                    Stranger Things is a science-fiction horror drama series and
                    is one of Netflix's most successful original series on the
                    platform. The show takes place in the fictional town of
                    Hawkins, Indiana during the 1980s.
                </p>
            </div>
            <h2>Select Date</h2>
            <!--Carousel-->
            <div class="carousel" />
            <!--Next button-->
            <div class="next">
                <button class="nextbtn">Next</button>
            </div>
        </div>
    </div>
</div>

<style>
    @font-face {
        font-family: normalFont;
        src: url(../../lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }
    .desc {
        font-size: 10px;
    }

    .allCenter {
        background: linear-gradient(
            180deg,
            rgba(43, 50, 58, 1) 0%,
            rgba(23, 28, 33, 1) 100%
        );
    }
    .sideBar {
        width: 300px;
    }
    .Logo {
        font-family: normalFont;
        font-size: 26px;
    }
    .menuTitle {
        font-size: 13px;
    }

    li {
        width: 200px;
        transition: all 0.5s;
    }
    li:hover {
        cursor: pointer;
        background-color: rgba(232, 232, 232, 0.218);
    }

    .active {
        color: white;
    }
    hr {
        border: 1px solid gray;
    }
    .circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: white;
        margin-right: 10px;
    }
    h3 {
        color: white;
    }
    .profile {
        position: absolute;
        bottom: 20px;
    }
    .profile:hover {
        cursor: pointer;
    }
    .movieCover {
        background-image: url("../../lib/images/cover.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 400px;
    }
    .desc {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .desc p {
        width: 400px;
    }
    .all {
        position: absolute;
        top: 20%;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        color: white;
        gap: 10px;
        text-align: center;
        width: 75%;
    }

    .resp-hamburger {
        visibility: hidden;
        position: absolute;
    }

    .content {
        width: 80%;
    }

    .title {
        font-size: 24px;
    }
    .category {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .catcard {
        width: 100px;
        height: 25px;
        padding: 5px;
        background-color: white;
        border-radius: 2px;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
    }

    .next {
        display: flex;
        justify-content: center;
    }
    .carousel {
        min-height: 150px;
    }
    .nextbtn {
        background-color: white;
        padding: 10px;
        font-size: 12px;
        width: 200px;
        color: black;
        border-radius: 10px;
    }

    
    @media (max-width: 670px) {
        .sideBar {
            position: absolute;
            visibility: collapse;
        }
        .content {
            width: 100%;
        }
        .resp-hamburger {
            visibility: visible;
            position: fixed;
            bottom: 10px;
            width: 100%;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 10px;
            padding: 20px;
        }
        
        .resp-hamburger ul li {
            width: fit-content;
            color: white;
        }
        .all {
            width: 100%;
            text-align: center;
            gap: 30px;
        }
       
    }
</style>
