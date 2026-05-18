import Link from "next/link"

import AddToCartButton from "@/components/AddToCartButton"
import BuyNowButton from "@/components/BuyNowButton"

type Props = {
  image?: string
  title: string
  price: string
  subtitle?: string
  badge?: string
  handle?: string
  variantId?: string
  availableForSale?: boolean
}

export default function ProductCard({
  image,
  title,
  price,
  subtitle,
  badge,
  handle,
  variantId,
  availableForSale,
}: Props) {

  const isSoldOut =
    availableForSale === false

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex flex-col h-full">

      {/* PRODUCT LINK */}
      <Link
        href={
          handle
            ? `/products/${handle}`
            : "/product"
        }
        className="block"
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden bg-white aspect-[0.82]">

          {image && (
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-full
                object-contain
                p-6
                md:p-8
                group-hover:scale-[1.03]
                transition
                duration-700
              "
            />
          )}

          {/* SOLD OUT */}
          {isSoldOut && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">

              <div className="bg-black/85 px-8 py-4 rounded-2xl border border-white/10 shadow-2xl">

                <p className="text-white uppercase tracking-[5px] text-lg md:text-2xl font-black">
                  Sold Out
                </p>

              </div>

            </div>
          )}

          {/* BADGE */}
          {badge && (
            <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-[#D97732] text-white px-3 md:px-4 py-1.5 md:py-2 text-[9px] md:text-[10px] uppercase tracking-[2px] md:tracking-[3px] font-black rounded-lg z-30">
              {badge}
            </div>
          )}

        </div>

      </Link>

      {/* INFO */}
      <div className="pt-4 md:pt-6 px-5 md:px-6 pb-5 md:pb-6 flex flex-col flex-1">

        {subtitle && (
          <p className="text-[#D97732] uppercase tracking-[2px] md:tracking-[4px] text-[10px] md:text-xs font-black mb-2 md:mb-3">
            {subtitle}
          </p>
        )}

        <Link
          href={
            handle
              ? `/products/${handle}`
              : "/product"
          }
        >

          <h3 className="text-[20px] md:text-[28px] leading-[1.1] font-black uppercase text-black group-hover:text-[#D97732] transition break-words">
            {title}
          </h3>

        </Link>

        <p className="text-[20px] md:text-[24px] font-black text-black mt-3 md:mt-5">
          {price}
        </p>

        <div className="flex-1" />

        {/* BUTTONS */}
        {!isSoldOut &&
          handle !== "precision-jerseys" && (
          <div className="flex flex-col gap-3 mt-5">

            {variantId && (
              <AddToCartButton
                variantId={variantId}
              />
            )}

            {variantId && (
              <BuyNowButton
                variantId={variantId}
              />
            )}

          </div>
        )}

      </div>

    </div>
  )
}