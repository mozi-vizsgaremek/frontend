<script>
    // @ts-nocheck
    import { createForm } from "felte";
    import QRCode from "../Settings/QRJS.svelte";
    import Modal from "$lib/svelte/Modal.svelte";
    import { each } from "svelte/internal";

    export let initialValues;
    export let onSubmit;

    let showModal = false;

    const { form } = createForm({ onSubmit, initialValues });

    function qrCode() {
        if (document.body.clientWidth < 600) {
            showModal = true;
        } else {
            alert("Ki kell nyomtatni");
        }
    }
</script>

<div class="mininav p-2.5">
    <form use:form>
        <h3 class="alma active_mini"><button>Upcoming Shows</button></h3>
        <h3 class="alma"><button type="submit">Past Shows</button></h3>
    </form>
</div>
<div class="ticket_card">
    <div class="dates">
        <div class="date">2023/04/10</div>
        <div class="time">17:50</div>
    </div>
    <div class="titlecont">
        <h2>Avatar 2</h2>
    </div>
    <div class="desccont">
        <p>
            When a man wakes up, he doesn’t remember anything about himself or
            even his name
        </p>
    </div>
    <div class="btncont">
        <button class="qr" on:click={qrCode} />
    </div>
</div>
<Modal bind:showModal>
    <h2 slot="header" class="header">Ticket</h2>

    <QRCode codeValue="http://localhost:5173/Tickets" squareSize="400" />
</Modal>

<style>
    @font-face {
        font-family: normalFont;
        src: url($lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }
    .alma {
        border-bottom: 2px solid gray;
        color: gray;
    }
    .active_mini {
        border-color: white;
        color: white;
    }
    .mininav {
        display: flex;
        gap: 10px;
        color: white;

        margin-bottom: 20px;
    }
    .desccont {
        padding-top: 10px;
        text-align: center;
        font-size: 10px;
        color: rgb(187, 187, 187);
    }
    .ticket_card {
        width: 390px;
        height: 250px;
        background-image: linear-gradient(
                to bottom,
                rgba(40, 40, 40, 0.4),
                rgba(40, 40, 40, 0.9)
            ),
            url("$lib/images/cover.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
    }
    .dates {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 8px;
        color: white;
    }
    form {
        display: flex;
        gap: 10px;
    }
    .titlecont {
        text-align: center;
        padding-top: 50px;
    }
    .btncont {
        display: flex;
        justify-content: center;
    }
    .qr {
        margin-top: 40px;
        border-radius: 10px;
        color: white;
        font-size: 12px;
        width: 200px;
        height: 40px;
        text-align: center;
        background: linear-gradient(
            142deg,
            rgba(129, 65, 62, 1) 0%,
            rgba(106, 0, 0, 1) 100%
        );
        padding: 10px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }
    h2 {
        color: white;
    }
</style>
