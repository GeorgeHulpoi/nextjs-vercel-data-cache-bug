export async function generateRandomV4() {
    let res;

    try {
        const url = new URL('/api/generate/v4', 'https://www.uuidtools.com');

        res = await fetch(url, {
            cache: 'force-cache',
            next: {
                tags: ['v4/a']
            }
        });
    } catch (err) {
        return undefined;
    }


    if (!res?.ok) {
        return undefined;
    }

    try {
        const json = await res.json();
        return json;
    } catch (err) {
        return undefined;
    }
}