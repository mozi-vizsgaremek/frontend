<script lang="ts">
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import Page1 from "./Page1.svelte";
    import Page2 from "./Page2.svelte";
    import { notifications } from "$lib/notifications";
    import Toast from "$lib/svelte/Toast.svelte";

    export const data = $page.form;

    const pages = [Page1, Page2];

    let pagese = 0;

    // @ts-ignore
    /**
     * @type {any[]}
     */

    let pagesState: any[] = [];

    // @ts-ignore
    function onSubmit(values) {
        if (pagese === 1) return;
        pagesState[pagese] = values;
        // @ts-ignore
        pagesState = pagesState;
        pagese += 1;
    }

    // @ts-ignore
    function onBack(values) {
        if (pagese === 0) return;
        pagesState[pagese] = values;
        // @ts-ignore
        pagesState = pagesState; // Triggering update
        pagese -= 1;
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
        <div class="content pt-2.5">
            <div class="cardcontainer">
                <svelte:component
                    this={pages[pagese]}
                    {onSubmit}
                    {onBack}
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
