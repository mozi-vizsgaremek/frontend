<script>
    // @ts-nocheck
    
        // @ts-ignore
        import { createForm } from 'felte'
        
        export let initialValues;
        export let onSubmit;
        
         // @ts-ignore
         export let onBack;

         export let double;
        
        const { form, data } = createForm({ onSubmit, initialValues })
    </script>
    
    
    
    
    
    <div class="mininav p-2.5">
        <form use:form>
            <h3 class="alma "><button on:click={() => double($data)}>2FA</h3>
            <h3 class="alma"><button on:click={() => onBack($data)}>Password</button></h3>
            <h3 class="alma active_mini"><button >Language</button></h3>
        </form>
        
        </div>
    <div class="ticket_card">
        <div class="dates">
            <div class="date">2023/01/02</div>
            <div class="time">17:50</div>
        </div>
        <div class="titlecont">
            <h2>Anyád</h2>
        </div>
        <div class="desccont">
            <p>When a man wakes up, he doesn’t remember
                anything about himself or even his name </p>
        </div>
        
    </div>
    
    <style>
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
                transition: all 1s;
            }
            .mininav{
                display: flex;
                gap: 10px;
                color: white;
            }
            .active_mini{
                border-color: white;
                color: white;
                
                transition: all 1s;
            }
           .desccont{
                padding-top: 10px;
                text-align: center;
                font-size: 10px;
                color: rgb(187, 187, 187);
            }
            form{
                display: flex;
                gap: 10px;
            }
            .ticket_card{
                width: 250px;
                height: 350px;
                background-image:
                linear-gradient(to bottom, rgba(40, 40, 40, 0.4), rgba(40, 40, 40, 0.9)),
                                url('../../lib/images/avatar.jpg');
                border-radius: 10px;
            }
            .dates{
                padding: 10px;
                display: flex;
                justify-content: space-between;
                font-size: 8px;
                color: white;
            }
            .titlecont{
                text-align: center;
                padding-top: 100px;
            }
            h2{
                color: white;
            }
            
    </style>