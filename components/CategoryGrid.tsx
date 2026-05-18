import Link from "next/link"

export default function CategoryGrid() {
  return (
    <section className="bg-black text-white px-4 md:px-10 py-16 md:py-24">

      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-[42px] md:text-[110px] font-black uppercase tracking-[2px] md:tracking-[4px] leading-none">
          Category
        </h2>
      </div>

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        {/* CUES */}
        <Link
          href="/cues"
          className="relative h-[320px] md:h-[420px] overflow-hidden group cursor-pointer bg-[#0F172A] block rounded-2xl"
        >

          <img
            src="https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=2070&auto=format&fit=crop"
            alt="Cues"
            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Precision Collection
            </p>

            <h3 className="text-[42px] md:text-[70px] leading-none font-black uppercase break-words">
              Cues
            </h3>

            <p className="text-gray-300 mt-3 md:mt-6 text-sm md:text-xl max-w-[400px] leading-relaxed">
              Full carbon fiber construction. Engineered for serious players.
            </p>

          </div>

        </Link>

        {/* CASES */}
        <Link
          href="/cases"
          className="relative h-[320px] md:h-[420px] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          <img
            src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1974&auto=format&fit=crop"
            alt="Cases"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Protection Series
            </p>

            <h3 className="text-[42px] md:text-[70px] leading-none font-black uppercase break-words">
              Cases
            </h3>

            <p className="text-gray-300 mt-3 md:mt-6 text-sm md:text-xl max-w-[400px] leading-relaxed">
              Hard & soft cases built to protect your investment.
            </p>

          </div>

        </Link>

        {/* JERSEYS */}
        <Link
          href="/jerseys"
          className="relative h-[320px] md:h-[420px] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1974&auto=format&fit=crop"
            alt="Jerseys"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Apex Series
            </p>

            <h3 className="text-[42px] md:text-[70px] leading-none font-black uppercase break-words">
              Jerseys
            </h3>

            <p className="text-gray-300 mt-3 md:mt-6 text-sm md:text-xl max-w-[400px] leading-relaxed">
              Premium performance apparel built for competition.
            </p>

          </div>

        </Link>

        {/* CHALK */}
        <Link
          href="/chalk-gloves"
          className="relative h-[320px] md:h-[420px] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1971&auto=format&fit=crop"
            alt="Chalk"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Essential Gear
            </p>

            <h3 className="text-[34px] md:text-[70px] leading-none font-black uppercase break-words">
              Chalk & Gloves
            </h3>

            <p className="text-gray-300 mt-3 md:mt-6 text-sm md:text-xl max-w-[400px] leading-relaxed">
              Accessories trusted by serious competitive players.
            </p>

          </div>

        </Link>

      </div>

      {/* APPAREL CENTERED */}
      <div className="flex justify-center mt-4 md:mt-6">

        <Link
          href="/apparel"
          className="relative h-[320px] md:h-[420px] w-full md:w-[60%] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          <img
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop"
            alt="Apparel"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Lifestyle Collection
            </p>

            <h3 className="text-[42px] md:text-[70px] leading-none font-black uppercase break-words">
              Apparel
            </h3>

            <p className="text-gray-300 mt-3 md:mt-6 text-sm md:text-xl max-w-[500px] leading-relaxed">
              Everyday apparel built for players who live the game.
            </p>

          </div>

        </Link>

      </div>

    </section>
  )
}