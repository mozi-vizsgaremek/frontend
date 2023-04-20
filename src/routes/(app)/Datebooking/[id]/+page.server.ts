import { authFetch } from "$lib/util";
import type {PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ev) => {
    const res = await authFetch(ev, 'GET', `/movie/${ev.params.id}`);


    const resScreen = await authFetch(ev, 'GET', `/movie/screenings/${ev.params.id}`);

    let screenings =  (await resScreen?.json()).map(x => ({
        ...x,
        time: new Date(x.time)
      }));

      console.log(screenings)

    return {
        movie: await res?.json(),
        screenings
    }
}


