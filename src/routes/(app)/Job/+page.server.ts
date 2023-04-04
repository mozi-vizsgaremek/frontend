import { getUserRole } from '$lib/util';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async (ev) => {
    const userRole = ev.cookies.get('role');


    return {
        role: userRole
    }
}