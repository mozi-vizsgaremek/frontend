import type { PageServerLoad } from './$types';
import { authFetch } from '$lib/util';

export const load: PageServerLoad = async (ev) => {

    
  const res = await authFetch(ev, 'POST', '/reservation');

  let payload = await res?.json();

  return {
    tickets: payload,
    errorMessage: payload.message ?? null
  }


  

};
