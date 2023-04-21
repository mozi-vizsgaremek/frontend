<script lang="ts">
   //@ts-nocheck
   import { browser } from "$app/environment";
   import { page } from "$app/stores";
   import { notifications } from "$lib/notifications";
   import Toast from "$lib/svelte/Toast.svelte";
   export const data = $page.form;

   import logo from "$lib/images/cinemalogo.png";

   let username;
   let password;

   if (data != null && data["loginOk"] && browser) {
      // redir
      window.location.pathname = "/";
   }

   if (data != null && data["errorMessage"] && browser) {
      if (
         data.errorMessage ==
         "body/username Expected string length greater or equal to 4, body/username Expected string to match pattern ^([A-Za-z0-9_-]){4,32}$, body/password Expected string length greater or equal to 8, body/password Expected string to match pattern ^[A-Za-z0-9!@#$%&^_W]{8,256}$"
      ) {
         notifications.danger("Invalid username or password", 2000);
      } else {
         notifications.danger(data.errorMessage, 2000);
      }
   }
</script>

<div class="allCenter flex w-full justify-center min-h-screen">
   <div class="cont flex-col items-center gap-3 bg-transparent pt-1.5">
      <div class="form gap-4 h-full w-full">
         <!--Logo-->
         <img src={logo} alt="Logo" class="kep" />
         <h1 class="cin font-bold">CINEMAVIEW</h1>

         <h1>Login</h1>

         <!--Login form-->
         <form method="POST">
            <!--Username input-->
            <input
               bind:value={username}
               class="h-12"
               type="text"
               placeholder="Username"
               name="username"
            />
            <!--Password input-->
            <input
               bind:value={password}
               class="h-12"
               type="password"
               placeholder="Password"
               name="password"
            />
            <input class="h-12" type="text" placeholder="TOTP (Optional)" name="totp" />

            <!--Stay signed checkbox and forgott password link-->
            <div class="check flex justify-between w-72" />

            <!--Submit button-->
            <button class="w-72 h-12 text-center shadow rounded-lg">
               Login
            </button>
            <!--Redirect to registration-->
            <p class="small">
               Don’t have an account? <a href="/Registration">Register here</a>
            </p>
         </form>
      </div>
   </div>
   <Toast />
</div>

<style>
   @font-face {
      font-family: normalFont;
      src: url($lib/fonts/Sequel100Black-55.ttf);
   }
   @font-face {
      font-family: italicFont;
      src: url($lib/fonts/Sequel100Black-56.ttf);
   }
   * {
      font-family: normalFont;
      color: white;
   }

   .allCenter {
      background-color: #2d3436;
      background-image: linear-gradient(315deg, #1b1f20 0%, #000000 74%);
      display: flex;
      align-items: center;
   }
   .cont {
      display: flex;
      align-items: center;
      width: 410px;
      min-height: 100vh;
      justify-content: center;
   }
   .kep {
      width: 120px;
      height: 120px;
   }
   .form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 20px;
   }
   h1 {
      font-size: 25px;
      margin-bottom: 20px;
   }
   form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
   }
   input {
      font-family: italicFont;
      width: 90%;
      padding: 15px;
      font-size: 15px;
      color: white;
      background-color: rgb(28,28,30);
      box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
      border-radius: 10px;
      border: none;
      outline: none;
      transition: 0.4s;
   }
   input:hover {
      box-shadow: 0 0 0 0.15vw rgba(160, 75, 1, 0.418);
   }
   ::-webkit-input-placeholder{
      color: white;
   }
   input:focus {
      box-shadow: 0 0 0 0.15vw rgb(249, 79, 0);
   }
   a {
      font-family: italicFont;
   }
   button {
      background: linear-gradient(48deg, rgba(184,15,0,1) 0%, rgba(249,116,0,1) 100%);
      width: 90%;
   }
   .cin {
      font-size: 34px;
      background: -webkit-linear-gradient(48deg, rgba(184,15,0,1), rgba(249,116,0,1));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }
   .small {
      font-size: 10px;
   }
</style>
