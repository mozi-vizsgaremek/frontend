import { redirect, type ServerLoad } from "@sveltejs/kit";

export const load: ServerLoad = async(ev) => {
    ev.cookies.delete("access_token");
    ev.cookies.delete("refresh_token");

    throw redirect(302, "/Login");
}