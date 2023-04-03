<script>
    import PhoneNav from "$lib/svelte/PhoneNav.svelte";
    import Navbar from "$lib/svelte/Navbar.svelte";

    export let data;
</script>
<body>

<div class="allCenter">
    <div class="navbar">
        <Navbar/>
    </div>
    <!--Phone navigation-->
    <div class="resp-hamburger">
        <PhoneNav/>
    </div>
    <hr>
    <!--Content-->
    <div class="content min-h-screen">
        <!--Image-->
        <div class="movieCover" />
        <!--Movie desc and book-->
        <div class="all">
            <div class="title">{ data.movie.title }</div>
            <div class="alcim">{ data.movie.subtitle }</div>
            <div class="category">
                <div class="catcard">Action</div>
                <div class="catcard">Scifi</div>
            </div>
            <div class="desc">
                <p>{ data.movie.description }</p>
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
    .desc {
        font-size: 10px;
    }

    .allCenter {
        padding-top: 50px;
    }
    

   
    .movieCover {
        background-image: url("$lib/images/cover.jpg");
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
        width: 100%;
    }

    .resp-hamburger {
        visibility: hidden;
        position: absolute;
    }

    .content {
        width:100%;
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
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            border-radius: 10px;
            padding: 20px;
        }
        
        
        
       
    }
</style>
