import { authFetch } from "$lib/util";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ev) => {
    const res = await authFetch(ev, 'GET', `/movie/${ev.params.id}`);

    return {
        movie: await res?.json()
    }
}