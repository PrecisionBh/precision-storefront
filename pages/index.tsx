import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import CategoryGrid from "@/components/CategoryGrid"
import WholesaleBanner from "@/components/WholesaleBanner"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import { shopifyFetch } from "@/lib/shopify"
import { getCollectionProductsQuery } from "@/lib/queries"

export async function getServerSideProps() {

  const cueResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "break-cues",
    },
  })

  const caseResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "cases",
    },
  })

  const jerseyResponse = await shopifyFetch({
  query: getCollectionProductsQuery,

  variables: {
    handle: "precision-jerseys",
  },
})

const gloveResponse = await shopifyFetch({
  query: getCollectionProductsQuery,

  variables: {
    handle: "gloves",
  },
})

const shirtResponse = await shopifyFetch({
  query: getCollectionProductsQuery,

  variables: {
    handle: "apparel",
  },
})

  return {
    props: {

      cueImage:
        cueResponse?.data?.collection?.products?.edges?.[0]?.node?.featuredImage?.url || null,

      caseImage:
        caseResponse?.data?.collection?.products?.edges?.[0]?.node?.featuredImage?.url || null,

      jerseyImage:
        jerseyResponse?.data?.collection?.products?.edges?.[0]?.node?.featuredImage?.url || null,

      gloveImage:
        gloveResponse?.data?.collection?.products?.edges?.[0]?.node?.featuredImage?.url || null,

      shirtImage:
        shirtResponse?.data?.collection?.products?.edges?.[0]?.node?.featuredImage?.url || null,
    },
  }
}

export default function Home({
  cueImage,
  caseImage,
  jerseyImage,
  gloveImage,
  shirtImage,
}: any) {

  return (
    <main className="bg-black text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      <Hero />

      <LayoutContainer>

        <CategoryGrid
          cueImage={cueImage}
          caseImage={caseImage}
          jerseyImage={jerseyImage}
          gloveImage={gloveImage}
          shirtImage={shirtImage}
        />

      </LayoutContainer>

      <LayoutContainer>
        <WholesaleBanner />
      </LayoutContainer>

      <Footer />

    </main>
  )
}