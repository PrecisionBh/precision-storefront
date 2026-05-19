import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import CueSection from "@/components/cues/CueSection"

import LayoutContainer from "@/components/LayoutContainer"

import { shopifyFetch } from "@/lib/shopify"
import { getCollectionProductsQuery } from "@/lib/queries"

export async function getServerSideProps() {

  const shirtsResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "apparel",
    },
  })

  const hoodiesResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "apparel",
    },
  })

  const hatsResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "apparel",
    },
  })

  const shirts =
    shirtsResponse.data.collection?.products?.edges || []

  const hoodies =
    hoodiesResponse.data.collection?.products?.edges || []

  const hats =
    hatsResponse.data.collection?.products?.edges || []

  return {
    props: {
      shirts,
      hoodies,
      hats,

      heroImage:
        shirts?.[0]?.node?.featuredImage?.url ||
        hoodies?.[0]?.node?.featuredImage?.url ||
        hats?.[0]?.node?.featuredImage?.url ||
        null,
    },
  }
}

export default function ApparelPage({
  shirts,
  hoodies,
  hats,
  heroImage,
}: any) {
  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50 border-b border-white/5">
        <AnnouncementBar />
        <Navbar />
      </div>

      <div className="h-[86px] md:h-[108px]" />

      {/* HERO */}
      <section className="relative h-[300px] md:h-[420px] overflow-hidden bg-black">

        {heroImage && (
          <img
            src={heroImage}
            alt="Apparel Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-8 md:pb-12">

            <div className="max-w-[760px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[7px] text-[9px] md:text-xs font-bold mb-3 md:mb-4">
                Lifestyle Collection
              </p>

              <h1 className="text-[40px] md:text-[82px] leading-[0.88] font-black uppercase text-white">
                Apparel
              </h1>

              <p className="text-gray-300 text-[13px] md:text-[18px] leading-relaxed mt-3 md:mt-5 max-w-[620px]">
                Everyday apparel built for players who live the game on and off the table.
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
      <div className="bg-[#111111] border-b border-black/10 sticky top-[86px] md:top-[108px] z-40">

        <LayoutContainer>

          <div className="flex items-center gap-6 md:gap-10 overflow-x-auto whitespace-nowrap scrollbar-hide">

            <a
              href="#top"
              className="uppercase tracking-[2px] md:tracking-[3px] text-[#D97732] font-bold text-[10px] md:text-xs border-b-2 border-[#D97732] py-4 md:py-5 flex-shrink-0"
            >
              All
            </a>

            <a
              href="#shirts"
              className="uppercase tracking-[2px] md:tracking-[3px] text-gray-400 hover:text-white transition font-bold text-[10px] md:text-xs py-4 md:py-5 flex-shrink-0"
            >
              Shirts
            </a>

            <a
              href="#hoodies"
              className="uppercase tracking-[2px] md:tracking-[3px] text-gray-400 hover:text-white transition font-bold text-[10px] md:text-xs py-4 md:py-5 flex-shrink-0"
            >
              Hoodies
            </a>

            <a
              href="#hats"
              className="uppercase tracking-[2px] md:tracking-[3px] text-gray-400 hover:text-white transition font-bold text-[10px] md:text-xs py-4 md:py-5 flex-shrink-0"
            >
              Hats
            </a>

          </div>

        </LayoutContainer>

      </div>

      {/* SECTIONS */}
      <CueSection
        id="shirts"
        eyebrow="Everyday Player Gear"
        title="Shirts"
        products={shirts}
      />

      <CueSection
        id="hoodies"
        eyebrow="Comfort Meets The Game"
        title="Hoodies"
        products={hoodies}
      />

      <CueSection
        id="hats"
        eyebrow="Precision Lifestyle"
        title="Hats"
        products={hats}
      />

      <Footer />

    </main>
  )
}