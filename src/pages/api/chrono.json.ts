import type { APIRoute } from "astro"
import * as chrono from "chrono-node"

export const post: APIRoute = async ({ request }) => {
    const body = await request.json()

    if (body.time) {
        const text = chrono.parse(body.time)
        try {
            const result = chrono.parseDate(text[0].text)

            return {
                body: JSON.stringify({
                    message: "Success loaded time",
                    text_original: text[0].text,
                    result: result,
                }),
            }
        } catch (error) {
            console.log(error)
        }
    }

    return new Response(null, { status: 400 })
}
