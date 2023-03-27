
import { baseUrl } from '$lib/config';


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const res = await fetch(`${baseUrl}/auth/admin`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
  
      });

  
    return {
    };
  }