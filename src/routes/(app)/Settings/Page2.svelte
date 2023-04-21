<script>
    // @ts-nocheck

    //imports
    import { createForm } from "felte";
    import { notifications } from "$lib/notifications";
    import Toast from "$lib/svelte/Toast.svelte";
    import { browser } from "$app/environment";

    //exports
    export let initialValues;
    export let onSubmit;
    export let onBack;

    //This is for multipage
    const { form, data } = createForm({ onSubmit, initialValues });

    if (data != null && data["changePassword"] && browser) {
        notifications.danger(data.errorMessage, 2000);
    }
</script>

<!--Multipage nav-->
<div class="mininav p-2.5">
    <form use:form>
        <h3 class="alma">
            <button on:click={() => onBack($data)}>2FA</button>
        </h3>
        <h3 class="active_mini"><button>Account</button></h3>
    </form>
</div>

<!--Change password form-->
<div class="pasres">
    <form method="POST" action="?/changePassword">
        <h1>Change Password</h1>
        <input type="password" placeholder="Old password" name="oldPass" />
        <input type="password" placeholder="New password" name="newPass" />
        <button class="save">Save</button>
    </form>

    <form method="POST" action="?/deleteAccount">
        <h1>Delete Account</h1>
        <input type="password" placeholder="Password" name="password" />
        <input type="text" placeholder="TOTP" name="totp" />
        <button class="save">Delete Account</button>
    </form>
</div>

<Toast />

<style>
    .pasres form {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }
    @font-face {
        font-family: normalFont;
        src: url($lib/fonts/Sequel100Black-55.ttf);
    }
    h1 {
        color: white;
        text-align: center;
    }
    * {
        font-family: normalFont;
    }
    .save {
        width: 200px;
        padding: 10px;
        border-radius: 10px;

        background: linear-gradient(48deg, rgba(184,15,0,1) 0%, rgba(249,116,0,1) 100%);
        box-shadow: inset -8px -8px 16px 0px rgba(0, 0, 0, 0.6),
            inset 0px 11px 28px 0px rgba(255, 255, 255, 0.2);
        color: white;
        margin-bottom: 20px;
    }

    .mininav {
        display: flex;
        justify-content: center;
        gap: 10px;
        color: white;
    }
    .active_mini {
        border-bottom: 2px solid white;
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
      width: 400px;
      padding: 15px;
      font-size: 15px;
      color: white;
      background-color: rgb(28,28,30);
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
      border-radius: 10px;
      border: none;
      outline: none;
      transition: 0.4s;
   }
   input:hover {
      box-shadow: 0 0 0 0.15vw rgba(160, 75, 1, 0.418);
   }

   input:focus {
      box-shadow: 0 0 0 0.15vw rgb(249, 79, 0);
   }
    ::-webkit-input-placeholder {
        color: white;
    }
</style>
