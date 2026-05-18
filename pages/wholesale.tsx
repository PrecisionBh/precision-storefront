import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function WholesalePage() {
  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          alt="Wholesale"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-10 md:pb-16">

            <div className="max-w-[920px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-4 md:mb-6">
                Dealer Program
              </p>

              <h1 className="text-[52px] md:text-[120px] leading-[0.9] font-black uppercase text-white">
                Wholesale
              </h1>

              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed mt-5 md:mt-8 max-w-[760px]">
                Partner with Precision and bring premium billiards products to your customers.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* CONTENT */}
      <section className="bg-white text-black py-16 md:py-28">

        <LayoutContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">

            <div>

              <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-black mb-4 md:mb-6">
                Become A Dealer
              </p>

              <h2 className="text-[40px] md:text-[80px] leading-[0.95] font-black uppercase">
                Grow
                <br />
                With Us
              </h2>

            </div>

            <div className="space-y-6 md:space-y-10 text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">

              <p>
                Precision works with select dealers, tournament operators, and retail partners across the country to expand access to premium billiards equipment and apparel.
              </p>

              <p>
                Our wholesale program offers competitive pricing, dealer support, event partnerships, and access to one of the fastest-growing independent brands in billiards.
              </p>

              <p>
                From cues and cases to jerseys and accessories, Precision products are built to stand out both visually and in performance.
              </p>

              <p>
                We're actively looking to partner with pro shops, tournament promoters, online retailers, and billiards-focused businesses who share the same passion for growing the game.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-16 md:py-24 border-y border-white/10">

        <LayoutContainer>

          <div className="max-w-[1000px]">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-black mb-4 md:mb-6">
              Interested?
            </p>

            <h2 className="text-[40px] md:text-[92px] leading-[0.95] font-black uppercase">
              Let’s Build Something Together
            </h2>

            <p className="text-gray-400 text-[16px] md:text-[22px] leading-[1.9] md:leading-[2] mt-8 md:mt-12 max-w-[850px]">
              Reach out to discuss dealer pricing, sponsorship opportunities, event partnerships, or becoming an official Precision retailer.
            </p>

            <button className="mt-8 md:mt-14 w-full md:w-auto bg-[#D97732] hover:opacity-90 transition px-8 md:px-12 py-4 md:py-5 uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm font-black rounded-xl">
              Contact Us
            </button>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}