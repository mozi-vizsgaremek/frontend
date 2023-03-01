<script>
// @ts-nocheck

    // @ts-ignore
	import { createForm } from 'felte'
	
	export let initialValues;
	export let onSubmit;
    // @ts-ignore
    export let onSubmitDouble;
	
	const { form } = createForm({ onSubmit, initialValues })
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
            <button class="on">Turn On</button>
    </div>


<style>
    .totp{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    h2{
        color: white;
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
      
        form{
            display: flex;
            gap: 10px;
        }
        
</style>

