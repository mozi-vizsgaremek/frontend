import { baseUrl } from '$lib/config';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';


export const actions: Actions = {
  bookShift: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
        from: "2022-11-11",
        to: "2024-12-11",
        
    });
    
    const retok = event.cookies.get("refresh_token");
    const acctok = event.cookies.get("access_token");

    const res = await event.fetch(`${baseUrl}/shift/filter`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${acctok}`,
        },
        body: reqBody
    });
   
   
    const payload = await res.json();

    console.log(payload)


    return {
      regOk: res.ok,
      alma: payload,
      errorMessage: payload.message ?? null
    }
    
  }
};
