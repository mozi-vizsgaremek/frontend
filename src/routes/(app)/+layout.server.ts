import { getUserRole } from "$lib/util";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (ev) => {
    const userRole = getUserRole(ev);
    
    if(userRole){
        ev.cookies.set('role',userRole);
    }

    const route: string = ev.route.id;
    if (!userRole && !(route == "/(single)/Login" || route == "/(single)/Registration")) {
        // user is not logged in
        throw redirect(302, "/Login");
    }

    return {
        role: userRole
    }
}