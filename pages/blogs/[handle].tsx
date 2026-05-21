import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import { shopifyFetch } from "@/lib/shopify"

const getArticleQuery = `
query getArticle($handle: String!) {

  blogs(first: 10) {

    edges {

      node {

        title
        handle

        articles(first: 50) {

          edges {

            node {

              title
              handle
              contentHtml
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

export async function getServerSideProps({
  params,
}: any) {

  const res = await shopifyFetch({
    query: getArticleQuery,

    variables: {
      handle: params.handle,
    },
  })

  const blogs =
    res?.body?.data?.blogs?.edges || []

  let article = null

  blogs.forEach((blog: any) => {

    blog.node.articles.edges.forEach(
      ({ node }: any) => {

        if (
          node.handle === params.handle
        ) {
          article = node
        }
      }
    )
  })

  if (!article) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      article,
    },
  }
}

export default function BlogPostPage({
  article,
}: any) {

  return (
    <>
      <AnnouncementBar />

      <Navbar />

      <main className="bg-black min-h-screen text-white py-20">

        <LayoutContainer>

          <div className="max-w-4xl mx-auto">

            {/* CATEGORY */}
            <p className="text-[#D97732] uppercase tracking-[5px] text-xs mb-5">
              Precision Insider
            </p>

            {/* TITLE */}
            <h1 className="text-4xl md:text-7xl font-black leading-[0.95]">
              {article.title}
            </h1>

            {/* DATE */}
            <p className="text-gray-500 mt-6 text-sm">
              {new Date(
                article.publishedAt
              ).toLocaleDateString()}
            </p>

            {/* IMAGE */}
            {article.image?.url && (

              <div className="mt-10 rounded-3xl overflow-hidden border border-white/10">

                <img
                  src={article.image.url}
                  alt={article.title}
                  className="w-full object-cover"
                />

              </div>
            )}

            {/* CONTENT */}
            <div
              className="
                prose
                prose-invert
                prose-lg
                max-w-none
                mt-12

                prose-headings:text-white
                prose-p:text-gray-300
                prose-strong:text-white
                prose-a:text-[#D97732]
              "
              dangerouslySetInnerHTML={{
                __html:
                  article.contentHtml,
              }}
            />

          </div>

        </LayoutContainer>

      </main>

      <Footer />
    </>
  )
}