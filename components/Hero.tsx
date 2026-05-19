export default function Hero() {
  return (
    <section className="min-h-[72vh] md:min-h-[82vh] bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-6">

      {/* GRID */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(to_right,#222_1px,transparent_1px)] bg-[size:80px_100%]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center pt-14 md:pt-10">

        <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[7px] text-[9px] md:text-xs mb-3 md:mb-5">
          Premium Billiards Equipment
        </p>

        <h1 className="text-[34px] sm:text-[46px] md:text-[98px] leading-[0.86] font-black tracking-[2px] md:tracking-[5px]">
          PRECISION
        </h1>

        <h2 className="text-[28px] sm:text-[40px] md:text-[78px] leading-[0.86] font-black text-[#D97732] tracking-[2px] md:tracking-[5px]">
          CUES
        </h2>

        <p className="mt-4 md:mt-5 text-gray-300 uppercase tracking-[3px] md:tracking-[4px] text-[9px] md:text-[12px]">
          Confidence Starts Here
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-7 md:mt-8">

          <button className="w-full md:w-auto bg-[#D97732] border-b border-black/20 px-8 md:px-9 h-[50px] md:h-[54px] uppercase tracking-[2px] md:tracking-[3px] text-[11px] md:text-sm font-bold hover:opacity-90 transition rounded-xl">
            Shop Now
          </button>

          <button className="w-full md:w-auto border border-white/20 px-8 md:px-9 h-[50px] md:h-[54px] uppercase tracking-[2px] md:tracking-[3px] text-[11px] md:text-sm font-bold hover:border-white transition rounded-xl">
            Browse Cues
          </button>

        </div>

        {/* SCROLL */}
        <div className="mt-8 md:mt-10 flex flex-col items-center opacity-60">

          <p className="text-[9px] md:text-[10px] tracking-[4px] md:tracking-[5px] uppercase text-gray-400">
            Scroll
          </p>

          <div className="w-[1px] h-7 md:h-10 bg-white/20 mt-3" />

        </div>

      </div>

    </section>
  )
}