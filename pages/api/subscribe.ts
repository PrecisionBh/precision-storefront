import type {
  NextApiRequest,
  NextApiResponse,
} from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {

    return res.status(405).json({
      error: "Method not allowed",
    })
  }

  try {

    const { email } = req.body

    if (!email) {

      return res.status(400).json({
        error: "Email required",
      })
    }

    const response = await fetch(

      "https://a.klaviyo.com/api/profiles/",

      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Klaviyo-API-Key ${process.env.KLAVIYO_PRIVATE_API_KEY}`,

          revision: "2024-02-15",
        },

        body: JSON.stringify({

          data: {

            type: "profile",

            attributes: {

              email,

              properties: {
                source:
                  "Precision Website Popup",
              },
            },
          },
        }),
      }
    )

    const data =
      await response.json()

    console.log(
      "KLAVIYO RESPONSE:",
      data
    )

    if (!response.ok) {

      return res.status(400).json({
        error: data,
      })
    }

    return res.status(200).json({
      success: true,
    })

  } catch (err) {

    console.error(err)

    return res.status(500).json({
      error:
        "Something went wrong",
    })
  }
}