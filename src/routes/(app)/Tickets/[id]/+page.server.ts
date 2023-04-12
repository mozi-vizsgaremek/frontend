import { authFetch } from "$lib/util";
import type { Actions } from "./$types";

export const actions: Actions = {

    default: async (ev) => {
    const body = await ev.request.formData();
      
      const reqBody = JSON.stringify({
        seats : Number(body.get('seats'))
      });
      
  
      const res = await authFetch(ev, 'POST', `/reservation/${ev.params.id}`,{body : reqBody});
  
      const payload = await res?.json()
  
      console.log( payload);
  
      return {
        chageOk: res?.ok,
        errorMessage: payload.message ?? null
      }
}
}