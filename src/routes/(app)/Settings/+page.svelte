<script lang="ts">
    import { page } from "$app/stores";
    export const data = $page.form;

    import { browser } from "$app/environment";

    import Page1 from "./Page1.svelte";
    import Page2 from "./Page2.svelte";
    import Page3 from "./Page3.svelte";
    import PhoneNav from "$lib/svelte/PhoneNav.svelte";
    import Navbar from "$lib/svelte/Navbar.svelte";
    import { notifications } from "$lib/notifications";
    import Toast from "$lib/svelte/Toast.svelte";

    const pages = [Page1, Page2, Page3];

    // The current page of our form.
    let pagese = 0;

    // The state of all of our pages
    // @ts-ignore
    /**
     * @type {any[]}
     */

    let pagesState: any[] = [];

    // Our handlers
    // @ts-ignore
    function onSubmit(values) {
        if (pagese === pages.length - 1) {
            // On our final page with POST our data somewhere
            // @ts-ignore
            console.log("Submitted data: ", pagesState);
        } else {
            // If we're not on the last page, store our data and increase a step
            pagesState[pagese] = values;
            // @ts-ignore
            pagesState = pagesState; // Triggering update
            pagese += 1;
        }
    }
    // @ts-ignore
    function onSubmitDouble(values) {
        if (pagese === pages.length - 1) {
            // On our final page with POST our data somewhere
            // @ts-ignore
            console.log("Submitted data: ", pagesState);
        } else {
            // If we're not on the last page, store our data and increase a step
            pagesState[pagese] = values;
            // @ts-ignore
            pagesState = pagesState; // Triggering update
            pagese += 2;
        }
    }
    // @ts-ignore
    function onBack(values) {
        if (pagese === 0) return;
        pagesState[pagese] = values;
        // @ts-ignore
        pagesState = pagesState; // Triggering update
        pagese -= 1;
    }
    // @ts-ignore
    function double(values) {
        if (pagese === 0) return;
        pagesState[pagese] = values;
        // @ts-ignore
        pagesState = pagesState; // Triggering update
        pagese -= 2;
    }

    if (data != null && data["chageOk"] && browser) {
        // redir
        window.location.pathname = "/Home";
    }
    if (data != null && data["onBoard"] && browser) {
        notifications.success("Success", 2000);
    }
    if (data != null && data["deleteOnBoard"] && browser) {
        notifications.success("Success", 2000);
    }
</script>

<body>
    <div class="allCenter flex w-full min-h-screen">
        

        <div class="content pt-2.5 min-h-screen">
           

            <div class="cardcontainer">
                <svelte:component
                    this={pages[pagese]}
                    {onSubmit}
                    {onSubmitDouble}
                    {onBack}
                    {double}
                    initialValues={pagesState[pagese]}
                />

                <div class="cards p-2.5" />
            </div>
        </div>
        <Toast />
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

    body {
        background: #161616;
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
        padding: 10px;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }

    @media (max-width: 700px) {
      
        .allCenter {
            padding-top: 0;
        }

    }
</style>
