import type { Actions, PageServerLoad } from './$types';
import { authFetch } from '$lib/util';

export const load: PageServerLoad = async (ev) => {
  const userRole = ev.cookies.get('role');


  const res = await authFetch(ev, 'POST', '/auditorium');

  let payload = await res?.json();


  return {
    regOk: res?.ok,
    alma: payload,
  }


};

