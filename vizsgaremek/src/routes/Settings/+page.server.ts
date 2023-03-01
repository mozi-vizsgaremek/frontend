import { baseUrl } from '$lib/config';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';


console.log("alma");

export const actions: Actions = {
  default: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
        oldPassword: body.get('oldpass'),
        newPassword: body.get('newpass')
    });

   console.log("pite");

    const res = await event.fetch(`${baseUrl}/auth/password`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: reqBody
        
    });

    

    if(res.ok){
      console.log(res.status)
        throw redirect(301,'/Home')
        
        
       
    }else{
        
        console.log(await res.json())
      throw new Error('Wrong details');
      
      
    }
  }
};
