import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function ShippingPolicyPage() {
  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative h-[260px] md:h-[320px] overflow-hidden bg-black">

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-8 md:pb-12">

            <div className="max-w-[900px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-3 md:mb-5">
                Support
              </p>

              <h1 className="text-[40px] md:text-[88px] leading-[0.9] font-black uppercase text-white">
                Shipping Policy
              </h1>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* CONTENT */}
      <section className="bg-white text-black py-16 md:py-24">

        <LayoutContainer>

          <div className="max-w-[1050px] space-y-10 md:space-y-16">

            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Processing Times
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">
                Most in-stock orders are processed within 2–5 business days depending on current order volume and product availability.
              </p>

            </div>

            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Shipping Carrier
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">
                Precision ships all orders exclusively through UPS. Tracking information will be provided once your order has shipped.
              </p>

            </div>

            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Jersey Orders
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                All jerseys are fully made-to-order and produced through a third-party printing partner. Because of this, jersey production typically takes approximately 3–4 weeks, though turnaround times may occasionally extend beyond that depending on production volume and seasonal demand.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 mb-5 md:mb-6">
                By purchasing a jersey, customers acknowledge and accept the production timeline associated with custom apparel manufacturing.
              </p>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700 font-semibold">
                Once a jersey order has entered production, there are absolutely no refunds, cancellations, or chargebacks accepted due to production or timing delays.
              </p>

            </div>

            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                Delivery Times
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">
                Delivery times vary depending on UPS transit schedules, weather conditions, and destination location. Precision is not responsible for carrier-related delays once an order has been shipped.
              </p>

            </div>

            <div>

              <h2 className="text-[26px] md:text-[42px] font-black uppercase mb-4 md:mb-6">
                International Orders
              </h2>

              <p className="text-[15px] md:text-[20px] leading-[1.9] md:leading-[2] text-gray-700">
                International customers are responsible for any customs fees, import duties, taxes, or additional charges required by their country.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}