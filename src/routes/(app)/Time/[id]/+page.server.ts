import { authFetch } from "$lib/util";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ev) => {
    console.log(ev.params.id)
    const res = await authFetch(ev, 'POST', `/shift/book/${ev.params.id}`);

    

    const payload = await res?.json();

    console.log(payload)


    if(await res?.ok)
        throw redirect(302,'../Job')
    
}
