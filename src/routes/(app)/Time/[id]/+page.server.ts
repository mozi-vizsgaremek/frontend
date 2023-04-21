import { authFetch } from "$lib/util";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ev) => {
    const res = await authFetch(ev, 'POST', `/shift/book/${ev.params.id}`);



    const payload = await res?.json();



    if (await res?.ok)
        throw redirect(302, '../Job')

}
