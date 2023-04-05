import { authFetch } from "$lib/util";
import type { Actions, PageServerLoad } from "./$types";

import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async (ev) => {

    console.log(ev.params.id)
    const res = await authFetch(ev, 'POST', `/shift/book/${ev.params.id}`);

    const payload = await res?.json();


    console.log(payload);

    return {
        resOk: payload
    }
}
