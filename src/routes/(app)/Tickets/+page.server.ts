import type { PageServerLoad } from './$types';
import { authFetch } from '$lib/util';

export const load: PageServerLoad = async (ev) => {

    
  const res = await authFetch(ev, 'GET', '/reservation/');

  let payload = await res?.json();

  console.log(await payload)
  
  return {
    tickets:payload,
  }


  

};
