import LayoutContainer from "@/components/LayoutContainer"
import ProductCard from "@/components/ProductCard"

type Props = {
  id?: string
  eyebrow: string
  title: string
  products: any[]
}

export default function CueSection({
  id,
  eyebrow,
  title,
  products,
}: Props) {

  return (
    <section
      id={id}
      className="bg-white py-16 md:py-24 scroll-mt-[120px] md:scroll-mt-[140px]"
    >

      <LayoutContainer>

        {/* HEADER */}
        <div className="mb-10 md:mb-16">

          <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-black mb-3 md:mb-5">
            {eyebrow}
          </p>

          <h2 className="text-[38px] sm:text-[48px] md:text-[84px] leading-[0.95] font-black uppercase text-black break-words">
            {title}
          </h2>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10">

          {products.map(({ node }: any) => {

            const variantId =
              node?.variants?.edges?.[0]?.node?.id

            return (
              <ProductCard
                key={node.id}

                image={node.featuredImage?.url}

                title={node.title}

                price={`$${Math.round(
                  node.priceRange.minVariantPrice.amount
                )}`}

                subtitle="Precision Collection"

                handle={node.handle}

                variantId={variantId}
              />
            )
          })}

        </div>

      </LayoutContainer>

    </section>
  )
}