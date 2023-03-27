import { baseUrl } from '$lib/config';
import type { Actions } from '../$types';



export const actions: Actions = {


  changePassword: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      oldPassword: body.get('oldPass'),
      newPassword: body.get('newPass'),
    });



    const retok = event.cookies.get("refresh_token");
    const acctok = event.cookies.get("access_token");


    const res = await event.fetch(`${baseUrl}/auth/password`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${acctok}`,
      },
      body: reqBody
    });

    const payload = await res.json();

    return {
      chageOk: res.ok,
      errorMessage: payload.message ?? null
    }
  },

  startOnBoarding: async (event) => {

    const acctok = event.cookies.get("access_token");

    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      oldPassword: body.get('oldpass'),
      newPassword: body.get('newpass')
    });

    const resTotp = await event.fetch(`${baseUrl}/auth/totp`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${acctok}`,
      },
      body: reqBody
    });

    const payload = await resTotp.json();

    console.log(payload.uri)

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


    const acctok = event.cookies.get("access_token");

    const onBoard = await event.fetch(`${baseUrl}/auth/totp`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${acctok}`,
      },
      body: reqBody
    });



    return {
      onBoard: onBoard.ok
    }
  },

  deleteOnboarding: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
      password: body.get('deletePassword'),
      totp: body.get('deleteTotp')
    });

    const acctok = event.cookies.get("access_token");

    const deleteOnBoard = await event.fetch(`${baseUrl}/auth/totp`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${acctok}`,
      },
      body: reqBody
    });



    return {
      deleteOnBoard: deleteOnBoard.ok
    }
  }

};
