import { useState } from "react"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function WholesaleApplyPage() {

  const [
    businessName,
    setBusinessName,
  ] = useState("")

  const [
    contactName,
    setContactName,
  ] = useState("")

  const [email, setEmail] =
    useState("")

  const [phone, setPhone] =
    useState("")

  const [website, setWebsite] =
    useState("")

  const [
    yearsInBusiness,
    setYearsInBusiness,
  ] = useState("")

  const [message, setMessage] =
    useState("")

  const [
    resaleCertificate,
    setResaleCertificate,
  ] = useState<File | null>(null)

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

      const formData =
        new FormData()

      formData.append(
        "businessName",
        businessName
      )

      formData.append(
        "contactName",
        contactName
      )

      formData.append(
        "email",
        email
      )

      formData.append(
        "phone",
        phone
      )

      formData.append(
        "website",
        website
      )

      formData.append(
        "yearsInBusiness",
        yearsInBusiness
      )

      formData.append(
        "message",
        message
      )

      if (resaleCertificate) {

        formData.append(
          "resaleCertificate",
          resaleCertificate
        )
      }

      const response =
        await fetch(
          "/api/wholesale-application",
          {
            method: "POST",
            body: formData,
          }
        )

      const data =
        await response.json()

      if (data.success) {

        setShowSuccess(true)

        setBusinessName("")
        setContactName("")
        setEmail("")
        setPhone("")
        setWebsite("")
        setYearsInBusiness("")
        setMessage("")
        setResaleCertificate(null)

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
    <main className="bg-[#111111] text-white min-h-screen">

      {/* SUCCESS MODAL */}
      {showSuccess && (

        <div className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-6">

          <div className="bg-white text-black max-w-[520px] w-full rounded-3xl p-10 text-center shadow-2xl">

            <div className="w-20 h-20 rounded-full bg-[#D97732] mx-auto flex items-center justify-center text-white text-4xl font-black">
              ✓
            </div>

            <h2 className="text-[34px] font-black uppercase mt-6">
              Application Submitted
            </h2>

            <p className="text-gray-600 text-[17px] leading-relaxed mt-4">
              Thank you for applying to become a Precision dealer. We’ll review your application and be in touch shortly.
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

      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">

        <AnnouncementBar />
        <Navbar />

      </div>

      <div className="h-[104px] md:h-[124px]" />

      {/* HERO */}
      <section className="relative h-[320px] md:h-[420px] overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070&auto=format&fit=crop"
          alt="Wholesale"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

        <LayoutContainer className="relative z-10 h-full">

          <div className="h-full flex items-end pb-10 md:pb-14">

            <div className="max-w-[900px]">

              <p className="text-[#D97732] uppercase tracking-[6px] text-[10px] md:text-sm font-bold mb-4">
                Dealer Program
              </p>

              <h1 className="text-[48px] md:text-[110px] leading-[0.9] font-black uppercase">
                Wholesale
              </h1>

              <p className="text-gray-300 text-sm md:text-[22px] leading-relaxed mt-5 max-w-[760px]">
                Apply to become an authorized Precision dealer and gain access to exclusive wholesale pricing and dealer resources.
              </p>

            </div>

          </div>

        </LayoutContainer>

      </section>

      {/* FORM */}
      <section className="bg-[#F5F5F5] text-black py-16 md:py-28">

        <LayoutContainer>

          <div className="max-w-[1000px] mx-auto">

            <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.08)] border border-black/5">

              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="Business Name"
                    value={businessName}
                    onChange={(e) =>
                      setBusinessName(
                        e.target.value
                      )
                    }
                    required
                    className="w-full border border-black/10 bg-[#FAFAFA] px-6 py-5 rounded-2xl outline-none text-[16px]"
                  />

                  <input
                    type="text"
                    placeholder="Contact Name"
                    value={contactName}
                    onChange={(e) =>
                      setContactName(
                        e.target.value
                      )
                    }
                    required
                    className="w-full border border-black/10 bg-[#FAFAFA] px-6 py-5 rounded-2xl outline-none text-[16px]"
                  />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    type="email"
                    placeholder="Business Email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    required
                    className="w-full border border-black/10 bg-[#FAFAFA] px-6 py-5 rounded-2xl outline-none text-[16px]"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(
                        e.target.value
                      )
                    }
                    required
                    className="w-full border border-black/10 bg-[#FAFAFA] px-6 py-5 rounded-2xl outline-none text-[16px]"
                  />

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="Website or Social Media"
                    value={website}
                    onChange={(e) =>
                      setWebsite(
                        e.target.value
                      )
                    }
                    className="w-full border border-black/10 bg-[#FAFAFA] px-6 py-5 rounded-2xl outline-none text-[16px]"
                  />

                  <input
                    type="text"
                    placeholder="Years In Business"
                    value={yearsInBusiness}
                    onChange={(e) =>
                      setYearsInBusiness(
                        e.target.value
                      )
                    }
                    className="w-full border border-black/10 bg-[#FAFAFA] px-6 py-5 rounded-2xl outline-none text-[16px]"
                  />

                </div>

                {/* RESALE CERTIFICATE */}
                <div>

                  <p className="uppercase tracking-[3px] text-[11px] font-black text-gray-500 mb-4">
                    Resale Certificate (Optional)
                  </p>

                  <div className="bg-[#FAFAFA] border border-black/5 rounded-3xl p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                      <div>

                        <h3 className="text-[24px] md:text-[30px] font-black uppercase text-black">
                          Upload Certificate
                        </h3>

                        <p className="text-gray-500 text-[15px] leading-relaxed mt-4 max-w-[540px]">
                          Upload a valid resale certificate to qualify for tax-exempt wholesale purchasing on approved dealer accounts.
                        </p>

                        <div className="mt-4 text-[13px] text-gray-400 uppercase tracking-[2px]">
                          Accepted:
                          PDF • PNG • JPG
                        </div>

                      </div>

                      <div className="flex-shrink-0">

                        <label className="inline-flex items-center justify-center bg-[#D97732] hover:opacity-90 transition px-8 py-4 rounded-2xl uppercase tracking-[3px] text-[11px] font-black text-white cursor-pointer shadow-lg">

                          Upload File

                          <input
                            type="file"
                            accept=".pdf,.png,.jpg,.jpeg"
                            className="hidden"
                            onChange={(e) =>
                              setResaleCertificate(
                                e.target.files?.[0] ||
                                null
                              )
                            }
                          />

                        </label>

                      </div>

                    </div>

                    {resaleCertificate && (

                      <div className="mt-6 bg-white border border-black/5 rounded-2xl px-5 py-4 shadow-sm">

                        <p className="text-sm font-semibold text-black break-all">
                          {resaleCertificate.name}
                        </p>

                      </div>

                    )}

                  </div>

                </div>

                <textarea
                  placeholder="Tell us about your business..."
                  rows={7}
                  value={message}
                  onChange={(e) =>
                    setMessage(
                      e.target.value
                    )
                  }
                  className="w-full border border-black/10 bg-[#FAFAFA] px-6 py-5 rounded-2xl outline-none resize-none text-[16px]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-[#D97732] hover:opacity-90 transition px-10 py-5 uppercase tracking-[3px] text-sm font-black text-white rounded-2xl shadow-lg disabled:opacity-60"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Application"}
                </button>

              </form>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}