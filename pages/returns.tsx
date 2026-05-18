import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function ReturnsPage() {
  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative h-[260px] md:h-[320px] overflow-hidden bg-black">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-8 md:pb-12">

            <div className="max-w-[900px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-3 md:mb-5">
                Support
              </p>

              <h1 className="text-[40px] md:text-[88px] leading-[0.9] font-black uppercase text-white">
                Returns & Warranty
              </h1>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* CONTENT */}
      <section className="bg-white text-black py-16 md:py-24">

        <LayoutContainer>

          <div className="max-w-[1050px] space-y-10 md:space-y-16">

            {/* RETURNS */}
            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Returns
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                To be eligible for a return, products must be completely unused and returned in the exact same condition they were originally shipped in.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">
                Customers are responsible for all return shipping costs associated with sending products back to Precision for inspection or return processing.
              </p>

            </div>

            {/* JERSEYS */}
            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Jersey Policy
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                All jerseys are custom made-to-order products and are produced through a third-party printing partner.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                Precision only accepts responsibility for jerseys that arrive damaged, severely misprinted, or contain manufacturing defects such as tears.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 font-semibold">
                There are absolutely no refunds or exchanges due to sizing issues, fitment concerns, buyer error, or production/shipping delays.
              </p>

            </div>

            {/* BREAK & JUMP WARRANTY */}
            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Break & Jump Cue Warranty
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                Precision break and jump cues include a limited lifetime manufacturer warranty for the original purchaser only.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                Customers must provide a valid order number or receipt directly from Precision or from an authorized Precision dealer in order to qualify for warranty evaluation.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 font-semibold">
                Second-hand or privately sold cues are not covered under warranty.
              </p>

            </div>

            {/* PLAYING CUES */}
            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Playing Cue Warranty
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                Precision playing cues include a 90-day limited manufacturer warranty from the original date of delivery.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">
                Warranty requests must include clear photos and a detailed explanation of the issue submitted through email for inspection review.
              </p>

            </div>

            {/* INSPECTIONS */}
            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Inspections & Determinations
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                All warranty claims and returned items are fully inspected by Precision before any repair, replacement, or approval decision is made.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">
                If Precision determines that the defect or damage was caused by misuse, abuse, neglect, impact damage, environmental conditions, improper maintenance, or operator-caused issues, the item will not qualify for refund or replacement coverage.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mt-5 md:mt-6">
                In those situations, the product may still be returned back to the customer at no additional shipping cost after inspection is completed.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}