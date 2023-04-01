<script>
    // @ts-nocheck

    // @ts-ignore
    import { createForm } from "felte";
    
   import { notifications } from "../../lib/notifications";
   import Toast from "../Toast.svelte";
   
   import { page } from "$app/stores";

    import { browser } from "$app/environment";

    export let initialValues;
    export let onSubmit;

    // @ts-ignore
    export let onBack;

    const { form, data } = createForm({ onSubmit, initialValues });

    if (data != null && data["changePassword"] && browser) {
        
        notifications.danger(data.errorMessage, 2000);
    }
</script>

<div class="mininav p-2.5">
    <form use:form>
        <h3 class="alma ">
            <button on:click={() => onBack($data)}>2FA</button>
        </h3>
        <h3 class="alma active_mini"><button>Password</button></h3>
        <h3 class="alma "><button>Language</button></h3>
    </form>
</div>
<div class="pasres">
    <form method="POST" action="?/changePassword">
        <input
            type="password"
            required
            placeholder="Old password"
            name="oldPass"
        />
        <input
            type="password"
            required
            placeholder="New password"
            name="newPass"
        />
        <button class="save">Save</button>
    </form>
</div>

<Toast />
<style>
    .pasres form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @font-face {
        font-family: normalFont;
        src: url(../../lib/fonts/Sequel100Black-55.ttf);
    }
    * {
        font-family: normalFont;
    }
    .save {
        width: 200px;
        padding: 10px;
        border-radius: 10px;
        background: rgb(43, 50, 58);
        background: linear-gradient(
            180deg,
            rgba(43, 50, 58, 1) 0%,
            rgba(23, 28, 33, 1) 100%
        );
        color: white;
    }

    .mininav {
        display: flex;
        gap: 10px;
        color: white;
    }
    .active_mini {
        border-color: white;
        color: white;
    }
    .alma {
        border-bottom: 2px solid gray;
        color: gray;
    }

    form {
        display: flex;
        gap: 10px;
    }
    input {
        font-size: 0.9rem;
        background-color: transparent;
        width:50%;
        outline: none;
        height: 100%;
        padding-inline: 0.5em;
        padding-block: 0.7em;
        border: none;
        color: white;
    }
    input:focus {
        border-bottom: 2px solid #D2042D;
    }
</style>
