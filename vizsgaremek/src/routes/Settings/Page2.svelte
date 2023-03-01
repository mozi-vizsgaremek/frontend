<script>
    // @ts-nocheck
    
        // @ts-ignore
        import { createForm } from 'felte'
        
        export let initialValues;
        export let onSubmit;
        
         // @ts-ignore
         export let onBack;
        
        const { form, data } = createForm({ onSubmit, initialValues })
    </script>
    
    
    
    
    
    <div class="mininav p-2.5">
        <form use:form>
            <h3 class="alma "><button on:click={() => onBack($data)}>2FA</h3>
            <h3 class="alma active_mini"><button >Password</button></h3>
            <h3 class="alma "><button >Language</h3>
        </form>
        
        </div>
        <div class="pasres">
        <form method="POST">
            <input type="password" class="h-10 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" placeholder="Old password" name="oldpass">
            <input type="password" class="h-10 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" placeholder="New password" name="newpass">
            <input type="password" class="h-10 outline-0 bg-transparent p-4 placeholder:text-sm placeholder:text-white text-xs w-72 border-2 rounded-lg" placeholder="New re-password">
            <button class="save">Save</button>
        </form>
    </div>
    <style>
        
        .pasres form{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
         @font-face {
             font-family: normalFont;
             src: url(../../lib/fonts/Sequel100Black-55.ttf);
           }
           *{
            font-family: normalFont;
           }
           .save{
            width: 200px;
            padding: 10px;
            border-radius: 10px;
            background: rgb(43,50,58);
      background: linear-gradient(180deg, rgba(43,50,58,1) 0%, rgba(23,28,33,1) 100%);
     color: white;
           }
           .alma{
                border-bottom: 2px solid gray;
                color: gray;
            }
            .mininav{
                display: flex;
                gap: 10px;
                color: white;
            }
            .active_mini{
                border-color: white;
                color: white;
            }
            form{
                display: flex;
                gap: 10px;
            }
            
            
    </style>