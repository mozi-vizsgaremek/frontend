import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "../routes/$types";

export function getJwtPayload(token: string): any {
    const parts = token.split('.');

    if (parts.length != 3)
        return null;

    const base64Payload = parts[1];
    const decoded = JSON.parse(Buffer.from(base64Payload, 'base64').toString('ascii'));

    return decoded;
}

export async function authFetch(ev: RequestEvent,path: string, opts: RequestInit): Promise<Response | null> {
    if (browser) return null;

    ev.cookies.get("")
    
}