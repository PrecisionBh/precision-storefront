import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import CueSection from "@/components/cues/CueSection"

import LayoutContainer from "@/components/LayoutContainer"

import { shopifyFetch } from "@/lib/shopify"
import { getCollectionProductsQuery } from "@/lib/queries"

export async function getServerSideProps() {

  const apexResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "apex-series",
    },
  })

  const strikeResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "strike-series-jerseys",
    },
  })

  const proResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "pro-series-jerseys",
    },
  })

  const precisionResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "precision-series-jerseys",
    },
  })

  return {
    props: {
      apex:
        apexResponse.data.collection?.products?.edges || [],

      strike:
        strikeResponse.data.collection?.products?.edges || [],

      pro:
        proResponse.data.collection?.products?.edges || [],

      precision:
        precisionResponse.data.collection?.products?.edges || [],
    },
  }
}

export default function JerseysPage({
  apex,
  strike,
  pro,
  precision,
}: any) {
  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>
      <div className="h-[104px] md:h-[124px]" />

      {/* HERO */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2070&auto=format&fit=crop"
          alt="Jerseys Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-10 md:pb-16">

            <div className="max-w-[920px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-4 md:mb-6">
                Performance Collection
              </p>

              <h1 className="text-[52px] md:text-[120px] leading-[0.9] font-black uppercase text-white">
                Jerseys
              </h1>

              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed mt-5 md:mt-8 max-w-[760px]">
                Premium performance jerseys designed for serious competitors who demand comfort, mobility, and style.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <div
        id="top"
        className="scroll-mt-[120px] md:scroll-mt-[160px]"
      />

      {/* TABS */}
      <div className="bg-[#111111] border-b border-black/10 sticky top-[104px] md:top-[124px] z-40">

        <LayoutContainer>

          <div className="flex items-center gap-8 md:gap-14 overflow-x-auto whitespace-nowrap scrollbar-hide">

            <a
              href="#apex"
              className="uppercase tracking-[2px] md:tracking-[4px] text-[#D97732] font-bold text-[11px] md:text-sm border-b-2 border-[#D97732] py-4 md:py-6 flex-shrink-0"
            >
              Apex
            </a>

            <a
              href="#strike"
              className="uppercase tracking-[2px] md:tracking-[4px] text-gray-400 hover:text-white transition font-bold text-[11px] md:text-sm py-4 md:py-6 flex-shrink-0"
            >
              Strike
            </a>

            <a
              href="#pro"
              className="uppercase tracking-[2px] md:tracking-[4px] text-gray-400 hover:text-white transition font-bold text-[11px] md:text-sm py-4 md:py-6 flex-shrink-0"
            >
              Pro
            </a>

            <a
              href="#precision"
              className="uppercase tracking-[2px] md:tracking-[4px] text-gray-400 hover:text-white transition font-bold text-[11px] md:text-sm py-4 md:py-6 flex-shrink-0"
            >
              Precision
            </a>

          </div>

        </LayoutContainer>

      </div>

      {/* SECTIONS */}
      <CueSection
        id="apex"
        eyebrow="Elite Performance Series"
        title="Apex Series"
        products={apex}
      />

      <CueSection
        id="strike"
        eyebrow="Bold Competitive Designs"
        title="Strike Series Jerseys"
        products={strike}
      />

      <CueSection
        id="pro"
        eyebrow="Built For Tournament Players"
        title="Pro Series Jerseys"
        products={pro}
      />

      <CueSection
        id="precision"
        eyebrow="Precision Lifestyle Collection"
        title="Precision Series Jerseys"
        products={precision}
      />

      <Footer />

    </main>
  )
}