import Link from "next/link"

type Props = {
  image?: string
  title: string
  price: string
  subtitle?: string
  badge?: string
  handle?: string
  variantId?: string
}

export default function ProductCard({
  image,
  title,
  price,
  subtitle,
  badge,
  handle,
}: Props) {

  return (
    <Link
      href={
        handle
          ? `/products/${handle}`
          : "/product"
      }
      className="group block"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden bg-white aspect-[0.82] rounded-2xl">

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-6 md:p-8 group-hover:scale-[1.04] transition duration-700"
          />
        )}

        {/* BADGE */}
        {badge && (
          <div className="absolute top-3 left-3 md:top-5 md:left-5 bg-[#D97732] text-white px-3 md:px-4 py-1.5 md:py-2 text-[9px] md:text-[10px] uppercase tracking-[2px] md:tracking-[3px] font-black rounded-lg">
            {badge}
          </div>
        )}

      </div>

      {/* INFO */}
      <div className="pt-4 md:pt-6">

        {subtitle && (
          <p className="text-[#D97732] uppercase tracking-[2px] md:tracking-[4px] text-[10px] md:text-xs font-black mb-2 md:mb-3">
            {subtitle}
          </p>
        )}

        <h3 className="text-[20px] md:text-[28px] leading-[1.1] font-black uppercase text-black group-hover:text-[#D97732] transition break-words">
          {title}
        </h3>

        <p className="text-[20px] md:text-[24px] font-black text-black mt-3 md:mt-5">
          {price}
        </p>

      </div>

    </Link>
  )
}