import { useState } from "react"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function ContactPage() {

  const [name, setName] =
    useState("")

  const [email, setEmail] =
    useState("")

  const [subject, setSubject] =
    useState("")

  const [message, setMessage] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [showSuccess, setShowSuccess] =
    useState(false)

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault()

    try {

      setLoading(true)

      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              subject,
              message,
            }),
          }
        )

      const data =
        await response.json()

      if (data.success) {

        setShowSuccess(true)

        setName("")
        setEmail("")
        setSubject("")
        setMessage("")

      } else {

        alert(
          "Something went wrong. Please try again."
        )
      }

    } catch (error) {

      console.error(error)

      alert(
        "Something went wrong. Please try again."
      )

    } finally {

      setLoading(false)
    }
  }

  return (
    <main className="bg-[#111111] text-white">

      {/* SUCCESS MODAL */}
      {showSuccess && (

        <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-6">

          <div className="bg-white text-black max-w-[520px] w-full rounded-3xl p-10 text-center shadow-2xl">

            <div className="w-20 h-20 rounded-full bg-[#D97732] mx-auto flex items-center justify-center text-white text-4xl font-black">
              ✓
            </div>

            <h2 className="text-[34px] font-black uppercase mt-6">
              Message Sent
            </h2>

            <p className="text-gray-600 text-[17px] leading-relaxed mt-4">
              Your email has been sent! We'll be in touch shortly.
            </p>

            <button
              onClick={() =>
                setShowSuccess(false)
              }
              className="mt-8 bg-[#D97732] hover:opacity-90 transition px-10 py-4 rounded-xl text-white uppercase tracking-[3px] text-sm font-black"
            >
              Close
            </button>

          </div>

        </div>

      )}

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
                    precision.bh@gmail.com
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
            <form
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-8"
            >

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                required
                className="w-full border border-black/10 bg-[#F7F7F7] px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none rounded-xl"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
                className="w-full border border-black/10 bg-[#F7F7F7] px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none rounded-xl"
              />

              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) =>
                  setSubject(
                    e.target.value
                  )
                }
                required
                className="w-full border border-black/10 bg-[#F7F7F7] px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none rounded-xl"
              />

              <textarea
                placeholder="Your Message"
                rows={7}
                value={message}
                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }
                required
                className="w-full border border-black/10 bg-[#F7F7F7] px-5 md:px-6 py-4 md:py-5 text-base md:text-lg outline-none resize-none rounded-xl"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-[#D97732] hover:opacity-90 transition px-8 md:px-12 py-4 md:py-5 uppercase tracking-[2px] md:tracking-[4px] text-[11px] md:text-sm font-black text-white rounded-xl disabled:opacity-60"
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}