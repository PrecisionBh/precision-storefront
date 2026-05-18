import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import CueHero from "@/components/cues/CueHero"
import CueTabs from "@/components/cues/CueTabs"
import CueSection from "@/components/cues/CueSection"

import { shopifyFetch } from "@/lib/shopify"
import { getCollectionProductsQuery } from "@/lib/queries"

export async function getServerSideProps() {

  const breakResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "break-cues",
    },
  })

  const jumpResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "jump-cues",
    },
  })

  const playingResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "playing-cues",
    },
  })

  return {
    props: {
      breakCues:
        breakResponse.data.collection.products.edges,

      jumpCues:
        jumpResponse.data.collection.products.edges,

      playingCues:
        playingResponse.data.collection.products.edges,
    },
  }
}

export default function CuesPage({
  breakCues,
  jumpCues,
  playingCues,
}: any) {

  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      <div className="h-[104px] md:h-[124px]" />

      <CueHero
        image={
          breakCues?.[0]?.node?.featuredImage?.url
        }
      />

      <div
        id="top"
        className="scroll-mt-[120px] md:scroll-mt-[160px]"
      />

      <CueTabs />

      <CueSection
        id="break"
        eyebrow="Built For Powerful Break Shots"
        title="Break Cues"
        products={breakCues}
      />

      <CueSection
        id="jump"
        eyebrow="Engineered For Precision Jump Shots"
        title="Jump Cues"
        products={jumpCues}
      />

      <CueSection
        id="playing"
        eyebrow="Built For Competitive Play"
        title="Playing Cues"
        products={playingCues}
      />

      <Footer />

    </main>
  )
}