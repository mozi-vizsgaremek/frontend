import type { Actions, PageServerLoad } from './$types';
import { authFetch } from '$lib/util';

export const load: PageServerLoad = async (ev) => {
  const userRole = ev.cookies.get('role');


   
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
    role: userRole,
    errorMessage: payload.message ?? null
  }


};

