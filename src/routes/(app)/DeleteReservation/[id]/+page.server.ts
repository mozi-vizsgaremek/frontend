import { authFetch } from "$lib/util";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ev) => {
    
    const res = await authFetch(ev, 'DELETE', `/reservation/${ev.params.id}`);  


    if(await res?.ok)
        throw redirect(302, '../');
    
}