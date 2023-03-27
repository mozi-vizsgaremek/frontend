import { browser } from "$app/environment";
import { baseUrl } from './config';
import type { RequestEvent } from "../routes/$types";

export function getJwtPayload(token?: string): any|null {
    if (!token) return null;

    const parts = token.split('.');

    if (parts.length != 3)
        return null;

    const base64Payload = parts[1];
    const decoded = JSON.parse(Buffer.from(base64Payload, 'base64').toString('ascii'));

    return decoded;
}

// TODO: better error reporting (returning null for everything is not that great)
export function isTokenExpired(token?: string): boolean|null {
    if (!token) return null;

    const payload = getJwtPayload(token);

    if (!payload) return null;

    const exp: number = payload.exp; // expiry is a unix timestamp with second precision
    const currTime = Math.trunc((new Date()).getTime() / 1000) // convert ms -> s

    return currTime > exp;
}

export async function authFetch(ev: RequestEvent, path: string, opts: RequestInit): Promise<Response | null> {
    // browser can't access the httpOnly secure cookies
    if (browser) return null;

    const accessExpired = isTokenExpired(ev.cookies.get('access_token'));

    if (accessExpired) {
        // attempt to refresh access token
        const refreshToken = ev.cookies.get('refresh_token');

        if (!refreshToken)
            // NOTE: user is not logged in
            return null;


        const resp = await ev.fetch(`${baseUrl}/auth/refresh`, {
            method: 'POST',
            body: JSON.stringify({
                refreshToken
            })
        });

        if (!resp.ok)
            return null;

        const respPayload = await resp.json();

        ev.cookies.set('access_token', respPayload['accessToken']);

        return authFetch(ev, path, opts);
    }

    return ev.fetch(`${baseUrl}${path}`, opts);
}
