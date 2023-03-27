import { baseUrl } from '$lib/config';
import type { Actions } from '../$types';


console.log("alma");


export const actions: Actions = {
  

  CreateShift: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
        shiftFrom: body.get('shiftFrom'),
        shiftTo: body.get('shiftTo'),
        requiredStaff: 1
    });
    
   
    
    const refresh_token = event.cookies.get("refresh_token");
    const access_token = event.cookies.get("access_token");
   

    const res = await event.fetch(`${baseUrl}/shift/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`,
      },
      body: reqBody  
    });



    const payload = await res.json();

    console.log(await payload)

    return {
      chageOk: res.ok,
      errorMessage: payload.message ?? null
    }
  }

};
