import type { Actions, PageServerLoad } from './$types';
import { authFetch } from '$lib/util';

export const load: PageServerLoad = async (ev) => {
  const userRole = ev.cookies.get('role');


  const res = await authFetch(ev, 'GET', '/auditorium/');

  
  const movieres = await authFetch(ev, 'GET', '/movie/');

  let moviepayload = await movieres?.json();
  let payload = await res?.json();


  return {
    regOk: res?.ok,
    auditorium: payload,
    movies: moviepayload
  }


};
export const actions: Actions = {

  CreateScreening: async (event) => {
    const body = await event.request.formData();
    
    const getDateStr = (field: string) => new Date(body.get(field)?.toString()!);

    const reqBody = JSON.stringify({
      movieId: body.get('movie'),
      auditoriumId: body.get('auditorium'),
      time: getDateStr('time')
    });

    const res = await authFetch(event, 'POST', '/screening/', { body: reqBody });

    const payload = await res?.json();
    
    console.log(payload)

    return {
      chageOk: res?.ok
    }
  }
}
