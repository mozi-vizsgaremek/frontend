
import { baseUrl } from '$lib/config';
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

    console.log(reqBody);

    const res = await event.fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: reqBody

    });   

    const payload = await res.json();

    
    if (res.ok) {
      event.cookies.set("refresh_token", payload.refreshToken);
      event.cookies.set("access_token", payload.accessToken);
    }

    return {
      loginOk: res.ok,
      getTotp: totp,
      errorMessage: payload.message ?? null
    }
  }
};
