import type {
  NextApiRequest,
  NextApiResponse,
} from "next"

const tierDiscounts: Record<
  string,
  number
> = {
  "tier 1": 25,
  "tier 2": 35,
  "tier 3": 45,
  "tier 4": 50,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {

    const {
      customerAccessToken,
    } = req.body

    if (!customerAccessToken) {

      return res
        .status(400)
        .json({
          error:
            "Missing customer access token.",
        })
    }

    /* -------------------------------- */
    /* FETCH CUSTOMER */
    /* -------------------------------- */

    const customerResponse =
      await fetch(
        `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-01/graphql.json`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "X-Shopify-Storefront-Access-Token":
              process.env.SHOPIFY_STOREFRONT_TOKEN ||
              "",
          },

          body: JSON.stringify({
            query: `
              query customer(
                $customerAccessToken: String!
              ) {
                customer(
                  customerAccessToken:
                  $customerAccessToken
                ) {
                  firstName
                  email
                  tags
                }
              }
            `,

            variables: {
              customerAccessToken,
            },
          }),
        }
      )

    const customerData =
      await customerResponse.json()

    const customer =
      customerData?.data?.customer

    if (!customer) {

      return res
        .status(401)
        .json({
          error:
            "Customer not found.",
        })
    }

    const tags: string[] =
      customer.tags || []

    /* -------------------------------- */
    /* FIND MATCHED TIER */
    /* -------------------------------- */

    const matchedTier =
      tags.find(
        (tag) =>
          tierDiscounts[tag]
      )

    if (!matchedTier) {

      return res
        .status(403)
        .json({
          error:
            "Your account is not approved for wholesale access.",
        })
    }

    /* -------------------------------- */
    /* SUCCESS */
    /* -------------------------------- */

    return res.status(200).json({
      success: true,

      customer: {
        firstName:
          customer.firstName,

        email:
          customer.email,

        tags,
      },

      tier: matchedTier,

      discount:
        tierDiscounts[
          matchedTier
        ],
    })

  } catch (error) {

    console.error(
      "WHOLESALE ACCESS ERROR:",
      error
    )

    return res
      .status(500)
      .json({
        error:
          "Something went wrong.",
      })
  }
}