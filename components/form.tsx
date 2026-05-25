"use client"

import { useMemo, useState } from "react"

import {
  createCart,
  addToCart,
} from "../lib/shopify"

export default function TournamentRegistrationForm() {

  const [player1Name, setPlayer1Name] =
    useState("")

  const [player1Fargo, setPlayer1Fargo] =
    useState("")

  const [player1Phone, setPlayer1Phone] =
    useState("")

  const [player2Name, setPlayer2Name] =
    useState("")

  const [player2Fargo, setPlayer2Fargo] =
    useState("")

  const [agreed, setAgreed] =
    useState(false)

  const [loading, setLoading] =
    useState(false)

  const robustness = useMemo(() => {

    return (
      Number(player1Fargo || 0) +
      Number(player2Fargo || 0)
    )

  }, [player1Fargo, player2Fargo])

  const isOverCap =
    robustness > 1217

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    if (isOverCap) {

      alert(
        "This team exceeds the 1217 robustness cap."
      )

      return
    }

    if (!agreed) {

      alert(
        "You must agree to the tournament rules."
      )

      return
    }

    try {

      setLoading(true)

      // CREATE NEW CART
      const cart =
        await createCart()

      // ADD TO CART
      const updatedCart =
        await addToCart(
          cart.id,

          "gid://shopify/ProductVariant/47695837855938",

          1,

          [
            {
              key:
                "player1_name",

              value:
                player1Name,
            },

            {
              key:
                "player1_fargo",

              value:
                player1Fargo,
            },

            {
              key:
                "player1_phone",

              value:
                player1Phone,
            },

            {
              key:
                "player2_name",

              value:
                player2Name,
            },

            {
              key:
                "player2_fargo",

              value:
                player2Fargo,
            },

            {
              key:
                "robustness",

              value:
                robustness.toString(),
            },
          ]
        )

      // REDIRECT TO CHECKOUT
      window.location.href =
        updatedCart.checkoutUrl

    } catch (err) {

      console.error(err)

      alert(
        "Unable to start checkout."
      )

    } finally {

      setLoading(false)
    }
  }

  return (
    <section className="py-14 md:py-20">

      <div className="max-w-[1100px] mx-auto px-4 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[#D97732] uppercase tracking-[4px] text-xs md:text-sm font-black mb-4">
            Secure Your Spot
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-black uppercase">
            Tournament Registration
          </h2>

          <p className="mt-4 text-white/60 max-w-[750px] mx-auto text-sm md:text-base leading-relaxed">
            A $15 non-refundable registration fee is required at signup.
            Remaining tournament payment must be completed before the registration deadline.
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] border border-white/10 rounded-[28px] p-6 md:p-10 shadow-[0_0_40px_rgba(217,119,50,0.08)]"
        >

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* PLAYER 1 */}
            <div>

              <h3 className="text-white text-2xl font-black uppercase mb-6">
                Player 1
              </h3>

              <div className="space-y-5">

                <div>
                  <label className="block text-white/70 text-sm uppercase tracking-[2px] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={player1Name}
                    onChange={(e) =>
                      setPlayer1Name(
                        e.target.value
                      )
                    }
                    required
                    className="w-full bg-black border border-white/10 rounded-[16px] px-5 py-4 text-white outline-none focus:border-[#D97732] transition"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm uppercase tracking-[2px] mb-2">
                    Fargo Rating
                  </label>

                  <input
                    type="number"
                    value={player1Fargo}
                    onChange={(e) =>
                      setPlayer1Fargo(
                        e.target.value
                      )
                    }
                    required
                    className="w-full bg-black border border-white/10 rounded-[16px] px-5 py-4 text-white outline-none focus:border-[#D97732] transition"
                    placeholder="Enter Fargo"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm uppercase tracking-[2px] mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={player1Phone}
                    onChange={(e) =>
                      setPlayer1Phone(
                        e.target.value
                      )
                    }
                    required
                    className="w-full bg-black border border-white/10 rounded-[16px] px-5 py-4 text-white outline-none focus:border-[#D97732] transition"
                    placeholder="(555) 555-5555"
                  />
                </div>

              </div>

            </div>

            {/* PLAYER 2 */}
            <div>

              <h3 className="text-white text-2xl font-black uppercase mb-6">
                Player 2
              </h3>

              <div className="space-y-5">

                <div>
                  <label className="block text-white/70 text-sm uppercase tracking-[2px] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={player2Name}
                    onChange={(e) =>
                      setPlayer2Name(
                        e.target.value
                      )
                    }
                    required
                    className="w-full bg-black border border-white/10 rounded-[16px] px-5 py-4 text-white outline-none focus:border-[#D97732] transition"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm uppercase tracking-[2px] mb-2">
                    Fargo Rating
                  </label>

                  <input
                    type="number"
                    value={player2Fargo}
                    onChange={(e) =>
                      setPlayer2Fargo(
                        e.target.value
                      )
                    }
                    required
                    className="w-full bg-black border border-white/10 rounded-[16px] px-5 py-4 text-white outline-none focus:border-[#D97732] transition"
                    placeholder="Enter Fargo"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* ROBUSTNESS */}
          <div className="mt-10">

            <div
              className={`rounded-[20px] border px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
                isOverCap
                  ? "border-red-500 bg-red-500/10"
                  : "border-[#D97732]/20 bg-[#D97732]/5"
              }`}
            >

              <div>

                <p className="text-white/60 uppercase tracking-[2px] text-xs mb-2">
                  Team Robustness
                </p>

                <h3
                  className={`text-4xl font-black ${
                    isOverCap
                      ? "text-red-400"
                      : "text-[#D97732]"
                  }`}
                >
                  {robustness}
                </h3>

              </div>

              <div>

                {isOverCap ? (
                  <p className="text-red-400 text-sm md:text-base font-bold">
                    This team exceeds the 1217 cap.
                  </p>
                ) : (
                  <p className="text-white/70 text-sm md:text-base">
                    Team is eligible for registration.
                  </p>
                )}

              </div>

            </div>

          </div>

          {/* AGREEMENT */}
          <div className="mt-8">

            <label className="flex items-start gap-4 cursor-pointer">

              <input
                type="checkbox"
                checked={agreed}
                onChange={() =>
                  setAgreed(!agreed)
                }
                className="mt-1 accent-[#D97732] w-5 h-5"
              />

              <span className="text-white/70 text-sm leading-relaxed">
                I have read and agree to all tournament rules,
                payment requirements, refund policies,
                and tournament director decisions.
              </span>

            </label>

          </div>

          {/* BUTTON */}
          <div className="mt-10">

            <button
              type="submit"
              disabled={
                isOverCap || loading
              }
              className={`w-full rounded-[20px] py-5 text-lg md:text-xl font-black uppercase tracking-[3px] transition ${
                isOverCap
                  ? "bg-red-500/30 text-red-300 cursor-not-allowed"
                  : "bg-[#D97732] hover:bg-[#c96d2c] text-white shadow-[0_0_35px_rgba(217,119,50,0.35)]"
              }`}
            >
              {loading
                ? "Redirecting To Checkout..."
                : "Secure Spot & Pay Deposit"}
            </button>

          </div>

        </form>

      </div>

    </section>
  )
}