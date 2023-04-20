import { authFetch } from '$lib/util';
import { redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';


export const actions: Actions = {

  changePassword: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      oldPassword: body.get('oldPass'),
      newPassword: body.get('newPass')
    });

    const res = await authFetch(event, 'PUT', '/auth/password', { body: reqBody });

    if(res?.ok){
      throw redirect(302,'../')
    }

    return {
      chageOk: res?.ok
    }
  },
  deleteAccount: async (event) => {
    const body = await event.request.formData();
    let reqBodyPayload: any = {
      password: body.get('password'),
      
    };

    const totp = body.get('totp');
    if (totp != null && totp.length > 0)
      reqBodyPayload.totp = totp;


    const reqBody = JSON.stringify(reqBodyPayload);

    const res = await authFetch(event, 'DELETE', '/auth', { body: reqBody });



    return {
      chageOk: res?.ok
    }
  },

  startOnBoarding: async (event) => {

    const res = await authFetch(event, 'POST', '/auth/totp');

    const payload = await res?.json();

    return {
      totpOk: payload.secret,
      totpUri: payload.uri,
      errorMessage: payload.message ?? null
    }
  },


  completeOnboarding: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      password: body.get('password'),
      totp: body.get('totp')
    });

    const res = await authFetch(event, 'PUT', '/auth/totp', { body: reqBody });

    return {
      onBoard: res?.ok
    }
  },

  deleteOnboarding: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      password: body.get('deletePassword'),
      totp: body.get('deleteTotp')
    });

    const res = await authFetch(event, 'DELETE', '/auth/totp', { body: reqBody });

    if(res?.ok){
      throw redirect(302,'../')
    }

    return {
      deleteOnBoard: res?.ok
    }
  }

};
