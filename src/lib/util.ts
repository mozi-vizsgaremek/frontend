import { browser } from "$app/environment";
import { baseUrl } from './config';
import type { RequestEvent, ServerLoadEvent } from "@sveltejs/kit";

export function getJwtPayload(token?: string): any|null {
    if (!token) return null;

    const parts = token.split('.');

    if (parts.length != 3)
        return null;

    const base64Payload = parts[1];
    const decoded = JSON.parse(Buffer.from(base64Payload, 'base64').toString('ascii'));

    return decoded;
}

export function getUserRole(ev: RequestEvent|ServerLoadEvent): "customer"|"employee"|"manager"|"admin"|null {
    const accessToken = ev.cookies.get('access_token');

    if (!accessToken) return null;
    
    const payload = getJwtPayload(accessToken);

    if (!payload) return null;

    return payload.role;
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

export async function authFetch(ev: RequestEvent|ServerLoadEvent, method: string, path: string, opts?: RequestInit): Promise<Response | null> {
    // browser can't access the httpOnly secure cookies
    if (browser) return null;

    const accessToken = ev.cookies.get('access_token');
    const accessExpired = isTokenExpired(accessToken);

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
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!resp.ok)
            return null;

        const respPayload = await resp.json();

        ev.cookies.set('access_token', respPayload['accessToken']);

        return authFetch(ev, method, path, opts);
    }

    return ev.fetch(`${baseUrl}${path}`, {
        method,
        headers: {
            ...opts?.headers,
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        ...opts
    });
}
