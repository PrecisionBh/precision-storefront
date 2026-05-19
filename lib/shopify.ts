const domain =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!

const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!

const endpoint =
  `https://${domain}/api/2025-04/graphql.json`

export async function shopifyFetch({
  query,
  variables = {},
}: {
  query: string
  variables?: any
}) {
  const result = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      "X-Shopify-Storefront-Access-Token":
        storefrontAccessToken,
    },

    body: JSON.stringify({
      query,
      variables,
    }),

    next: {
      revalidate: 60,
    },
  })

  return result.json()
}

/* ------------------------------------------------ */
/* ---------------- CREATE CART ------------------- */
/* ------------------------------------------------ */

export async function createCart() {
  const query = `
    mutation cartCreate {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `

  const response = await shopifyFetch({
    query,
  })

  return response.data.cartCreate.cart
}

/* ------------------------------------------------ */
/* ---------------- ADD TO CART ------------------- */
/* ------------------------------------------------ */

export async function addToCart(
  cartId: string,
  merchandiseId: string,
  quantity = 1,
  attributes: {
    key: string
    value: string
  }[] = []
) {
  const query = `
    mutation cartLinesAdd(
      $cartId: ID!,
      $lines: [CartLineInput!]!
    ) {
      cartLinesAdd(
        cartId: $cartId,
        lines: $lines
      ) {
        cart {
          id

          checkoutUrl

          totalQuantity

          lines(first: 20) {
            edges {
              node {
                id

                quantity
                attributes {
  key
  value
}

                merchandise {
                  ... on ProductVariant {
                    id

                    title

                    image {
                      url
                    }

                    product {
                      title
                    }

                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }

          cost {
            subtotalAmount {
              amount
              currencyCode
            }

            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `

  const variables = {
    cartId,

    lines: [
      {
        merchandiseId,
        quantity,
        attributes,
      },
    ],
  }

  const response = await shopifyFetch({
    query,
    variables,
  })

  return response.data.cartLinesAdd.cart
}

/* ------------------------------------------------ */
/* ---------------- GET CART ---------------------- */
/* ------------------------------------------------ */

export async function getCart(
  cartId: string
) {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id

        checkoutUrl

        totalQuantity

        lines(first: 20) {
          edges {
            node {
              id

              quantity
              attributes {
  key
  value
}

              merchandise {
                ... on ProductVariant {
                  id

                  title

                  image {
                    url
                  }

                  product {
                    title
                  }

                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }

        cost {
          subtotalAmount {
            amount
            currencyCode
          }

          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  `

  const response = await shopifyFetch({
    query,
    variables: {
      cartId,
    },
  })

  return response.data.cart
}

/* ------------------------------------------------ */
/* ------------- REMOVE FROM CART ----------------- */
/* ------------------------------------------------ */

export async function removeFromCart(
  cartId: string,
  lineId: string
) {
  const query = `
    mutation cartLinesRemove(
      $cartId: ID!,
      $lineIds: [ID!]!
    ) {
      cartLinesRemove(
        cartId: $cartId,
        lineIds: $lineIds
      ) {
        cart {
          id

          checkoutUrl

          totalQuantity

          lines(first: 20) {
            edges {
              node {
                id

                quantity
                attributes {
  key
  value
}

                merchandise {
                  ... on ProductVariant {
                    id

                    title

                    image {
                      url
                    }

                    product {
                      title
                    }

                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }

          cost {
            subtotalAmount {
              amount
              currencyCode
            }

            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `

  const response = await shopifyFetch({
    query,
    variables: {
      cartId,
      lineIds: [lineId],
    },
  })

  return response.data.cartLinesRemove.cart
}

/* ------------------------------------------------ */
/* ------------ UPDATE QUANTITY ------------------- */
/* ------------------------------------------------ */

export async function updateCartItem(
  cartId: string,
  lineId: string,
  quantity: number
) {
  const query = `
    mutation cartLinesUpdate(
      $cartId: ID!,
      $lines: [CartLineUpdateInput!]!
    ) {
      cartLinesUpdate(
        cartId: $cartId,
        lines: $lines
      ) {
        cart {
          id

          checkoutUrl

          totalQuantity

          lines(first: 20) {
            edges {
              node {
                id

                quantity
                attributes {
  key
  value
}

                merchandise {
                  ... on ProductVariant {
                    id

                    title

                    image {
                      url
                    }

                    product {
                      title
                    }

                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }

          cost {
            subtotalAmount {
              amount
              currencyCode
            }

            totalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `

  const response = await shopifyFetch({
    query,

    variables: {
      cartId,

      lines: [
        {
          id: lineId,
          quantity,
        },
      ],
    },
  })

  return response.data.cartLinesUpdate.cart
}