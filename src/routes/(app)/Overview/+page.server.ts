import type { Actions, PageServerLoad } from './$types';
import { authFetch } from '$lib/util';

export const load: PageServerLoad = async (ev) => {
  const userRole = ev.cookies.get('role');



  const res = await authFetch(ev, 'GET', '/shift/book/');


  let payload = (await res?.json()).map(x => ({
    ...x,
    shiftTo: new Date(x.shiftTo),
    shiftFrom: new Date(x.shiftFrom)
  }));



  return {
    upComing: await payload
  }


};

