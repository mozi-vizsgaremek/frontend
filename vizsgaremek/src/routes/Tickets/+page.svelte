<script>
    // We import our page components (similar to the one above).
    import Page1 from "./Page1.svelte";
    import Page2 from "./Page2.svelte";

    import PhoneNav from "../../lib/svelte/PhoneNav.svelte";
    
    import Navbar from "../../lib/svelte/Navbar.svelte";

    const pages = [Page1, Page2];

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
            console.log("Submitted data: ", pagesState);
        } else {
            // If we're not on the last page, store our data and increase a step
            pagesState[page] = values;
            // @ts-ignore
            pagesState = pagesState; // Triggering update
            page += 1;
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
</script>
<body>

<div class="allCenter flex w-full min-h-screen">
    <div class="navbar">
        <Navbar/>
    </div>
    <div class="resp-hamburger">
        <PhoneNav />
    </div>
    
    <div class="content pt-2.5 min-h-screen">
        <h2 class="p-2.5">My tickets</h2>
        <hr />

        <div class="cardcontainer">
            <!-- We display the current step here -->
            <svelte:component
                this={pages[page]}
                {onSubmit}
                {onBack}
                initialValues={pagesState[page]}
            />
            <div class="cards p-2.5" />
        </div>
    </div>
</div>
    
</body>
<style>
    @font-face {
        font-family: normalFont;
        src: url(../../lib/fonts/Sequel100Black-55.ttf);
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
   

    hr {
        border: 1px solid gray;
    }
   
   

    .resp-hamburger {
        visibility: hidden;
        position: absolute;
    }

    .content {
        width:100%;
    }
    
    h2 {
        color: white;
        font-size: 23px;
    }
    .cardcontainer {
        display: flex;
        flex-direction: column;
        padding: 10px;
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
