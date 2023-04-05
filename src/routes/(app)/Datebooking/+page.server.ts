import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from '../$types';


/** @type {import('./$types').PageServerLoad} */
export async function load(ev: RequestEvent) {
  throw redirect(302, "/");
}