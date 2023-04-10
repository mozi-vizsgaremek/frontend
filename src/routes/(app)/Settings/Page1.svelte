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
        align-items: center;
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
        max-width: 600px;
    }
    .on {
        width: 200px;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        background:transparent;

        box-shadow:
            inset -8px -8px 16px 0px rgba(0, 0, 0, 0.6),
            inset 0px 11px 28px 0px rgba(255, 255, 255, 0.2);
        color: white;
    }
    .on:hover{
        cursor: pointer;
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
        justify-content: center;
        gap: 10px;
        color: white;
    }
    input {
        backdrop-filter: blur(5px);
        background: transparent;
        border-radius: 15px;
        box-shadow:
            inset -8px -8px 16px 0px rgba(255, 255, 255, 0.2) ,
            inset 0px 11px 28px 0px rgba(0, 0, 0, 0.6);
        font-size: 13px;
        padding: 15px;
        outline: none;
        color: white;
        transition: all .5s;
    }
    ::-webkit-input-placeholder{
        color: white;
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
