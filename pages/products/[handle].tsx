import { useState } from "react"

import type {
  GetServerSideProps,
} from "next"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"
import AddToCartButton from "@/components/AddToCartButton"

import { shopifyFetch } from "@/lib/shopify"
import { getProductByHandleQuery } from "@/lib/queries"

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

  const [quantity, setQuantity] =
    useState(1)

  const variant =
    product?.variants?.edges?.[0]?.node

  return (
    <main className="bg-[#111111] text-white min-h-screen">

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      <div className="h-[104px] md:h-[124px]" />

      {/* PRODUCT */}
      <section className="bg-white text-black py-8 md:py-12">

        <LayoutContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT */}
            <div>

              {/* MAIN IMAGE */}
              <div className="aspect-[0.92] bg-[#F3F3F3] overflow-hidden rounded-2xl">

                <img
                  src={
                    product?.featuredImage?.url
                  }
                  alt={product?.title}
                  className="w-full h-full object-contain p-6 md:p-10"
                />

              </div>

              {/* THUMBNAILS */}
              <div className="grid grid-cols-4 gap-3 mt-3">

                {product?.images?.edges?.map(
                  ({ node }: any, i: number) => (
                    <button
                      key={i}
                      className="aspect-square bg-[#F3F3F3] border border-black/10 overflow-hidden hover:border-[#D97732] transition rounded-xl"
                    >

                      <img
                        src={node.url}
                        alt={product.title}
                        className="w-full h-full object-contain p-2"
                      />

                    </button>
                  )
                )}

              </div>

            </div>

            {/* RIGHT */}
            <div className="max-w-[640px]">

              <p className="text-[#D97732] uppercase tracking-[5px] text-[11px] font-black mb-3">
                {product?.productType}
              </p>

              <h1 className="text-[42px] md:text-[58px] leading-[0.92] font-black uppercase">
                {product?.title}
              </h1>

              <p className="text-[28px] font-black mt-5">
                $
                {Math.round(
                  Number(
                    variant?.price?.amount
                  )
                )}
              </p>

              <p className="text-gray-600 text-[16px] leading-[1.9] mt-6 whitespace-pre-line">
                {product?.description}
              </p>

              {/* QUANTITY */}
              <div className="mt-8">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-2">
                  Quantity
                </p>

                <div className="flex items-center border border-black/10 w-[150px]">

                  <button
                    onClick={() =>
                      setQuantity(
                        Math.max(
                          1,
                          quantity - 1
                        )
                      )
                    }
                    className="w-12 h-12 text-xl font-bold hover:bg-[#F5F5F5] transition"
                  >
                    -
                  </button>

                  <div className="flex-1 text-center text-[16px] font-bold">
                    {quantity}
                  </div>

                  <button
                    onClick={() =>
                      setQuantity(
                        quantity + 1
                      )
                    }
                    className="w-12 h-12 text-xl font-bold hover:bg-[#F5F5F5] transition"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col gap-3 mt-8">

                {variant?.id && (
                  <AddToCartButton
                    variantId={variant.id}
                  />
                )}

              </div>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}