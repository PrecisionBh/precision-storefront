import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import TournamentCountdown from "@/components/TournamentCountdown"
import TournamentRules from "@/components/rules"
import TournamentRegistrationForm from "@/components/form"
import TournamentTeams from "@/components/playerslist"
import PaymentInfo from "@/components/payment"

import Image from "next/image"

export default function TournamentPage() {
  return (
    <main className="bg-black min-h-screen overflow-hidden text-white">

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 w-full z-50 border-b border-white/5">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative pt-[140px] md:pt-[170px] pb-16 md:pb-24">

        {/* LEFT GLOW */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#D97732]/20 blur-[120px] rounded-full pointer-events-none" />

        {/* RIGHT GLOW */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#D97732]/20 blur-[120px] rounded-full pointer-events-none" />

        {/* SIDE ACCENTS */}
        <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b from-transparent via-[#D97732] to-transparent opacity-80" />

        <div className="absolute right-0 top-0 h-full w-[6px] bg-gradient-to-b from-transparent via-[#D97732] to-transparent opacity-80" />

        <LayoutContainer>

          {/* TITLE */}
          <div className="text-center mb-12">

            <p className="text-[#D97732] uppercase tracking-[5px] text-xs md:text-sm font-black mb-4">
              Precision Tournaments
            </p>

            <h1 className="text-white text-4xl md:text-7xl font-black uppercase leading-none">
              2026 Annual
              <span className="text-[#D97732]">
                {" "}Scotch Doubles
              </span>
            </h1>

            <p className="mt-6 text-white/60 text-sm md:text-lg max-w-[850px] mx-auto leading-relaxed">
              1217 & Under • 96 Team Cap • $115 Entry •
              8 Ball • Race to 5 Winners Side •
              Race to 4 Losers Side •
              Online Auction •
              July 25th & 26th
            </p>

          </div>

          {/* FLYER */}
          <div className="flex justify-center">

            <div className="relative group">

              {/* LEFT ORANGE BAR */}
              <div className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 h-[75%] w-[4px] bg-[#D97732] rounded-full shadow-[0_0_25px_#D97732]" />

              {/* RIGHT ORANGE BAR */}
              <div className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 h-[75%] w-[4px] bg-[#D97732] rounded-full shadow-[0_0_25px_#D97732]" />

              {/* FLYER */}
              <div className="relative rounded-[28px] overflow-hidden border border-[#D97732]/40 shadow-[0_0_60px_rgba(217,119,50,0.25)]">

                <Image
                  src="/images/categories/1217.png"
                  alt="Precision 2026 Annual Scotch Doubles"
                  width={900}
                  height={1400}
                  priority
                  className="w-full max-w-[900px] h-auto object-cover"
                />

              </div>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* PAYMENT INFO */}
      <PaymentInfo />

      {/* COUNTDOWN */}
      <TournamentCountdown />

      {/* REGISTERED PLAYERS */}
      <TournamentTeams />

      {/* REGISTRATION FORM */}
      <TournamentRegistrationForm />

      {/* RULES */}
      <TournamentRules />

      <Footer />

    </main>
  )
}