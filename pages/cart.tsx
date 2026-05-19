import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import {
  FiMinus,
  FiPlus,
  FiTrash2,
} from "react-icons/fi"

import { useCart }
from "@/context/CartContext"

export default function CartPage() {

  const {
    cart,
    removeItem,
    updateQuantity,
    checkout,
  } = useCart()

  const cartItems =
    cart?.lines?.edges || []

  const subtotal =
    cart?.cost?.subtotalAmount?.amount

  return (
    <main className="bg-[#111111] text-white min-h-screen">

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* HERO */}
      <section className="bg-black border-b border-white/10">

        <LayoutContainer>

          <div className="py-10 md:py-20">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-3 md:mb-4">
              Precision Checkout
            </p>

            <h1 className="text-[38px] md:text-[90px] leading-[0.9] font-black uppercase">
              Your Cart
            </h1>

            <p className="text-gray-400 text-sm md:text-xl mt-4 md:mt-5">
              Confidence Starts Here
            </p>

          </div>

        </LayoutContainer>

      </section>

      {/* CONTENT */}
      <section className="bg-[#F7F7F7] text-black py-6 md:py-20 pb-[120px] xl:pb-20">

        <LayoutContainer>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6 md:gap-14">

            {/* LEFT */}
            <div className="space-y-4 md:space-y-6">

              {cartItems.length === 0 && (
                <div className="bg-white rounded-2xl p-10 text-center">

                  <h2 className="text-3xl font-black uppercase">
                    Your Cart Is Empty
                  </h2>

                </div>
              )}

              {cartItems.map(
                ({ node }: any) => {

                  const merchandise =
                    node.merchandise

                  const product =
                    merchandise.product

                  const quantity =
                    node.quantity

                  return (
                    <div
                      key={node.id}
                      className="bg-white rounded-2xl p-3 md:p-5 shadow-sm"
                    >

                      <div className="flex gap-4">

                        {/* IMAGE */}
                        <div className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] overflow-hidden rounded-2xl bg-[#F3F3F3] flex-shrink-0">

                          <img
                            src={
                              merchandise?.image?.url
                            }
                            alt={product?.title}
                            className="w-full h-full object-contain p-3"
                          />

                        </div>

                        {/* INFO */}
                        <div className="flex-1 min-w-0 flex flex-col justify-between">

                          <div>

                            <p className="uppercase tracking-[2px] text-[9px] md:text-[10px] text-[#D97732] font-black mb-1 md:mb-2">
                              {product?.productType}
                            </p>

                            <h2 className="text-[18px] md:text-[26px] leading-[1.05] font-black uppercase break-words">
                              {product?.title}
                            </h2>
                            
                            {/* VARIANT */}
{merchandise?.title !== "Default Title" && (
  <p className="text-[11px] md:text-[12px] uppercase tracking-[2px] text-gray-500 font-bold mt-2">
    {merchandise?.title}
  </p>
)}

{/* CUSTOM ATTRIBUTES */}
{Array.isArray(node?.attributes) &&
  node.attributes.length > 0 && (

  <div className="mt-3 space-y-1">

    {node.attributes.map(
      (attribute: any) => {

        if (!attribute?.value)
          return null

        return (
          <p
            key={attribute.key}
            className="text-[12px] text-gray-600 uppercase tracking-[1px]"
          >
            <span className="font-black">
              {attribute.key}:
            </span>{" "}
            {attribute.value}
          </p>
        )
      }
    )}

  </div>
)}

                            
                     

                            <p className="text-[20px] md:text-[28px] font-black mt-2 md:mt-3">
                              $
                              {Math.round(
                                Number(
                                  merchandise?.price?.amount
                                )
                              )}
                            </p>

                          </div>

                          {/* ACTIONS */}
                          <div className="flex items-center justify-between gap-3 mt-4 md:mt-5 flex-wrap">

                            {/* QUANTITY */}
                            <div className="flex items-center border border-black/10 rounded-xl overflow-hidden w-fit">

                              <button
                                onClick={() => {

                                  if (
                                    quantity <= 1
                                  ) {
                                    removeItem(
                                      node.id
                                    )

                                    return
                                  }

                                  updateQuantity(
                                    node.id,
                                    quantity - 1
                                  )
                                }}
                                className="w-[42px] h-[42px] flex items-center justify-center hover:bg-black/5 transition"
                              >
                                <FiMinus size={16} />
                              </button>

                              <div className="w-[42px] h-[42px] flex items-center justify-center font-black text-sm md:text-base">
                                {quantity}
                              </div>

                              <button
                                onClick={() =>
                                  updateQuantity(
                                    node.id,
                                    quantity + 1
                                  )
                                }
                                className="w-[42px] h-[42px] flex items-center justify-center hover:bg-black/5 transition"
                              >
                                <FiPlus size={16} />
                              </button>

                            </div>

                            {/* REMOVE */}
                            <button
                              onClick={() =>
                                removeItem(node.id)
                              }
                              className="flex items-center gap-2 text-red-500 font-semibold hover:opacity-70 transition text-sm"
                            >

                              <FiTrash2 size={16} />

                              Remove

                            </button>

                          </div>

                        </div>

                      </div>

                    </div>
                  )
                }
              )}

            </div>

            {/* RIGHT */}
            <div>

              <div className="bg-white rounded-2xl p-5 md:p-7 sticky top-[140px] shadow-sm">

                <p className="text-[#D97732] uppercase tracking-[2px] md:tracking-[3px] text-[10px] md:text-[11px] font-black mb-3 md:mb-4">
                  Order Summary
                </p>

                <h2 className="text-[28px] md:text-[42px] font-black uppercase leading-none">
                  Summary
                </h2>

                {/* TOTALS */}
                <div className="mt-7 md:mt-10 space-y-4 md:space-y-5">

                  <div className="flex items-center justify-between text-gray-600 text-sm md:text-lg">
                    <span>Subtotal</span>

                    <span>
                      $
                      {Math.round(
                        Number(subtotal || 0)
                      )}
                    </span>

                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-sm md:text-lg">
                    <span>Shipping</span>
                    <span>Calculated At Checkout</span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-sm md:text-lg">
                    <span>Taxes</span>
                    <span>Calculated At Checkout</span>
                  </div>

                </div>

                {/* TOTAL */}
                <div className="border-t border-black/10 mt-6 md:mt-8 pt-6 md:pt-8 flex items-center justify-between">

                  <span className="text-[16px] md:text-[22px] font-bold">
                    Total
                  </span>

                  <span className="text-[28px] md:text-[42px] font-black">
                    $
                    {Math.round(
                      Number(subtotal || 0)
                    )}
                  </span>

                </div>

                {/* BUTTON */}
                <button
                  onClick={checkout}
                  className="w-full h-[54px] md:h-[64px] bg-[#D97732] hover:opacity-90 transition rounded-2xl uppercase tracking-[2px] md:tracking-[3px] text-[11px] md:text-sm font-black text-white mt-7 md:mt-10"
                >
                  Proceed To Checkout
                </button>

                {/* TRUST */}
                <div className="mt-6 md:mt-8 space-y-2 md:space-y-3 text-[12px] md:text-sm text-gray-500">

                  <p>✔ Secure Checkout</p>
                  <p>✔ UPS Shipping</p>
                  <p>✔ Protected Payments</p>

                </div>

              </div>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* MOBILE STICKY CHECKOUT */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-4 z-50">

        <div className="flex items-center gap-4">

          <div className="flex-1">

            <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
              Total
            </p>

            <p className="text-xl font-black">
              $
              {Math.round(
                Number(subtotal || 0)
              )}
            </p>

          </div>

          <button
            onClick={checkout}
            className="h-[52px] px-6 bg-[#D97732] rounded-2xl uppercase tracking-[2px] text-[11px] font-black"
          >
            Checkout
          </button>

        </div>

      </div>

      <Footer />

    </main>
  )
}