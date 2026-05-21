import { useState } from "react"

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

export default function WholesaleLoginPage() {

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")

  const [showPassword,
    setShowPassword] =
    useState(false)

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  const handleLogin = async () => {

    try {

      setLoading(true)
      setError("")

      const response =
        await fetch("/api/customer-login", {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        })

      const data =
        await response.json()

      if (!response.ok) {

        throw new Error(
          data.error ||
          "Login failed."
        )
      }

      localStorage.setItem(
        "customerAccessToken",
        data.accessToken
      )

      localStorage.setItem(
        "wholesaleCustomer",
        JSON.stringify({
          email:
            data.customer.email,

          firstName:
            data.customer.firstName,

          tags:
            data.customer.tags,

          tier:
            data.tier,

          discount:
            data.discount,
        })
      )

      window.location.href =
        "/"

    } catch (err: any) {

      setError(
        err.message ||
        "Something went wrong."
      )

    } finally {

      setLoading(false)
    }
  }

  const handleForgotPassword =
    async () => {

      if (!email) {

        setError(
          "Please enter your email first."
        )

        return
      }

      try {

        setLoading(true)
        setError("")

        const response =
          await fetch(
            "/api/customer-recover",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                email,
              }),
            }
          )

        const data =
          await response.json()

        if (!response.ok) {

          throw new Error(
            data.error ||
            "Unable to send reset email."
          )
        }

        alert(
          "Password reset email sent."
        )

      } catch (err: any) {

        setError(
          err.message ||
          "Something went wrong."
        )

      } finally {

        setLoading(false)
      }
    }

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

            <div className="bg-[#F7F7F7] border border-black/5 rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

              <p className="text-[#D97732] uppercase tracking-[4px] text-[11px] font-black mb-4 text-center">
                Dealer Access
              </p>

              <h2 className="text-[38px] md:text-[58px] leading-[0.95] font-black uppercase text-center">
                Dealer Login
              </h2>

              <p className="text-gray-500 text-[15px] leading-relaxed mt-5 max-w-[460px] mx-auto text-center">
                Login using your existing Shop / Shopify customer account credentials.
              </p>

              <div className="mt-10">

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full border border-black/10 rounded-2xl px-5 py-4 mb-4 outline-none focus:border-[#D97732]"
                />

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    className="w-full border border-black/10 rounded-2xl px-5 py-4 pr-14 outline-none focus:border-[#D97732]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                  >
                    {showPassword
                      ? <FaEyeSlash />
                      : <FaEye />}
                  </button>

                </div>

                {error && (
                  <p className="text-red-500 text-sm mt-4">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="mt-6 w-full bg-black hover:bg-[#D97732] transition px-10 py-5 uppercase tracking-[3px] text-sm font-black rounded-2xl text-white shadow-lg disabled:opacity-50"
                >
                  {loading
                    ? "Logging In..."
                    : "Login"}
                </button>

                <button
                  onClick={
                    handleForgotPassword
                  }
                  disabled={loading}
                  className="mt-4 text-sm text-[#D97732] hover:underline text-center w-full"
                >
                  Forgot Password?
                </button>

              </div>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}