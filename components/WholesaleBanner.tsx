export default function WholesaleBanner() {
  return (
    <section className="bg-black px-3 md:px-6 py-8 md:py-12">

      <div className="relative overflow-hidden border-l-[3px] border-r-[3px] border-[#D97732] bg-[#111111] px-5 md:px-14 py-8 md:py-12 rounded-2xl">

        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,50,0.06),transparent_40%)]" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">

          {/* LEFT */}
          <div className="max-w-[620px] w-full">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[5px] text-[9px] md:text-[11px] font-bold mb-3 md:mb-4">
              For Businesses
            </p>

            <h2 className="text-[32px] sm:text-[40px] md:text-[62px] leading-[0.92] font-black uppercase text-white break-words">
              Wholesale Program
            </h2>

            <p className="text-gray-400 text-[13px] md:text-[17px] leading-relaxed mt-4 md:mt-6 max-w-[560px]">
              Join the Precision Cues wholesale network and unlock tiered pricing —
              up to 45% off retail. Bronze, Silver, Gold, and Platinum tiers available.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex-shrink-0 w-full md:w-auto">

            <button className="w-full md:w-auto bg-[#D97732] hover:opacity-90 transition px-7 md:px-10 h-[50px] md:h-[56px] uppercase tracking-[2px] md:tracking-[3px] font-black text-[11px] md:text-sm text-white rounded-xl">
              Apply Now →
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}