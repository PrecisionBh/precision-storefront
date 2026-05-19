import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import ProductCard from "@/components/ProductCard"

import LayoutContainer from "@/components/LayoutContainer"

import { shopifyFetch } from "@/lib/shopify"
import { getCollectionProductsQuery } from "@/lib/queries"

export async function getServerSideProps() {

  const apparelResponse = await shopifyFetch({
    query: getCollectionProductsQuery,

    variables: {
      handle: "apparel",
    },
  })

  const products =
    apparelResponse.data.collection?.products?.edges || []

  return {
    props: {
      products,

      heroImage:
        products?.[0]?.node?.featuredImage?.url ||
        null,
    },
  }
}

export default function ApparelPage({
  products,
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
                Precision Lifestyle Collection
              </p>

              <h1 className="text-[40px] md:text-[82px] leading-[0.88] font-black uppercase text-white">
                Apparel
              </h1>

              <p className="text-gray-300 text-[13px] md:text-[18px] leading-relaxed mt-3 md:mt-5 max-w-[620px]">
                Premium performance and lifestyle apparel built for players who live the game both on and off the table.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* POD NOTICE */}
      <section className="bg-[#D97732]">

        <LayoutContainer>

          <div className="py-5 md:py-6 text-center">

            <p className="text-white uppercase tracking-[2px] md:tracking-[4px] text-[10px] md:text-[12px] font-black leading-[1.8]">
              All Clothing Is Made To Order • Printed On Demand • Delivery Typically Takes 7–10 Business Days
            </p>

          </div>

        </LayoutContainer>

      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-12 md:py-20">

        <LayoutContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10">

            {[...products]
              .sort((a: any, b: any) => {

                const aAvailable =
                  a?.node?.variants?.edges?.[0]?.node
                    ?.availableForSale

                const bAvailable =
                  b?.node?.variants?.edges?.[0]?.node
                    ?.availableForSale

                if (aAvailable === bAvailable)
                  return 0

                return aAvailable ? -1 : 1
              })
              .map(({ node }: any) => {

                const variantId =
                  node?.variants?.edges?.[0]?.node?.id

                const availableForSale =
                  node?.variants?.edges?.[0]?.node?.availableForSale

                const variantCount =
                  node?.variants?.edges?.length || 0

                return (
                  <ProductCard
                    key={node.id}

                    image={node.featuredImage?.url}

                    title={node.title}

                    price={`$${Math.round(
                      node.priceRange.minVariantPrice.amount
                    )}`}

                    subtitle="Precision Apparel"

                    handle={node.handle}

                    variantId={variantId}

                    availableForSale={availableForSale}

                    variantCount={variantCount}
                  />
                )
              })}

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}