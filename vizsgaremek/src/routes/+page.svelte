<script lang="ts">
   //@ts-nocheck
   import { browser } from "$app/environment";
   import { page } from "$app/stores";
   import { notifications } from "../lib/notifications";
   import Toast from "./Toast.svelte";
   import Modal from "../lib/svelte/Modal.svelte";
   export const data = $page.form;

   let showModal = false;



   let username;
   let password;




   if (data != null && data["loginOk"] && browser) {
      // redir
      window.location.pathname = "/Home";
   }

   if (data != null && data["errorMessage"] && browser) {
      if(data.errorMessage === 'TOTP required'){
         showModal = true;
        
      }
      notifications.danger(data.errorMessage, 2000);
   }
   function openModal() {
      if (data != null && data["errorMessage"] && browser) {
      if(data.errorMessage === 'TOTP required'){
         showModal = true;
      }else{
         window.location.pathname = "/Home";
      }
   }
   }
</script>

<div class="allCenter flex w-full justify-center min-h-screen">
   <div class="cont flex-col items-center gap-3 bg-transparent pt-1.5">
      <div class="form gap-4 h-full w-full">
         <!--Logo-->
         <img src="src\routes\cinemalogo.png" alt="Logo" class="kep" />
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
               class="h-12 "
               type="password"
               placeholder="Password"
               name="password"
            />

            <Modal bind:showModal>
               <h2 slot="header" class="header">Complete TOTP</h2>
               <form method="POST">
                  <input
                  value={username}
                  class="h-12 nope"
                  type="text"
                  placeholder="Username"
                  name="username"
               />
               <!--Password input-->
               <input
               value={password}
                  class="h-12 nope"
                  type="password"
                  placeholder="Password"
                  name="password"
               />
                  <input
                     class="h-12"
                     type="text"
                     placeholder="TOTP"
                     name="totp"
                  />
                  <button
                     type="submit"
                     class="w-72 h-12 text-center shadow rounded-lg"
                  >
                     Login
                  </button>
               </form>
            </Modal>

            <!--Stay signed checkbox and forgott password link-->
            <div class="check flex justify-between w-72" />

            <!--Submit button-->
            <button
               class="w-72 h-12 text-center shadow rounded-lg"
               on:click={openModal}
            >
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
      src: url(../lib/fonts/Sequel100Black-55.ttf);
   }
   @font-face {
      font-family: italicFont;
      src: url(../lib/fonts/Sequel100Black-56.ttf);
   }
   * {
      font-family: normalFont;
      color: white;
   }

   .allCenter {
      background-image: url("../lib/images/bg6.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-color: black;
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
      padding: 40px;
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
      color: #fff;
      background-color: rgb(28, 28, 30);
      box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
      border-radius: 10px;
      border: none;
      outline: none;
      transition: 0.4s;
   }
   input:hover {
      box-shadow: 0 0 0 0.15vw rgba(235, 135, 135, 0.186);
   }

   input:focus {
      box-shadow: 0 0 0 0.15vw #d2042d;
   }
   a {
      font-family: italicFont;
   }
   button {
     
      background: linear-gradient(142deg, rgba(129,65,62,1) 0%, rgba(106,0,0,1) 100%);
      width: 90%;
   }
   .cin {
      font-size: 34px;
   }
   .small {
      font-size: 10px;
   }
</style>
