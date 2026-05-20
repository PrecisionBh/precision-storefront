import type {
  NextApiRequest,
  NextApiResponse,
} from "next"

const tierDiscounts: Record<
  string,
  number
> = {
  "Tier 1": 25,
  "Tier 2": 35,
  "Tier 3": 45,
  "Tier 4": 50,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  try {

    const {
      email,
      password,
    } = req.body

    if (!email || !password) {

      return res.status(400).json({
        error:
          "Missing email or password.",
      })
    }

    /* -------------------------------- */
    /* LOGIN CUSTOMER */
    /* -------------------------------- */

    const loginResponse =
      await fetch(
        `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2025-04/graphql.json`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "X-Shopify-Storefront-Access-Token":
              process.env
                .NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "",
          },

          body: JSON.stringify({
            query: `
              mutation customerAccessTokenCreate(
                $input: CustomerAccessTokenCreateInput!
              ) {
                customerAccessTokenCreate(
                  input: $input
                ) {

                  customerAccessToken {
                    accessToken
                    expiresAt
                  }

                  customerUserErrors {
                    message
                  }
                }
              }
            `,

            variables: {
              input: {
                email,
                password,
              },
            },
          }),
        }
      )

    const loginData =
      await loginResponse.json()

      console.log(
  "LOGIN DATA:",
  JSON.stringify(loginData, null, 2)
)

    const loginResult =
      loginData?.data
        ?.customerAccessTokenCreate

    if (
      loginResult?.customerUserErrors
        ?.length
    ) {

      return res.status(401).json({
        error:
          loginResult
            .customerUserErrors[0]
            .message,
      })
    }

    const accessToken =
      loginResult
        .customerAccessToken
        .accessToken

    /* -------------------------------- */
    /* FETCH CUSTOMER */
    /* -------------------------------- */

    const customerResponse =
      await fetch(
        `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2025-04/graphql.json`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            "X-Shopify-Storefront-Access-Token":
              process.env
                .NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || "",
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
              customerAccessToken:
                accessToken,
            },
          }),
        }
      )

    const customerData =
      await customerResponse.json()

      console.log(
  "CUSTOMER DATA:",
  JSON.stringify(customerData, null, 2)
)

    const customer =
      customerData?.data?.customer
      console.log(
  "CUSTOMER DATA:",
  JSON.stringify(customerData, null, 2)
)

    if (!customer) {

      return res.status(401).json({
        error:
          "Customer not found.",
      })
    }

    const tags: string[] =
      customer.tags || []

    /* -------------------------------- */
    /* CHECK WHOLESALE TAGS */
    /* -------------------------------- */

    const matchedTier =
      tags.find(
        (tag) =>
          tierDiscounts[tag]
      )

    if (!matchedTier) {

      return res.status(403).json({
        error:
          "Your account is not approved for wholesale access.",
      })
    }

    /* -------------------------------- */
    /* SUCCESS */
    /* -------------------------------- */

    return res.status(200).json({
      success: true,

      accessToken,

      customer: {
        firstName:
          customer.firstName,

        email:
          customer.email,

        tags,
      },

      tier:
        matchedTier,

      discount:
        tierDiscounts[
          matchedTier
        ],
    })

  } catch (error) {

    console.error(
      "CUSTOMER LOGIN ERROR:",
      error
    )

    return res.status(500).json({
      error:
        "Something went wrong.",
    })
  }
}