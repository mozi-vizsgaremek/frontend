import { authFetch } from "$lib/util";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ev) => {



    const res = await authFetch(ev, 'GET', `/screening/`);

    const payload = await res?.json();

    return {
        screenings: payload
    }



};