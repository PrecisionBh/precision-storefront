import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function AboutPage() {
  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      <div className="h-[104px] md:h-[124px]" />
      

      {/* HERO */}
      <section className="relative h-[460px] md:h-[620px] overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop"
          alt="Precision About"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-10 md:pb-20">

            <div className="max-w-[950px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-4 md:mb-6">
                Built From Passion
              </p>

              <h1 className="text-[52px] md:text-[130px] leading-[0.9] font-black uppercase text-white">
                About
                <br />
                Precision
              </h1>

              <p className="text-gray-300 text-sm md:text-[24px] leading-relaxed mt-5 md:mt-10 max-w-[760px]">
                A small company with a relentless vision — pushing innovation, performance, and identity within the billiards world.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* STORY */}
      <section className="bg-white text-black py-16 md:py-28">

        <LayoutContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-start">

            {/* LEFT */}
            <div>

              <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-black mb-4 md:mb-6">
                Our Story
              </p>

              <h2 className="text-[40px] md:text-[80px] leading-[0.95] font-black uppercase">
                Confidence
                <br />
                Starts Here
              </h2>

            </div>

            {/* RIGHT */}
            <div className="space-y-6 md:space-y-10 text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">

              <p>
                Founded in 2022, Precision Cues was built from a passion for competition, innovation, and creating products that stand out both visually and in performance.
              </p>

              <p>
                Precision became one of the early pioneers of the full carbon fiber break cue and jump cue movement — helping push modern cue technology into a new era of power, consistency, and durability.
              </p>

              <p>
                Since launch, Precision has delivered over <span className="font-black text-black">1,000+ cues</span> and <span className="font-black text-black">2,000+ jerseys</span> to players across the country while continuing to grow as an independent brand in a competitive industry.
              </p>

              <p>
                Beyond products, Precision has become deeply invested in supporting the game itself — contributing over <span className="font-black text-black">$250,000+ in tournament payouts</span> and more than <span className="font-black text-black">$40,000+ in sponsorship support</span> through tournament entries, sponsored events, player support, and equipment contributions.
              </p>

              <p>
                What started as a small operation quickly evolved into a recognizable name within the billiards community — fueled by nonstop innovation, direct customer relationships, and a commitment to building products players genuinely trust.
              </p>

              <p>
                Precision also partners with cue builders worldwide for its playing cue collections — collaborating with talented builders across the United States, the Philippines, Malaysia, China, and Central America to create unique designs featuring exotic woods, custom inlays, and distinct craftsmanship styles from different regions of the world.
              </p>

              <p>
                Rather than mass producing playing cues, Precision focuses on limited production runs and small-batch collaborations. Many releases are true one-of-one builds, while larger collections are intentionally capped in limited quantities — never exceeding 35 cues of the same style.
              </p>

              <p>
                Precision isn't backed by massive corporations or investors. It's built through hustle, community support, and an obsession with constantly improving the game both on and off the table.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* STATS */}
      <section className="bg-[#0A0A0A] py-16 md:py-24 border-y border-white/10">

        <LayoutContainer>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 md:gap-x-20 gap-y-10 md:gap-y-20">

            <div className="min-w-0">
              <h3 className="text-[36px] md:text-[64px] font-black text-[#D97732] leading-none whitespace-nowrap">
                1K+
              </h3>

              <p className="uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm text-gray-400 mt-3 md:mt-5">
                Cues Sold
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-[36px] md:text-[64px] font-black text-[#D97732] leading-none whitespace-nowrap">
                2K+
              </h3>

              <p className="uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm text-gray-400 mt-3 md:mt-5">
                Jerseys Sold
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-[36px] md:text-[64px] font-black text-[#D97732] leading-none whitespace-nowrap">
                $250K+
              </h3>

              <p className="uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm text-gray-400 mt-3 md:mt-5">
                Tournament
                <br />
                Payouts
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-[36px] md:text-[64px] font-black text-[#D97732] leading-none whitespace-nowrap">
                $40K+
              </h3>

              <p className="uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm text-gray-400 mt-3 md:mt-5">
                Sponsorship
                <br />
                Support
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-[36px] md:text-[64px] font-black text-[#D97732] leading-none whitespace-nowrap">
                2022
              </h3>

              <p className="uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm text-gray-400 mt-3 md:mt-5">
                Founded
              </p>
            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* MISSION */}
      <section className="bg-white text-black py-16 md:py-28">

        <LayoutContainer>

          <div className="max-w-[1200px]">

            <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-black mb-4 md:mb-6">
              The Mission
            </p>

            <h2 className="text-[40px] md:text-[92px] leading-[0.95] font-black uppercase max-w-[1000px]">
              Building More Than Just Products
            </h2>

            <p className="text-[16px] md:text-[22px] leading-[1.9] md:leading-[2] text-gray-700 mt-8 md:mt-14 max-w-[1000px]">
              Precision is focused on creating a lasting impact within the billiards industry through innovation, premium craftsmanship, and community-driven growth. Every cue, jersey, accessory, and product released is designed with the goal of helping players feel confident every time they step to the table.
            </p>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}