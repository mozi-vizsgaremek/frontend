import { goto } from '$app/navigation';
import { baseUrl } from '$lib/config';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async (event) => {
    const body = await event.request.formData();
    const reqBody = JSON.stringify({
        username: body.get('username'),
        password: body.get('password')
    }
   );

    const res = await event.fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: reqBody
        
    });

    return { code: res.status }
  }
};
