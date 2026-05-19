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
    <section className="bg-black text-white px-3 md:px-6 py-8 md:py-12">

      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-[34px] md:text-[76px] font-black uppercase tracking-[2px] md:tracking-[3px] leading-none">
          Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">

        <CategoryCard
          href="/cues"
          image={cueImage}
          eyebrow="Precision Collection"
          title="Cues"
          description="Full carbon fiber construction. Engineered for serious players."
        />

        <CategoryCard
          href="/cases"
          image={caseImage}
          eyebrow="Protection Series"
          title="Cases"
          description="Hard & soft cases built to protect your investment."
        />

        <CategoryCard
          href="/jerseys"
          image={jerseyImage}
          eyebrow="Apex Series"
          title="Jerseys"
          description="Premium performance apparel built for competition."
        />

        <CategoryCard
          href="/chalk-gloves"
          image={gloveImage}
          eyebrow="Essential Gear"
          title="Chalk & Gloves"
          description="Accessories trusted by serious competitive players."
        />

      </div>

      <div className="flex justify-center mt-3 md:mt-5">

        <CategoryCard
          href="/apparel"
          image={shirtImage}
          eyebrow="Lifestyle Collection"
          title="Apparel"
          description="Everyday apparel built for players who live the game."
          centered
        />

      </div>

    </section>
  )
}

function CategoryCard({
  href,
  image,
  eyebrow,
  title,
  description,
  centered = false,
}: {
  href: string
  image?: string
  eyebrow: string
  title: string
  description: string
  centered?: boolean
}) {
  return (
    <Link
      href={href}
      className={`
        relative
        h-[220px]
        md:h-[280px]
        overflow-hidden
        group
        cursor-pointer
        bg-[#111827]
        block
        rounded-2xl
        ${centered ? "w-full md:w-[58%]" : ""}
      `}
    >

      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-58 group-hover:scale-105 transition duration-700"
        />
      )}

      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute left-0 top-0 w-[3px] h-full bg-[#D97732]" />

      <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-7">

        <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[5px] text-[9px] md:text-[11px] font-bold mb-2 md:mb-3">
          {eyebrow}
        </p>

        <h3 className="text-[30px] md:text-[44px] leading-none font-black uppercase break-words">
          {title}
        </h3>

        <p className="text-gray-300 mt-3 md:mt-4 text-[13px] md:text-[16px] max-w-[360px] leading-relaxed">
          {description}
        </p>

      </div>

    </Link>
  )
}