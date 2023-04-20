import { authFetch } from "$lib/util";
import type {PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ev) => {
    const res = await authFetch(ev, 'GET', `/movie/${ev.params.id}`);


    const resScreen = await authFetch(ev, 'GET', `/movie/screenings/${ev.params.id}`);
    console.log(await resScreen?.json())

    let screening =  (await resScreen?.json()).map(x => ({
        ...x,
        time: new Date(x.time)
      }));


    return {
        movie: await res?.json(),
        
        screenings: await screening
    }
}


