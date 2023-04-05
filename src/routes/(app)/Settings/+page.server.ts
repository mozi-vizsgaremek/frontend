import { authFetch } from '$lib/util';
import type { Actions } from '../$types';



export const actions: Actions = {


  changePassword: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      oldPassword: body.get('oldPass'),
      newPassword: body.get('newPass'),
    });

    

    const res = await authFetch(event, 'PUT', '/auth/password', { body: reqBody });

    const payload = await res?.json()


    return {
      chageOk: res?.ok,
      errorMessage: payload.message ?? null
    }
  },

  startOnBoarding: async (event) => {

    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      oldPassword: body.get('oldpass'),
      newPassword: body.get('newpass')
    });

    
    const res = await authFetch(event, 'POST', '/auth/totp', { body: reqBody });

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


    const payload = await res?.json();



    return {
      deleteOnBoard: res?.ok,
      
      errorMessage: payload.message ?? null
    }
  }

};
