import type {
  NextApiRequest,
  NextApiResponse,
} from "next"

const SHOPIFY_STORE_DOMAIN =
  process.env
    .NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!

const SHOPIFY_STOREFRONT_TOKEN =
  process.env
    .NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method !== "POST") {

    return res.status(405).json({
      error:
        "Method not allowed.",
    })
  }

  try {

    const { email } = req.body

    if (!email) {

      return res.status(400).json({
        error:
          "Email is required.",
      })
    }

    console.log(
      "STORE DOMAIN:",
      SHOPIFY_STORE_DOMAIN
    )

    console.log(
      "TOKEN EXISTS:",
      !!SHOPIFY_STOREFRONT_TOKEN
    )

    const response =
      await fetch(
        `https://${SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "X-Shopify-Storefront-Access-Token":
              SHOPIFY_STOREFRONT_TOKEN,
          },

          body: JSON.stringify({
            query: `
              mutation customerRecover($email: String!) {

                customerRecover(email: $email) {

                  customerUserErrors {
                    message
                  }
                }
              }
            `,

            variables: {
              email,
            },
          }),
        }
      )

    const data =
      await response.json()

    console.log(
      "SHOPIFY RESPONSE:",
      JSON.stringify(
        data,
        null,
        2
      )
    )

    const errors =
      data?.data
        ?.customerRecover
        ?.customerUserErrors

    if (
      errors &&
      errors.length > 0
    ) {

      return res.status(400).json({
        error:
          errors[0].message,
      })
    }

    return res.status(200).json({
      success: true,
    })

  } catch (err: any) {

    console.error(
      "FULL ERROR:",
      err
    )

    return res.status(500).json({
      error:
        err.message ||
        "Internal server error.",
    })
  }
}