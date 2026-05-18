export const getCollectionProductsQuery = `
query getCollectionProducts($handle: String!) {

  collection(handle: $handle) {

    id
    title

    products(first: 20) {

      edges {

        node {

          id
          title
          handle
          productType
          description

          featuredImage {
            url
          }

          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }

          variants(first: 20) {
            edges {
              node {
                id
                title
                availableForSale
              }
            }
          }
        }
      }
    }
  }
}
`

export const getProductByHandleQuery = `
query getProduct($handle: String!) {

  product(handle: $handle) {

    id
    title
    handle
    description
    productType

    featuredImage {
      url
    }

    images(first: 20) {
      edges {
        node {
          url
        }
      }
    }

    variants(first: 20) {
      edges {
        node {
          id
          title
          availableForSale

          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`