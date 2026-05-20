import { useState } from "react"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import { useCart } from "@/context/CartContext"
import {
  useWholesale,
} from "@/context/WholesaleContext"

import {
  getOptionValue,
  getUniqueOptions,
  findVariant,
  isOptionAvailable,
} from "@/lib/variants"

export default function ApparelProduct({
  product,
}: any) {

  const { addItem } =
    useCart()

    const {
  isWholesale,
  getWholesalePrice,
  tier,
} = useWholesale()

  const variants =
    product?.variants?.edges || []

  const [selectedVariant, setSelectedVariant] =
    useState(
      variants?.[0]?.node || null
    )

  const [quantity, setQuantity] =
    useState(1)

  /* ------------------------------------ */
  /* OPTIONS */
  /* ------------------------------------ */

  const optionNames =
    variants?.[0]?.node?.selectedOptions?.map(
      (option: any) =>
        option.name
    ) || []

  const colorOptionName =
    optionNames.find(
      (name: string) =>
        name.toLowerCase().includes(
          "color"
        )
    ) || optionNames[0]

  const sizeOptionName =
    optionNames.find(
      (name: string) =>
        name.toLowerCase().includes(
          "size"
        )
    ) || optionNames[1]

  const colors =
    getUniqueOptions(
      variants,
      colorOptionName
    )

  const sizes =
    getUniqueOptions(
      variants,
      sizeOptionName
    )

  const [selectedColor, setSelectedColor] =
    useState<string>(
      colors[0] || ""
    )

  const [selectedSize, setSelectedSize] =
    useState<string>(
      sizes[0] || ""
    )

  /* ------------------------------------ */
  /* HELPERS */
  /* ------------------------------------ */

  const getVariant = (
    color: string,
    size: string
  ) => {

    return findVariant(
      variants,
      {
        [colorOptionName]:
          color,

        [sizeOptionName]:
          size,
      }
    )
  }

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
                    selectedVariant?.image?.url ||
                    product?.featuredImage?.url
                  }
                  alt={product?.title}
                  className="w-full h-full object-contain p-6 md:p-10"
                />

              </div>

              {/* THUMBNAILS */}
              <div className="grid grid-cols-4 gap-3 mt-3">

                {product?.images?.edges?.map(
                  (
                    { node: imageNode }: any,
                    i: number
                  ) => (

                    <button
                      key={i}
                      onClick={() => {

                        const matchedVariant =
                          variants.find(
                            ({
                              node: variantNode,
                            }: any) =>
                              variantNode?.image?.url ===
                              imageNode.url
                          )

                        if (matchedVariant) {

                          setSelectedVariant(
                            matchedVariant.node
                          )

                          const colorOption =
                            getOptionValue(
                              matchedVariant.node,
                              colorOptionName
                            )

                          const sizeOption =
                            getOptionValue(
                              matchedVariant.node,
                              sizeOptionName
                            )

                          if (colorOption) {
                            setSelectedColor(
                              colorOption
                            )
                          }

                          if (sizeOption) {
                            setSelectedSize(
                              sizeOption
                            )
                          }
                        }
                      }}
                      className={`
                        aspect-square
                        bg-[#F3F3F3]
                        border
                        overflow-hidden
                        transition
                        rounded-xl
                        ${
                          selectedVariant?.image?.url ===
                          imageNode.url
                            ? "border-[#D97732]"
                            : "border-black/10 hover:border-[#D97732]"
                        }
                      `}
                    >

                      <img
                        src={imageNode.url}
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

              {/* PRICE */}
<div className="mt-5">

  {isWholesale ? (

    <>

      <p className="text-[32px] md:text-[38px] font-black text-[#D97732]">

        $

        {getWholesalePrice(
          Number(
            selectedVariant?.price?.amount
          )
        )}

      </p>

      <div className="flex items-center gap-3 mt-2">

        <p className="text-lg text-gray-400 line-through font-semibold">

          $

          {Math.round(
            Number(
              selectedVariant?.price?.amount
            )
          )}

        </p>

        <p className="text-[10px] uppercase tracking-[2px] font-black text-[#D97732]">
          {tier}
        </p>

      </div>

    </>

  ) : (

    <p className="text-[28px] font-black">

      $

      {Math.round(
        Number(
          selectedVariant?.price?.amount
        )
      )}

    </p>

  )}

</div>

              <p className="text-gray-600 text-[16px] leading-[1.9] mt-6 whitespace-pre-line">
                {product?.description}
              </p>

              {/* COLOR */}
              <div className="mt-8">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-3">
                  Color
                </p>

                <div className="flex flex-wrap gap-3">

                  {colors.map(
                    (color: string) => {

                      const active =
                        selectedColor === color

                      const available =
                        isOptionAvailable(
                          variants,
                          colorOptionName,
                          color
                        )

                      return (
                        <button
                          key={color}
                          onClick={() => {

                            if (!available) return

                            setSelectedColor(
                              color
                            )

                            const matchedVariant =
                              getVariant(
                                color,
                                selectedSize
                              )

                            if (matchedVariant) {
                              setSelectedVariant(
                                matchedVariant.node
                              )
                            }
                          }}
                          className={`
                            px-5
                            py-3
                            rounded-full
                            border
                            uppercase
                            tracking-[2px]
                            text-[11px]
                            font-black
                            transition
                            ${
                              !available
                                ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                                : active
                                  ? "bg-[#D97732] text-white border-[#D97732]"
                                  : "bg-[#F7F7F7] border-black/10 hover:border-[#D97732]"
                            }
                          `}
                        >
                          {color}
                        </button>
                      )
                    }
                  )}

                </div>

              </div>

              {/* SIZE */}
              <div className="mt-8">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-3">
                  Size
                </p>

                <div className="flex flex-wrap gap-3">

                  {sizes.map(
                    (size: string) => {

                      const active =
                        selectedSize === size

                      const available =
                        isOptionAvailable(
                          variants,
                          sizeOptionName,
                          size
                        )

                      return (
                        <button
                          key={size}
                          onClick={() => {

                            if (!available) return

                            setSelectedSize(
                              size
                            )

                            const matchedVariant =
                              getVariant(
                                selectedColor,
                                size
                              )

                            if (matchedVariant) {
                              setSelectedVariant(
                                matchedVariant.node
                              )
                            }
                          }}
                          className={`
                            min-w-[72px]
                            px-4
                            py-3
                            rounded-full
                            border
                            uppercase
                            tracking-[2px]
                            text-[11px]
                            font-black
                            transition
                            ${
                              !available
                                ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                                : active
                                  ? "bg-[#D97732] text-white border-[#D97732]"
                                  : "bg-[#F7F7F7] border-black/10 hover:border-[#D97732]"
                            }
                          `}
                        >
                          {size}
                        </button>
                      )
                    }
                  )}

                </div>

              </div>

              {/* QUANTITY */}
              <div className="mt-8">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-2">
                  Quantity
                </p>

                <div className="flex items-center border border-black/10 w-[150px] rounded-xl overflow-hidden">

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

              {/* BUTTON */}
              <div className="flex flex-col gap-3 mt-8">

                {selectedVariant?.id && (

                  <button
                    disabled={
                      !selectedVariant?.availableForSale
                    }
                    onClick={() => {

                      if (
                        !selectedVariant?.availableForSale
                      ) return

                      addItem(
                        selectedVariant.id,
                        quantity
                      )
                    }}
                    className={`
                      text-white
                      font-bold
                      uppercase
                      tracking-[2px]
                      px-8
                      py-4
                      rounded-full
                      transition
                      ${
                        selectedVariant?.availableForSale
                          ? "bg-[#D97732] hover:bg-[#c96d2d]"
                          : "bg-gray-400 cursor-not-allowed"
                      }
                    `}
                  >
                    {selectedVariant?.availableForSale
                      ? "Add To Cart"
                      : "Sold Out"}
                  </button>

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