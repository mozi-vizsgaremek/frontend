<script>
// @ts-nocheck
    import Modal from './Modal.svelte';
    import { page } from "$app/stores";
   export const data = $page.form;

    import { browser } from "$app/environment";

	let showModal = false;

    // @ts-ignore
	import { createForm } from 'felte'
    
	
	export let initialValues;
	export let onSubmit;
    let content;
    
    // @ts-ignore
    export let onSubmitDouble;
	
	const { form } = createForm({ onSubmit, initialValues })

    let secret;
    if (data != null && data['totpOk'] && browser) {
        secret = data.totpOk;
        showModal= true;
        content = `
        
        `
   }
   if (data != null && data['onborad'] && browser) {
        
        showModal = false;
   }
   if(data != null && data['deleteOnBoard'] && browser){
    
   }

</script>


<div class="mininav p-2.5">
    
        <form use:form>
        <h3 class="alma active_mini"><button >2FA</h3>
        <h3 class="alma"><button type="submit">Password</button></h3>
        <h3 class="alma"><button type="submit" on:click={()=>{onSubmitDouble()}}>Language</button></h3>
    </form>
    </div>

    <div class="totp">
        <h2>What is TOTP?</h2>
        <p class="desc">This extension empowers you to easily transfer and 
            access the 2-factor authentication codes from your
            mobile to your browser. No need to manually type in
            the codes ever again!</p>
            <form method="POST" action="?/startOnBoarding">
            <button class="on">Turn On</button>
        </form>

        <form  method="POST" action="?/deleteOnboarding">
        <button class="on">Remove TOTP</button>
        </form>
    </div>

     
<Modal bind:showModal>
	<h2 slot="header" class="header">
		{@html content}
	</h2>
<div class="totpOnboarding">
    <!-- svelte-ignore missing-declaration -->
    <h3>
        Secret key:
        <p>{secret}</p>
    </h3>
    <form method="POST" action="?/completeOnboarding">
        <input type="password" placeholder="password" name="password">
        <input type="text" placeholder="totp" name="totp">
        
        <input type="submit" class="on" value="OK">
    </form>
</div>
</Modal>
	
    <div class="totpDelete">
        <form method="POST" action="?/deleteOnboarding">
            <input type="password" placeholder="password" name="deletePassword">
            <input type="text" placeholder="totp" name="deleteTotp">
            
            <input type="submit" class="on" value="Delete">
        </form>
    </div>


     

    
   

   


<style>
    .totp{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h3{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
    }
    p{
        font-size: 12px;
    }
    h2{
        color: white;
    }
    .header{
        color:white;
    }
    .desc{
        color: gray;
    }
    .on{
        width: 200px;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
        background: linear-gradient(180deg, rgba(43,50,58,1) 0%, rgba(23,28,33,1) 100%);
        color: white;

    }
   button:hover{
    cursor: pointer;
   }
    .totpOnboarding form{
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }
     @font-face {
         font-family: normalFont;
         src: url(../../lib/fonts/Sequel100Black-55.ttf);
       }
       *{
        font-family: normalFont;
       }
       .alma{
            border-bottom: 2px solid gray;
            color: gray;
        }
        .active_mini{
            border-color: white;
            color: white;
        }
        .mininav{
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
      
        form{
            display: flex;
            gap: 10px;
        }
        
</style>

