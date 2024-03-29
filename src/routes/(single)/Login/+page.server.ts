import { authFetch } from '$lib/util';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async (event) => {
    const body = await event.request.formData();
    let reqBodyPayload: any = {
      username: body.get('username'),
      password: body.get('password')
    };


    const totp = body.get('totp');
    if (totp != null && totp.length > 0)
      reqBodyPayload.totp = totp;


    const reqBody = JSON.stringify(reqBodyPayload);


    const res = await authFetch(event, 'POST', '/auth/login', { body: reqBody });



    const payload = await res?.json();


    if (res?.ok) {
      event.cookies.set("refresh_token", payload.refreshToken);
      event.cookies.set("access_token", payload.accessToken);
    }

    return {
      loginOk: res?.ok,
      errorMessage: payload.message ?? null
    }
  }
};
