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

    const alreadySeen =
      localStorage.getItem(
        "precision-popup-seen"
      )

    if (alreadySeen) return

    const timer =
      setTimeout(() => {

        setOpen(true)

      }, 7000)

    return () =>
      clearTimeout(timer)

  }, [])

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault()

    console.log(
      "SUBMIT CLICKED"
    )

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

      console.log(
        "RESPONSE STATUS:",
        response.status
      )

      const data =
        await response.json()

      console.log(
        "API RESPONSE:",
        data
      )

      if (!response.ok) {

        throw new Error(
          "Failed to subscribe"
        )
      }

      setSuccess(true)

      localStorage.setItem(
        "precision-popup-seen",
        "true"
      )

      setTimeout(() => {

        setOpen(false)

      }, 2000)

    } catch (err) {

      console.error(
        "SUBSCRIBE ERROR:",
        err
      )

    } finally {

      setLoading(false)
    }
  }

  if (!open) return null

  return (

    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="bg-[#111111] border border-white/10 rounded-2xl max-w-md w-full p-8 relative shadow-2xl">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>

        {!success ? (
          <>

            <h2 className="text-white text-4xl font-black text-center mb-4">
              Join Team Precision
            </h2>

            <p className="text-gray-300 text-center leading-7 mb-8">

              ✔ New cue drops
              <br />

              ✔ Tournament announcements
              <br />

              ✔ Apparel releases
              <br />

              ✔ Exclusive deals
              <br />

              ✔ Giveaways

            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full h-14 rounded-xl bg-black border border-white/10 px-4 text-white outline-none focus:border-[#D97732]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[#D97732] hover:bg-[#c8641f] transition font-bold text-white text-lg disabled:opacity-50"
              >
                {loading
                  ? "Joining..."
                  : "Join Team Precision"}
              </button>

            </form>

            <p className="text-center text-sm text-gray-400 mt-5">

              + Get 5% OFF your first order

            </p>

          </>
        ) : (

          <div className="text-center py-8">

            <h2 className="text-white text-4xl font-black mb-4">
              You're In 🎱
            </h2>

            <p className="text-gray-300 leading-7">

              Welcome to Team Precision.
              <br />
              Keep an eye on your inbox for:
              <br />
              ✔ New drops
              <br />
              ✔ Exclusive deals
              <br />
              ✔ Giveaways
              <br />
              ✔ Tournament updates

            </p>

          </div>
        )}

      </div>

    </div>
  )
}