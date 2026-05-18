import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function ContactPage() {
  return (
    <main className="bg-[#111111] text-white">

      {/* STICKY HEADER STACK */}
      <div className="fixed top-0 left-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </div>

      {/* HERO */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-10 md:pb-16">

            <div className="max-w-[920px]">

              <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[8px] text-[10px] md:text-sm font-bold mb-4 md:mb-6">
                Get In Touch
              </p>

              <h1 className="text-[52px] md:text-[120px] leading-[0.9] font-black uppercase text-white">
                Contact
              </h1>

              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed mt-5 md:mt-8 max-w-[760px]">
                Questions, sponsorship inquiries, wholesale opportunities, or support — we’re here to help.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white text-black py-16 md:py-28">

        <LayoutContainer>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">

            {/* LEFT */}
            <div>

              <p className="text-[#D97732] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm font-black mb-4 md:mb-6">
                Reach Out
              </p>

              <h2 className="text-[40px] md:text-[80px] leading-[0.95] font-black uppercase">
                Let’s Talk
              </h2>

              <div className="mt-10 md:mt-16 space-y-6 md:space-y-10 text-[15px] md:text-[20px] text-gray-700">

                <div>
                  <p className="uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm text-gray-500 mb-2">
                    Email
                  </p>

                  <p className="font-semibold break-words">
                    support@precisioncues.com
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm text-gray-500 mb-2">
                    Response Time
                  </p>

                  <p className="font-semibold">
                    Typically within 24-48 hours
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="space-y-5 md:space-y-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-black/10 bg-[#F7F7F7] px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none rounded-xl"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-black/10 bg-[#F7F7F7] px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none rounded-xl"
              />

              <textarea
                placeholder="Your Message"
                rows={7}
                className="w-full border border-black/10 bg-[#F7F7F7] px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none resize-none rounded-xl"
              />

              <button className="w-full md:w-auto bg-[#D97732] hover:opacity-90 transition px-8 md:px-12 py-4 md:py-5 uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm font-black text-white rounded-xl">
                Send Message
              </button>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}