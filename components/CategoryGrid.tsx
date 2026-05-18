import Link from "next/link"

type Props = {
  cueImage?: string
  caseImage?: string
  jerseyImage?: string
  gloveImage?: string
  shirtImage?: string
}

export default function CategoryGrid({
  cueImage,
  caseImage,
  jerseyImage,
  gloveImage,
  shirtImage,
}: Props) {

  return (
    <section className="bg-black text-white px-4 md:px-10 py-12 md:py-16">

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
          className="relative  overflow-hidden group cursor-pointer bg-[#0F172A] block rounded-2xl"
        >

          {cueImage && (
            <img
              src={cueImage}
              alt="Cues"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
            />
          )}

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Precision Collection
            </p>

            <h3 className="text-[34px] md:text-[54px] leading-none font-black uppercase break-words">
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
          className="relative h-[260px] md:h-[340px] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          {caseImage && (
            <img
              src={caseImage}
              alt="Cases"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
            />
          )}

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Protection Series
            </p>

            <h3 className="text-[34px] md:text-[54px] leading-none font-black uppercase break-words">
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
          className="relative h-[260px] md:h-[340px] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          {jerseyImage && (
            <img
              src={jerseyImage}
              alt="Jerseys"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
            />
          )}

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Apex Series
            </p>

            <h3 className="text-[34px] md:text-[54px] leading-none font-black uppercase break-words">
              Jerseys
            </h3>

            <p className="text-gray-300 mt-3 md:mt-6 text-sm md:text-xl max-w-[400px] leading-relaxed">
              Premium performance apparel built for competition.
            </p>

          </div>

        </Link>

        {/* GLOVES */}
        <Link
          href="/chalk-gloves"
          className="relative h-[260px] md:h-[340px] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          {gloveImage && (
            <img
              src={gloveImage}
              alt="Gloves"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
            />
          )}

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
          className="relative h-[260px] md:h-[340px] w-full md:w-[60%] overflow-hidden group cursor-pointer bg-[#111827] block rounded-2xl"
        >

          {shirtImage && (
            <img
              src={shirtImage}
              alt="Apparel"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700"
            />
          )}

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-0 top-0 w-[4px] h-full bg-[#D97732]" />

          <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-10">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-bold mb-2 md:mb-4">
              Lifestyle Collection
            </p>

            <h3 className="text-[34px] md:text-[54px] leading-none font-black uppercase break-words">
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