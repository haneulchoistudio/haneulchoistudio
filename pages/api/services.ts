import type { NextApiRequest, NextApiResponse } from 'next';
import { middleware } from '~/middleware/services';

export default async function ServicesApiHandler(
    _req: NextApiRequest,
    res: NextApiResponse
) {
    const { services } = await middleware();

    return res
        .status(200)
        .json({ data: services && services.length > 0 ? services : null });
}
