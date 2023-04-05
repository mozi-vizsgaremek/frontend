<script>
    //@ts-nocheck
    import QRCode from "./QRJS.svelte";
    import Modal from "$lib/svelte/Modal.svelte";
    
   import { notifications } from "$lib/notifications";
   import Toast from "$lib/svelte/Toast.svelte";

    import { page } from "$app/stores";
    export const data = $page.form;

    import { browser } from "$app/environment";

    let showModal = false;

    let deletemodal = false;

    // @ts-ignore
    import { createForm } from "felte";

    export let initialValues;
    export let onSubmit;
    let content;

    // @ts-ignore
    export let onSubmitDouble;
    let uri;

    const { form } = createForm({ onSubmit, initialValues });

    let secret;
    if (data != null && data["totpOk"] && data["totpUri"] && browser) {
        secret = data.totpOk;
        showModal = true;

        uri = data.totpUri;
    }

    if (data != null && data["errorMessage"] && browser) {
        notifications.danger(data.errorMessage, 2000);
    }
    if (data != null && data["onborad"] && browser) {
        showModal = false;
    }
    if (data != null && data["deleteOnBoard"] && browser) {
        
        notifications.danger(data.errorMessage, 2000);
    }

    function openModal() {
        showModal = true;
    }
</script>

<div class="mininav p-2.5">
    <form use:form>
        <h3 class="alma active_mini"><button>2FA</button></h3>
        <h3 class="alma"><button type="submit">Password</button></h3>
    </form>
</div>

<div class="totp">
    <h2>What is TOTP?</h2>
    <p class="desc">
        This extension empowers you to easily transfer and access the 2-factor
        authentication codes from your mobile to your browser. No need to
        manually type in the codes ever again!
    </p>
    <form method="POST" action="?/startOnBoarding">
        <button class="on">Turn On</button>
    </form>

    <button class="on" on:click={openModal}>Remove TOTP</button>
</div>

<Toast />
<Modal bind:showModal>
    <h2 slot="header" class="header">Complete TOTP</h2>
    <!-- svelte-ignore empty-block -->
    {#if data != null && data["totpOk"] && data["totpUri"] && browser}
        <div class="totpOnboarding">
            <QRCode codeValue={uri} squareSize="200" />
            <!-- svelte-ignore missing-declaration -->
            <h3>
                Secret key:
                <p>{secret}</p>
            </h3>
            <form method="POST" action="?/completeOnboarding">
                <input type="password" placeholder="password" name="password" />
                <input type="text" placeholder="totp" name="totp" />

                <input type="submit" class="on" value="Done" />
            </form>
        </div>
    {:else}
        <div class="totpDelete">
            <form method="POST" action="?/deleteOnboarding">
                <input
                    type="password"
                    placeholder="password"
                    name="deletePassword"
                />
                <input type="text" placeholder="totp" name="deleteTotp" />

                <button class="on">Delete</button>
            </form>
        </div>
    {/if}
</Modal>

<style>
    .totp {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .totpOnboarding {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
    }
    p {
        font-size: 12px;
    }
    h2 {
        color: white;
    }
    .header {
        color: white;
    }
    .desc {
        color: gray;
    }
    .on {
        width: 200px;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        background: linear-gradient(
            180deg,
            rgba(43, 50, 58, 1) 0%,
            rgba(23, 28, 33, 1) 100%
        );
        color: white;
    }
    button {
        outline: none;
    }
    button:hover {
        cursor: pointer;
    }
    .totpOnboarding form {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
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
    }
    input {
        background-color: transparent;
        border-bottom: 2px solid rgb(31, 31, 31);
        font-size: 13px;
        padding: 5px;
        outline: none;
        color: white;
        transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
    input:focus {
        border-bottom: 2px solid #a3e583;
    }

    form {
        display: flex;
        gap: 10px;
    }
    .totpDelete form{
        display: flex;
        flex-direction: column;
    }
</style>
