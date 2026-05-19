export default function StatsStrip() {
  const stats = [
    {
      value: "2022",
      label: "Founded",
    },
    {
      value: "1K+",
      label: "Cues Sold",
    },
    {
      value: "2K+",
      label: "Jerseys Sold",
    },
    {
      value: "$40K+",
      label: "Sponsorship Support",
    },
    {
      value: "$250K+",
      label: "Tournament Payouts",
    },
  ]

  return (
    <section className="bg-black border-y border-white/5">

      <div className="max-w-[1920px] mx-auto px-8 md:px-16 xl:px-24 py-14 md:py-24">

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-14">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="text-center"
            >

              <h2 className="text-[#D97732] text-[44px] md:text-[64px] xl:text-[72px] leading-none font-black tracking-[-2px]">
                {stat.value}
              </h2>

              <p className="mt-5 text-gray-400 uppercase tracking-[6px] text-[10px] md:text-[13px] leading-[1.8] text-center">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}