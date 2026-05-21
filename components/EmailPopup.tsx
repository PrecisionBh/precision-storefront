"use client"

import { useEffect, useState } from "react"

export default function EmailPopup() {

  const [open, setOpen] =
    useState(false)

  const [email, setEmail] =
    useState("")

  const [loading, setLoading] =
    useState(false)

  const [success, setSuccess] =
    useState(false)

  useEffect(() => {

    // IF USER ALREADY SUBSCRIBED
    const subscribed =
      localStorage.getItem(
        "precision-email-subscribed"
      )

    if (subscribed === "true") {
      return
    }

    // IF USER CLOSED POPUP
    const dismissedUntil =
      localStorage.getItem(
        "precision-popup-dismissed"
      )

    if (dismissedUntil) {

      const now = Date.now()

      if (now < Number(dismissedUntil)) {
        return
      }
    }

    // SHOW POPUP AFTER DELAY
    const timer = setTimeout(() => {

      setOpen(true)

    }, 4000)

    return () => clearTimeout(timer)

  }, [])

  const handleClose = () => {

    setOpen(false)

    // HIDE FOR 7 DAYS
    const sevenDays =
      Date.now() +
      7 * 24 * 60 * 60 * 1000

    localStorage.setItem(
      "precision-popup-dismissed",
      sevenDays.toString()
    )
  }

  const handleSubmit =
    async () => {

      if (!email) return

      try {

        setLoading(true)

        const response =
          await fetch(
            "/api/subscribe",
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

        if (!response.ok) {
          throw new Error(
            "Failed to subscribe"
          )
        }

        // NEVER SHOW AGAIN
        localStorage.setItem(
          "precision-email-subscribed",
          "true"
        )

        setSuccess(true)

        setTimeout(() => {

          setOpen(false)

        }, 1800)

      } catch (err) {

        console.error(err)

        alert(
          "Something went wrong. Please try again."
        )

      } finally {

        setLoading(false)

      }
    }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="w-full max-w-[500px] bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-8 relative shadow-2xl">

        {/* CLOSE */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition text-xl"
        >
          ×
        </button>

        {/* CONTENT */}
        <div className="text-center">

          <p className="text-[#D97732] uppercase tracking-[5px] text-[10px] mb-4">
            Precision Cues
          </p>

          <h2 className="text-white text-[28px] md:text-[40px] font-black leading-[1]">
            GET 5% OFF
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
            Join the Precision family and get
            5% off your first order instantly.
          </p>

          {!success ? (
            <>
              {/* INPUT */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full mt-6 h-[54px] bg-black border border-white/10 rounded-xl px-4 text-white placeholder:text-gray-500 outline-none focus:border-[#D97732] transition"
              />

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-4 h-[54px] bg-[#D97732] hover:opacity-90 transition rounded-xl uppercase tracking-[2px] text-sm font-bold text-white disabled:opacity-50"
              >
                {loading
                  ? "Loading..."
                  : "Claim Discount"}
              </button>
            </>
          ) : (
            <div className="mt-6">

              <div className="w-16 h-16 rounded-full bg-[#D97732]/20 flex items-center justify-center mx-auto">

                <span className="text-[#D97732] text-3xl">
                  ✓
                </span>

              </div>

              <p className="text-white font-bold text-lg mt-4">
                You're In!
              </p>

              <p className="text-gray-400 text-sm mt-2">
                Check your email for your
                discount code.
              </p>

            </div>
          )}

        </div>

      </div>

    </div>
  )
}