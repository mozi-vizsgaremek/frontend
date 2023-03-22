// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export const actions: Actions ={
	default: async (event) => {
    	const reqBody = JSON.stringify({

			refreshToken: event.cookies.get("refresh_token")
    	});
		
		const refresh_token = event.cookies.get("refresh_token");
		const access_token = event.cookies.get("access_token");
	
		const res = await event.fetch(`${baseUrl}/auth/refresh`, {
		  method: 'POST',
		  headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${access_token}`,
		  },
		  body: reqBody
	
		});

		res.set('set-cookie',`refreshToken=${refresh_token}`)

		
		const payload = await res.json();
	
		if (res.ok) {
			event.cookies.set("refresh_token", payload.refreshToken);
			event.cookies.set("access_token", payload.accessToken);
		  }
		
	
}};
