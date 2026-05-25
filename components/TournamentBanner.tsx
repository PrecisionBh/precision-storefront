"use client"

import Link from "next/link"

export default function TournamentBanner() {
  return (
    <section className="relative py-6 md:py-8">

      <div className="max-w-[1600px] mx-auto px-4 md:px-10">

        <Link href="/tournament">

          <div className="group relative overflow-hidden rounded-[24px] border border-[#D97732]/30 bg-gradient-to-r from-[#111111] via-[#181818] to-[#111111] hover:border-[#D97732] transition-all duration-300">

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#D97732]/5 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* SIDE LINES */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#D97732]" />
            <div className="absolute right-0 top-0 h-full w-[4px] bg-[#D97732]" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-10 py-6">

              {/* LEFT */}
              <div>

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-3 h-3 rounded-full bg-[#D97732] animate-pulse" />

                  <span className="text-[#D97732] uppercase tracking-[3px] text-[11px] md:text-xs font-black">
                    LIVE TOURNAMENT REGISTRATION
                  </span>

                </div>

                <h2 className="text-white text-2xl md:text-4xl font-black uppercase leading-tight">

                  Precision 2026 Annual
                  <span className="text-[#D97732]">
                    {" "}Scotch Doubles
                  </span>

                </h2>

                <p className="mt-2 text-white/70 text-sm md:text-base">

                  July 25th & 26th • 64 Team Cap • 1217 & Under • $115 Entry

                </p>

              </div>

              {/* RIGHT BUTTON */}
              <div className="flex-shrink-0">

                <div className="bg-[#D97732] group-hover:bg-[#c96d2c] transition px-6 py-4 rounded-full shadow-[0_0_25px_rgba(217,119,50,0.35)]">

                  <span className="text-white uppercase tracking-[2px] text-sm font-black">
                    View Tournament →
                  </span>

                </div>

              </div>

            </div>

          </div>

        </Link>

      </div>

    </section>
  )
}