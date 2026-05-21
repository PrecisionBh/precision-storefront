import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import Link from "next/link"

import { shopifyFetch } from "@/lib/shopify"

const getBlogsQuery = `
{
  blogs(first: 10) {

    edges {

      node {

        title
        handle

        articles(
          first: 50,
          sortKey: PUBLISHED_AT,
          reverse: true
        ) {

          edges {

            node {

              title
              handle
              excerpt
              publishedAt

              image {
                url
              }
            }
          }
        }
      }
    }
  }
}
`

export async function getServerSideProps() {

  const res = await shopifyFetch({
    query: getBlogsQuery,
  })

  const blogs =
    res?.body?.data?.blogs?.edges || []

  const articles =
    blogs.flatMap(
      (blog: any) =>
        blog.node.articles.edges
    )

  return {
    props: {
      articles,
    },
  }
}

export default function BlogsPage({
  articles,
}: any) {

  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main className="bg-black min-h-screen text-white py-20">

        <LayoutContainer>

          {/* HEADER */}
          <div className="mb-14">

            <p className="text-[#D97732] uppercase tracking-[5px] text-xs mb-4">
              Precision Insider
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none">
              BLOGS &
              <span className="text-[#D97732]">
                {" "}GUIDES
              </span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl">
              Tips, cue guides, product breakdowns,
              and everything serious players need
              to level up their game.
            </p>

          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {articles.map(
              ({ node }: any) => (

                <Link
                  key={node.handle}
                  href={`/blogs/${node.handle}`}
                  className="group border border-white/10 rounded-3xl overflow-hidden bg-[#111111] hover:border-[#D97732] transition"
                >

                  {/* IMAGE */}
                  {node.image?.url && (

                    <div className="aspect-[4/3] overflow-hidden">

                      <img
                        src={node.image.url}
                        alt={node.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />

                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-6">

                    <p className="text-[#D97732] text-xs uppercase tracking-[4px] mb-3">
                      Precision Insider
                    </p>

                    <h2 className="text-2xl font-black leading-tight">
                      {node.title}
                    </h2>

                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                      {node.excerpt}
                    </p>

                    <p className="mt-6 text-sm font-bold text-white group-hover:text-[#D97732] transition">
                      Read More →
                    </p>

                  </div>

                </Link>
              )
            )}

          </div>

        </LayoutContainer>

      </main>

      <Footer />
    </>
  )
}