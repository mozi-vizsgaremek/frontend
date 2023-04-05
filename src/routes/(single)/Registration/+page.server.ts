import type { Actions } from './$types';
import { authFetch } from '$lib/util';


export const actions: Actions = {
  default: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      username: body.get('username'),
      firstName: body.get('first_name'),
      lastName: body.get('last_name'),
      password: body.get('password')
    });


    const res = await authFetch(event, 'POST', '/auth/register', { body: reqBody });


    const payload = await res?.json();
    return {
      regOk: res?.ok,
      errorMessage: payload.message ?? null
    }

  }
};
