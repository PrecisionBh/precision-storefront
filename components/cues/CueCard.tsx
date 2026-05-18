type Props = {
  image: string
  title: string
  price: string
  soldOut?: boolean
}

export default function CueCard({
  image,
  title,
  price,
  soldOut,
}: Props) {
  return (
    <div className="group cursor-pointer">

      <div className="relative overflow-hidden bg-[#F5F5F5] rounded-2xl">

        <img
          src={image}
          alt={title}
          className="w-full h-[220px] md:h-[280px] object-cover group-hover:scale-105 transition duration-700"
        />

        {soldOut && (
          <div className="absolute inset-0 flex items-center justify-center">

            <div className="border border-white/40 px-6 md:px-10 py-3 md:py-4 uppercase tracking-[3px] md:tracking-[6px] text-xs md:text-base text-white font-bold bg-black/40 backdrop-blur-sm rounded-xl">
              Sold Out
            </div>

          </div>
        )}

      </div>

      <div className="pt-4 md:pt-5">

        <p className="uppercase tracking-[2px] md:tracking-[4px] text-gray-500 text-[10px] md:text-[11px] font-bold">
          Cues
        </p>

        <h3 className="text-[17px] md:text-[20px] text-black font-semibold mt-2 md:mt-3 leading-snug">
          {title}
        </h3>

        <p className="text-[26px] md:text-[34px] font-black text-black mt-3 md:mt-4">
          {price}
        </p>

      </div>

    </div>
  )
}