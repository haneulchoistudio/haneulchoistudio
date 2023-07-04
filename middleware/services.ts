import { get } from '@vercel/edge-config';
import type { Service } from 'types';

export const config = { matcher: '/' };

export async function middleware() {
    const services = await get<Service[]>('services');
    return { services };
}
