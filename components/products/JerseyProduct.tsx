import { useState } from "react"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import { useCart } from "@/context/CartContext"

export default function JerseyProduct({
  product,
}: any) {

  const { addItem } =
    useCart()

  const variants =
    product?.variants?.edges || []

  const [selectedVariant, setSelectedVariant] =
    useState(
      variants?.[0]?.node || null
    )

  const [quantity, setQuantity] =
    useState(1)

  const [selectedCut, setSelectedCut] =
    useState("FEMALE")

  const [selectedSize, setSelectedSize] =
    useState("M")

  const [frontName, setFrontName] =
    useState("")

  const [backName, setBackName] =
    useState("")

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

              <p className="text-[28px] font-black mt-5">

                $

                {Math.round(
                  Number(
                    selectedVariant?.price?.amount
                  )
                )}

              </p>

              <p className="text-gray-600 text-[16px] leading-[1.9] mt-6 whitespace-pre-line">
                {product?.description}
              </p>

              {/* SHIRT CUT */}
              <div className="mt-8">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-3">
                  Shirt Cut
                </p>

                <div className="flex flex-wrap gap-3">

                  {["FEMALE", "MALE"].map(
                    (cut) => {

                      const active =
                        selectedCut === cut

                      return (
                        <button
                          key={cut}
                          onClick={() => {

                            setSelectedCut(cut)

                            const matchedVariant =
                              variants.find(
                                ({ node }: any) =>
                                  node.title ===
                                  `${selectedSize} / ${cut}`
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
                              active
                                ? "bg-[#D97732] text-white border-[#D97732]"
                                : "bg-[#F7F7F7] border-black/10 hover:border-[#D97732]"
                            }
                          `}
                        >
                          {cut}
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

                  {[
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "2XL",
                    "3XL",
                    "4XL",
                    "5XL",
                    "6XL",
                  ].map((size) => {

                    const active =
                      selectedSize === size

                    return (
                      <button
                        key={size}
                        onClick={() => {

                          setSelectedSize(size)

                          const matchedVariant =
                            variants.find(
                              ({ node }: any) =>
                                node.title ===
                                `${size} / ${selectedCut}`
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
                            active
                              ? "bg-[#D97732] text-white border-[#D97732]"
                              : "bg-[#F7F7F7] border-black/10 hover:border-[#D97732]"
                          }
                        `}
                      >
                        {size}
                      </button>
                    )
                  })}

                </div>

              </div>

              {/* FRONT NAME */}
              <div className="mt-8">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-3">
                  Name On Front
                </p>

                <input
                  type="text"
                  value={frontName}
                  onChange={(e) =>
                    setFrontName(
                      e.target.value
                    )
                  }
                  placeholder="Enter Front Name"
                  maxLength={14}
                  className="
                    w-full
                    h-[58px]
                    rounded-2xl
                    border
                    border-black/10
                    bg-[#F7F7F7]
                    px-5
                    text-[15px]
                    outline-none
                    focus:border-[#D97732]
                  "
                />

              </div>

              {/* BACK NAME */}
              <div className="mt-5">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-3">
                  Name On Back
                </p>

                <input
                  type="text"
                  value={backName}
                  onChange={(e) =>
                    setBackName(
                      e.target.value
                    )
                  }
                  placeholder="Enter Back Name"
                  maxLength={18}
                  className="
                    w-full
                    h-[58px]
                    rounded-2xl
                    border
                    border-black/10
                    bg-[#F7F7F7]
                    px-5
                    text-[15px]
                    outline-none
                    focus:border-[#D97732]
                  "
                />

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
                    onClick={() =>
                      addItem(
                        selectedVariant.id,
                        quantity,
                        [
                          ...(frontName
                            ? [
                                {
                                  key: "Front Name",
                                  value: frontName,
                                },
                              ]
                            : []),

                          ...(backName
                            ? [
                                {
                                  key: "Back Name",
                                  value: backName,
                                },
                              ]
                            : []),
                        ]
                      )
                    }
                    className="
                      bg-[#D97732]
                      hover:bg-[#c96d2d]
                      transition
                      text-white
                      font-bold
                      uppercase
                      tracking-[2px]
                      px-8
                      py-4
                      rounded-full
                    "
                  >
                    Add To Cart
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