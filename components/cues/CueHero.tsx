import LayoutContainer from "@/components/LayoutContainer"

type Props = {
  image?: string
}

export default function CueHero({
  image,
}: Props) {

  return (
    <section className="relative h-[420px] md:h-[520px] overflow-hidden bg-black">

      {image && (
        <img
          src={image}
          alt="Cues Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <LayoutContainer className="relative z-10 h-full">

        <div className="h-full flex items-end pb-10 md:pb-16">

          <div className="max-w-[920px]">

            <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-4 md:mb-6">
              Precision Collection
            </p>

            <h1 className="text-[52px] md:text-[120px] leading-[0.9] font-black uppercase text-white">
              Cues
            </h1>

            <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed mt-4 md:mt-8 max-w-[760px]">
              Full carbon fiber construction. Engineered for serious players who demand precision, power, and consistency.
            </p>

          </div>

        </div>

      </LayoutContainer>

    </section>
  )
}