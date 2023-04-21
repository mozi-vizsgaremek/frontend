<script lang="ts">
    import Modal from "$lib/svelte/Modal.svelte";
    import { formatDistanceToNow } from "date-fns";

    import QRCode from "../Settings/QRJS.svelte";
    let showModal = false;
    export let data;

    function qrCode() {
        if (document.body.clientWidth < 600) {
            showModal = true;
        } else {
            alert("You need a mobile phone to use this function");
        }
    }
</script>

<body>
    <div class="allCenter flex w-full min-h-screen">
        <div class="content pt-2.5">
            <div class="cardcontainer">
                <!-- We display the current step here -->
                <div class="tickets">
                    {#each data.tickets as ticket}
                        <div class="ticket_card">
                            <div class="dates">
                                <div class="date" />
                                <div class="time">
                                    {formatDistanceToNow(new Date(ticket.time))}
                                    from now
                                </div>
                            </div>
                            <div class="titlecont">
                                <h2>{ticket.title}</h2>
                            </div>
                            <div class="btncont">
                                <button class="qr" on:click={qrCode} >Open</button>
                                <a href={`./DeleteReservation/${ticket.id}`} class="delete"
                                    >Delete</a
                                >
                            </div>
                        </div>
                    {/each}
                </div>
                <Modal bind:showModal>
                    <h2 slot="header" class="header">Ticket</h2>

                    <QRCode
                        codeValue={data.tickets.screeningId}
                        squareSize="400"
                    />
                </Modal>

                <div class="cards p-2.5" />
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
    body {
        background: #161616;
    }
    .allCenter {
        padding-top: 30px;
    }

    .content {
        width: 100%;
    }
    .tickets {
        display: flex;
        width: 100%;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
    }
    .delete{
        padding: 5px;
        border-radius: 3px;
        color: white;
        font-size: 12px;
        width: 80px;
        height: 30px;
        text-align: center;
      background: linear-gradient(48deg, rgba(184,15,0,1) 0%, rgba(249,116,0,1) 100%);
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

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #161616;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #d2042d;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #ad0325;
    }
    .ticket_card {
        width: 290px;
        height: 180px;
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

    .titlecont {
        text-align: center;
        padding-top: 10px;
        color: white;
    }
    .btncont {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        justify-content: center;
    }
    .qr {
        margin-top: 20px;
        border-radius: 10px;
        color: white;
        font-size: 15px;
        width: 120px;
        height: 40px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(48deg, rgba(184,15,0,1) 0%, rgba(249,116,0,1) 100%);
        padding: 10px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    }
</style>
