export default function WholesaleBanner() {
  return (
    <section className="bg-black px-4 md:px-10 py-16 md:py-24">

      <div className="relative overflow-hidden border-l-4 border-r-4 border-[#D97732] bg-[#111111] px-5 md:px-24 py-12 md:py-20 rounded-2xl">

        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,50,0.08),transparent_40%)]" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-14">

          {/* LEFT */}
          <div className="max-w-[700px] w-full">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-4 md:mb-6">
              For Businesses
            </p>

            <h2 className="text-[40px] sm:text-[50px] md:text-[90px] leading-[0.95] font-black uppercase text-white break-words">
              Wholesale Program
            </h2>

            <p className="text-gray-400 text-sm md:text-xl leading-relaxed mt-5 md:mt-10 max-w-[650px]">
              Join the Precision Cues wholesale network and unlock tiered pricing —
              up to 30% off retail. Bronze, Silver, Gold, and Platinum tiers available.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex-shrink-0 w-full md:w-auto">

            <button className="w-full md:w-auto bg-[#D97732] hover:opacity-90 transition px-8 md:px-14 py-4 md:py-6 uppercase tracking-[2px] md:tracking-[4px] font-black text-sm md:text-lg text-white rounded-xl">
              Apply Now →
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}