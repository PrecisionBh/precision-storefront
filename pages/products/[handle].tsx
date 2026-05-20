import type {
  GetServerSideProps,
} from "next"

import { shopifyFetch } from "@/lib/shopify"
import { getProductByHandleQuery } from "@/lib/queries"

import JerseyProduct from "@/components/products/JerseyProduct"
import ApparelProduct from "@/components/products/ApparelProduct"
import GloveProduct from "@/components/products/GloveProduct"
import DefaultProduct from "@/components/products/DefaultProduct"

export const getServerSideProps:
GetServerSideProps = async ({
  params,
}) => {

  const handle =
    params?.handle as string

  const response =
    await shopifyFetch({
      query:
        getProductByHandleQuery,

      variables: {
        handle,
      },
    })

  const product =
    response.data.product

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product,
    },
  }
}

export default function ProductPage({
  product,
}: any) {

  if (
    product?.productType ===
    "Jerseys"
  ) {
    return (
      <JerseyProduct
        product={product}
      />
    )
  }

  if (
    product?.productType ===
    "Apparel"
  ) {
    return (
      <ApparelProduct
        product={product}
      />
    )
  }

  if (
    product?.productType ===
    "gloves"
  ) {
    return (
      <GloveProduct
        product={product}
      />
    )
  }

  return (
    <DefaultProduct
      product={product}
    />
  )
}