import { baseUrl } from '$lib/config';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';


export const actions: Actions = {
  default: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
        username: body.get('username'),
        firstName: body.get('first_name'),
        lastName: body.get('last_name'),
        password: body.get('password')
    });

    const res = await event.fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: reqBody
    });
   
    if(res.ok){
      throw redirect(301,'/')
    }
    else{
      throw new Error();
    }
    
    console.log(await res.json());
  }
};
