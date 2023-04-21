import type { PageServerLoad } from './$types';
import { authFetch } from '$lib/util';
import type { Actions } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';

/** @type {import('./$types').PageServerLoad} */

export async function load(ev: RequestEvent) {

  const date = new Date();
  const dateJson = date.toJSON();
  const currentday = dateJson.slice(0, 10);

  const future = new Date((new Date()).getTime() + (10 * 86400000));
  const futureJson = future.toJSON();
  const futureDay = futureJson.slice(0, 10);

  const reqBody = JSON.stringify({
    from: currentday,
    to: futureDay,

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
