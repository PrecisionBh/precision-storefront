export default function Hero() {
  return (
    <section className="min-h-[92vh] md:min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-6">

      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(to_right,#222_1px,transparent_1px)] bg-[size:80px_100%]" />
      </div>

      <div className="relative z-10 text-center">

        <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm mb-5 md:mb-8">
          Premium Billiards Equipment
        </p>

        <h1 className="text-[48px] sm:text-[64px] md:text-[180px] leading-[0.95] font-black tracking-[3px] md:tracking-[8px]">
          PRECISION
        </h1>

        <h2 className="text-[42px] sm:text-[56px] md:text-[150px] leading-[0.95] font-black text-[#D97732] tracking-[3px] md:tracking-[8px]">
          CUES
        </h2>

        <p className="mt-6 md:mt-10 text-gray-300 uppercase tracking-[3px] md:tracking-[5px] text-[11px] md:text-base">
          Confidence Starts Here
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 mt-8 md:mt-12">

          <button className="w-full md:w-auto bg-[#D97732] px-8 md:px-10 py-4 md:py-5 uppercase tracking-[2px] md:tracking-[3px] text-sm md:text-base font-bold hover:opacity-90 transition rounded-xl">
            Shop Now
          </button>

          <button className="w-full md:w-auto border border-white/20 px-8 md:px-10 py-4 md:py-5 uppercase tracking-[2px] md:tracking-[3px] text-sm md:text-base font-bold hover:border-white transition rounded-xl">
            Browse Cues
          </button>

        </div>

        <div className="mt-12 md:mt-20 flex flex-col items-center opacity-60">
          <p className="text-[10px] md:text-xs tracking-[4px] md:tracking-[6px] uppercase text-gray-400">
            Scroll
          </p>

          <div className="w-[1px] h-10 md:h-16 bg-white/20 mt-4 md:mt-6" />
        </div>

      </div>

    </section>
  )
}