import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import CueSection from "@/components/cues/CueSection"

import LayoutContainer from "@/components/LayoutContainer"

import { shopifyFetch } from "@/lib/shopify"
import { getCollectionProductsQuery } from "@/lib/queries"

export async function getServerSideProps() {

  const casesResponse =
    await shopifyFetch({
      query:
        getCollectionProductsQuery,

      variables: {
        handle: "cases",
      },
    })

  const cases =
    casesResponse.data.collection?.products?.edges || []

  return {
    props: {

      cases,

      heroImage:
        cases?.[0]?.node?.featuredImage?.url ||
        null,
    },
  }
}

export default function CasesPage({
  cases,
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
            alt="Cases Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-8 md:pb-12">

            <div className="max-w-[760px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[7px] text-[9px] md:text-xs font-bold mb-3 md:mb-4">
                Protection Series
              </p>

              <h1 className="text-[40px] md:text-[82px] leading-[0.88] font-black uppercase text-white">
                Cases
              </h1>

              <p className="text-gray-300 text-[13px] md:text-[18px] leading-relaxed mt-3 md:mt-5 max-w-[620px]">
                Premium cue cases engineered to protect your investment while traveling in style.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* PRODUCTS */}
      <CueSection
        eyebrow="Premium Protection"
        title="Browse Cases"
        products={cases}
      />

      <Footer />

    </main>
  )
}