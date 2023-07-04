export async function ssr<
    ResponseData extends object | unknown = unknown,
    RequestApiUrl extends string = string
>(endPoint: RequestApiUrl) {
    try {
        const url =
            process.env.NODE_ENV === 'development'
                ? `http://localhost:3000/api/${endPoint}`
                : `https://haneulchoi.studio/api/${endPoint}`;
        const response = await fetch(url);
        const { data } = (await response.json()) as { data: ResponseData };
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.name);
            console.log(error.message);
        }
        return null;
    }
}
