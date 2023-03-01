<script>
</script>

<div class="allCenter flex w-full justify-center min-h-screen">
   <div class="cont flex-col items-center gap-3 bg-transparent pt-1.5">
      <!--Logo-->
      <img src="src\routes\cinemalogo.png" alt="Logo" class="kep" />
      <h1 class="cin font-bold">CINEMAVIEW</h1>

      <!--Login Card-->
      <div class="blurs rounded-2xl shadow backdrop-blur-sm">
         <div class="form gap-5 h-full w-full">
            <h1>Login</h1>

            <!--Login form-->
            <form method="POST">
               <!--Username input-->
               <input
                  class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg"
                  type="text"
                  placeholder="Username"
                  name="username"
               />
               <!--Password input-->
               <input
                  class="h-12 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg"
                  type="password"
                  placeholder="Password"
                  name="password"
               />

               <!--Stay signed checkbox and forgott password link-->
               <div class="check flex justify-between w-72">
                  <div class="stay flex gap-2">
                     <input
                        type="checkbox"
                        id="helper-checkbox"
                        aria-describedby="helper-checkbox-text"
                        class="ch"
                     />
                     <h2 class="small">Stay signed</h2>
                  </div>

                  <!--????????????????????????????????????????-->
                  <div class="forgot flex">
                     <a href="" class="small">Forgott password?</a>
                  </div>
               </div>

               <!--Submit button-->
               <button class="w-72 h-12 text-center shadow rounded-lg">
                  Login
               </button>
               <!--Redirect to registration-->
               <p class="small">
                  Don’t have an account? <a href="/Registration"
                     >Register here</a
                  >
               </p>
            </form>
         </div>
      </div>
   </div>
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
      background-image: url("../lib/images/theme.jpg");
      background-position: center;
      background-repeat: no-repeat;
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
   .blurs {
      background-color: rgba(54, 54, 54, 0.281);
      height: 450px;
      width: 100%;
   }
   .form {
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 10px;
      padding: 40px;
   }
   h1 {
      font-size: 25px;
   }
   form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
   }
   input {
      font-family: italicFont;
      width: 90%;
   }
   a {
      font-family: italicFont;
   }
   button {
      background: rgb(43, 50, 58);
      background: linear-gradient(
         180deg,
         rgba(43, 50, 58, 1) 0%,
         rgba(23, 28, 33, 1) 100%
      );
      width: 90%;
   }
   .cin {
      font-size: 34px;
   }
   .small {
      font-size: 10px;
   }
   .ch {
      width: 12px;
      height: 12px;
      background-color: white;
      border-radius: 50%;
      vertical-align: middle;
      border: none;
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
   }
   .ch:checked {
      background-color: gray;
   }
</style>
