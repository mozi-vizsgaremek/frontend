import { baseUrl } from '$lib/config';
import { authFetch } from '$lib/util';
import type { Actions } from '../$types';

import type { RequestEvent } from '../$types';

/** @type {import('./$types').PageServerLoad} */



export const actions: Actions = {


  CreateShift: async (event) => {
    const body = await event.request.formData();
    const getDateStr = (field: string) => new Date(body.get(field)?.toString()!);

    const reqBody = JSON.stringify({
      shiftFrom: getDateStr('shiftFrom'),
      shiftTo: getDateStr('shiftTo'),
      requiredStaff: Number(body.get('requiredStaff'))
    });

    console.log(reqBody);

    const res = await authFetch(event, 'POST', '/shift/', { body: reqBody });

    const payload = await res?.json();

    console.log(payload);

    return {
      chageOk: res?.ok,
      errorMessage: payload.message ?? null
    }
  }

};

