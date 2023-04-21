import { authFetch } from '$lib/util';
import type { RequestEvent } from './$types';

/** @type {import('./$types').PageServerLoad} */
export async function load(ev: RequestEvent) {
  const res = await authFetch(ev, 'GET', '/movie/');

  const body = await res?.json();

  return {
    resBody: body
  };
}