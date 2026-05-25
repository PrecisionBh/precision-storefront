"use client"

import { useEffect, useState } from "react"

export default function TournamentCountdown() {

  const registrationEndDate = new Date(
    "2026-07-17T18:00:00-04:00"
  ).getTime()

  const [time, setTime] =
    useState<any>(null)

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime()

      const distance =
        registrationEndDate - now

      setTime({
        days: Math.floor(
          distance /
          (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),

        minutes: Math.floor(
          (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        ),

        seconds: Math.floor(
          (distance %
            (1000 * 60)) / 1000
        ),
      })

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  if (!time) return null

  return (
    <section className="py-8 md:py-12">

      <div className="max-w-[1200px] mx-auto px-4 md:px-10">

        <div className="relative overflow-hidden rounded-[30px] border border-[#D97732]/30 bg-[#111111] px-6 md:px-12 py-8 md:py-10 shadow-[0_0_50px_rgba(217,119,50,0.12)]">

          {/* GLOWS */}
          <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#D97732]/10 blur-[100px]" />

          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#D97732]/10 blur-[100px]" />

          <div className="relative">

                       {/* TOP INFO */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-10">

              <InfoCard
                title="$115 Entry"
                subtitle="$15 Green Fee + $100 Entry"
              />

              <InfoCard
                title="$50 Side Pot"
                subtitle="Winner Take All"
              />

              <InfoCard
                title="$50 Side Pot"
                subtitle="60% • 30% • 10%"
              />

              <InfoCard
                title="100% Paid Back"
                subtitle="All Side Pots Returned To Field"
              />

              <InfoCard
                title="5% Auction Fee"
                subtitle="Taken From Final Auction"
              />

            </div>

            {/* MAIN CONTENT */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

              {/* LEFT */}
              <div className="text-center lg:text-left">

                <p className="text-[#D97732] uppercase tracking-[4px] text-xs md:text-sm font-black mb-4">
                  Registration Ends In
                </p>

                <h2 className="text-white text-3xl md:text-5xl font-black uppercase leading-none">
                  July 17th
                  <span className="text-[#D97732]">
                    {" "}@ 6PM EST
                  </span>
                </h2>

                <p className="mt-4 text-white/60 text-sm md:text-base max-w-[550px] leading-relaxed">
                  Online auction begins immediately after registration closes.
                </p>

              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3 md:gap-5">

                <CountdownBlock
                  value={time.days}
                  label="Days"
                />

                <CountdownBlock
                  value={time.hours}
                  label="Hours"
                />

                <CountdownBlock
                  value={time.minutes}
                  label="Min"
                />

                <CountdownBlock
                  value={time.seconds}
                  label="Sec"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

function CountdownBlock({
  value,
  label,
}: {
  value: number
  label: string
}) {
  return (
    <div className="bg-black border border-[#D97732]/20 rounded-[20px] w-[78px] md:w-[100px] py-4 md:py-5 text-center">

      <div className="text-white text-3xl md:text-5xl font-black leading-none">
        {value}
      </div>

      <div className="text-[#D97732] uppercase tracking-[2px] text-[10px] md:text-xs mt-2 font-black">
        {label}
      </div>

    </div>
  )
}

function InfoCard({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <div className="bg-black/60 border border-white/10 rounded-[20px] px-5 py-5 text-center">

      <h3 className="text-white text-lg md:text-2xl font-black uppercase leading-tight">
        {title}
      </h3>

      <p className="mt-2 text-[#D97732] text-xs md:text-sm uppercase tracking-[2px] font-bold">
        {subtitle}
      </p>

    </div>
  )
}