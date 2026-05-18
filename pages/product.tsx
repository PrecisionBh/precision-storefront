import { useState } from "react"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"
import AddToCartButton from "@/components/AddToCartButton"

export default function ProductPage() {

  const [quantity, setQuantity] = useState(1)

  return (
    <main className="bg-[#111111] text-white min-h-screen">

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* PRODUCT */}
      <section className="bg-white text-black py-8 md:py-12">

        <LayoutContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT */}
            <div>

              {/* MAIN IMAGE */}
              <div className="aspect-[0.92] bg-[#F3F3F3] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Product"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* THUMBNAILS */}
              <div className="grid grid-cols-4 gap-3 mt-3">

                {[1,2,3,4].map((item) => (
                  <button
                    key={item}
                    className="aspect-square bg-[#F3F3F3] border border-black/10 overflow-hidden hover:border-[#D97732] transition"
                  >

                    <img
                      src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2070&auto=format&fit=crop"
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />

                  </button>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="max-w-[640px]">

              <p className="text-[#D97732] uppercase tracking-[5px] text-[11px] font-black mb-3">
                Apex Collection
              </p>

              <h1 className="text-[42px] md:text-[58px] leading-[0.92] font-black uppercase">
                Precision
                <br />
                Jersey
              </h1>

              <p className="text-[28px] font-black mt-5">
                $89.99
              </p>

              <p className="text-gray-600 text-[16px] leading-[1.9] mt-6">
                Premium competition jersey built for serious players. Lightweight breathable performance material with fully customizable front and back personalization.
              </p>

              {/* CUSTOMIZATION */}
              <div className="mt-8 space-y-5">

                {/* SIZE */}
                <div>

                  <p className="uppercase tracking-[3px] text-[11px] font-black mb-2">
                    Size
                  </p>

                  <select className="w-full border border-black/10 bg-[#F7F7F7] px-4 py-4 text-[15px] outline-none">

                    <option>Select Size</option>

                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>2XL</option>
                    <option>3XL</option>

                  </select>

                </div>

                {/* CUT */}
                <div>

                  <p className="uppercase tracking-[3px] text-[11px] font-black mb-2">
                    Cut
                  </p>

                  <select className="w-full border border-black/10 bg-[#F7F7F7] px-4 py-4 text-[15px] outline-none">

                    <option>Select Cut</option>

                    <option>Men's</option>
                    <option>Women's</option>

                  </select>

                </div>

                {/* FRONT NAME */}
                <div>

                  <p className="uppercase tracking-[3px] text-[11px] font-black mb-2">
                    Name On Front
                  </p>

                  <input
                    type="text"
                    placeholder="Enter Front Name"
                    className="w-full border border-black/10 bg-[#F7F7F7] px-4 py-4 text-[15px] outline-none"
                  />

                </div>

                {/* BACK NAME */}
                <div>

                  <p className="uppercase tracking-[3px] text-[11px] font-black mb-2">
                    Name On Back
                  </p>

                  <input
                    type="text"
                    placeholder="Enter Back Name"
                    className="w-full border border-black/10 bg-[#F7F7F7] px-4 py-4 text-[15px] outline-none"
                  />

                </div>

              </div>

              {/* QUANTITY */}
              <div className="mt-8">

                <p className="uppercase tracking-[3px] text-[11px] font-black mb-2">
                  Quantity
                </p>

                <div className="flex items-center border border-black/10 w-[150px]">

                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 text-xl font-bold hover:bg-[#F5F5F5] transition"
                  >
                    -
                  </button>

                  <div className="flex-1 text-center text-[16px] font-bold">
                    {quantity}
                  </div>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 text-xl font-bold hover:bg-[#F5F5F5] transition"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col gap-3 mt-8">

                <AddToCartButton
                  variantId="gid://shopify/ProductVariant/REPLACE_WITH_REAL_VARIANT_ID"
                />

                <button className="border border-black/10 hover:border-black transition py-4 uppercase tracking-[3px] text-[12px] font-black">
                  Buy Now
                </button>

              </div>

              {/* INFO */}
              <div className="mt-10 border-t border-black/10 pt-6 space-y-3 text-gray-600 text-[14px] leading-[1.8]">

                <p>
                  • Fully customizable front & back personalization
                </p>

                <p>
                  • Moisture-wicking performance fabric
                </p>

                <p>
                  • Premium athletic fit
                </p>

                <p>
                  • Made to order — estimated 3–4 week turnaround
                </p>

              </div>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}