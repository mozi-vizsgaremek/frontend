
import { baseUrl } from '$lib/config';
import type { Actions } from './$types';



export const actions: Actions = {
  default: async (event) => {

    const res = await event.fetch(`${baseUrl}/shift/book`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }

    });

    const payload = await res.json();


    if (res.ok) {
      event.cookies.set("refresh_token", payload.refreshToken);
      event.cookies.set("access_token", payload.accessToken);
    }

    return {
      loginOk: res.ok,
      errorMessage: payload.message ?? null
    }
  }
};
