<script>
   // @ts-nocheck

   import { notifications } from "$lib/notifications";
   import Toast from "$lib/svelte/Toast.svelte";
   import { browser } from "$app/environment";
   import { page } from "$app/stores";
   export const data = $page.form;
   let errorMessage;

   if (data != null && data["loginOk"] && browser) {
      // redir
      window.location.pathname = "../";
   }
   if (data != null && data["errorMessage"] && browser) {
      notifications.danger(data.errorMessage, 2000);
   }
</script>

<div class="allCenter flex w-full justify-center min-h-screen">
   <div
      class="cont flex-col items-center gap-3 bg-transparent pt-1.5 h-full text-center"
   >
      <div class="form gap-5 h-full w-full">
         <h1 class="cin font-bold">CINEMAVIEW</h1>
         <h1>Registration</h1>

         <form method="POST">
            <input
               required
               class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg"
               type="text"
               name="username"
               placeholder="Username"
            />
            <input
               required
               class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg"
               type="text"
               name="first_name"
               placeholder="First name"
            />
            <input
               required
               class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg"
               type="text"
               name="last_name"
               placeholder="Last name"
            />

            <input
               required
               class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg"
               type="password"
               name="password"
               placeholder="Password"
            />

            <button class="w-72 h-12 text-center shadow rounded-lg shadow-xl"
               >Create</button
            >
            <p class="small">
               Already have an account? <a href="./Login">Login here</a>
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
      width: 410px;
      min-height: 100vh;
      display: flex;
      justify-content: center;
   }

   .form {
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 10px;
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
