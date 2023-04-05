import type { PageServerLoad } from './$types';
import { authFetch } from '$lib/util';
import type { Actions } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';

/** @type {import('./$types').PageServerLoad} */

export async function load(ev:RequestEvent){
  
    const reqBody = JSON.stringify({
        from: "2023-04-01",
        to: "2023-04-30",
        
    });
    
    const res = await authFetch(ev, 'POST', '/shift/filter', { body: reqBody });
   

    let payload = (await res?.json()).map(x => ({
      ...x,
      shiftTo: new Date(x.shiftTo),
      shiftFrom: new Date(x.shiftFrom)
    }));


    return {
      regOk: res?.ok,
      alma: payload,
      errorMessage: payload.message ?? null
    }
    
  
};
