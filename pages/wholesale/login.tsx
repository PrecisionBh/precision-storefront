import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function WholesaleLoginPage() {

  const shopifyLogin =
    "https://shopify.com/67781132482/authentication/login"

  const forgotPassword =
    "https://shopify.com/67781132482/account/reset"

  return (
    <main className="bg-[#111111] text-white min-h-screen">

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">

        <AnnouncementBar />
        <Navbar />

      </div>

      <div className="h-[104px] md:h-[124px]" />

      {/* HERO */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
          alt="Wholesale Login"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-10 md:pb-14">

            <div className="max-w-[900px]">

              <p className="text-[#D97732] uppercase tracking-[6px] text-[10px] md:text-sm font-bold mb-4">
                Authorized Dealers
              </p>

              <h1 className="text-[48px] md:text-[110px] leading-[0.9] font-black uppercase">
                Wholesale Login
              </h1>

              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed mt-5 max-w-[760px]">
                Access dealer pricing, wholesale ordering, and Precision dealer resources.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* LOGIN */}
      <section className="bg-white text-black py-16 md:py-28">

        <LayoutContainer>

          <div className="max-w-[620px] mx-auto">

            <div className="bg-[#F7F7F7] border border-black/5 rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] text-center">

              <p className="text-[#D97732] uppercase tracking-[4px] text-[11px] font-black mb-4">
                Dealer Access
              </p>

              <h2 className="text-[38px] md:text-[58px] leading-[0.95] font-black uppercase">
                Login With Shop
              </h2>

              <p className="text-gray-500 text-[15px] leading-relaxed mt-5 max-w-[460px] mx-auto">
                Existing Precision wholesale dealers can continue using their Shop / Shopify account credentials.
              </p>

              {/* LOGIN */}
              <a
                href={shopifyLogin}
                className="mt-10 w-full flex items-center justify-center bg-black hover:bg-[#D97732] transition px-10 py-5 uppercase tracking-[3px] text-sm font-black rounded-2xl text-white shadow-lg"
              >
                Login With Shop
              </a>

              {/* FORGOT PASSWORD */}
              <div className="mt-5">

                <a
                  href={forgotPassword}
                  className="text-[#D97732] text-sm font-bold hover:underline"
                >
                  Forgot Password?
                </a>

              </div>

              {/* CREATE ACCOUNT */}
              <div className="mt-10 border-t border-black/10 pt-8">

                <p className="text-gray-500 text-sm">
                  Approved to become a dealer?
                </p>

                <a
                  href={shopifyLogin}
                  className="inline-block mt-4 bg-[#D97732] hover:bg-black transition px-8 py-4 rounded-2xl uppercase tracking-[2px] text-sm font-black text-white"
                >
                  Create Your Dealer Login
                </a>

              </div>

              {/* APPLY */}
              <div className="mt-10 border-t border-black/10 pt-8">

                <p className="text-gray-500 text-sm">
                  Interested in becoming a dealer?
                </p>

                <a
                  href="/wholesale/apply"
                  className="inline-block mt-4 text-[#D97732] font-black uppercase tracking-[2px] text-sm"
                >
                  Apply Here
                </a>

              </div>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}