"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const rules = [
  {
    title: "Tournament Format",
    content: [
      "1217 robustness cap. 250 minimum robustness is required no exceptions. No other league substitutions for this tournament",
      "1 game is given every 50 Fargo points.",
      "Maximum of 3 games spot.",
      "Higher robustness team always races up.",
      "Example: 1200 vs 1150 = 6-5 race with the 1200 team going to 6.",
      "Alternate break format.",
      "Played on 7-foot Diamond bar box tables using a Diamond rack.",
    ],
  },

  {
    title: "Gameplay Rules",
    content: [
      "Scratch on the 8-ball is NOT a loss.",
      "8-ball made in the wrong pocket IS a loss.",
      "Either player on the team may break.",
      "Talking between teammates is allowed.",
      "Jump cues are allowed.",
    ],
  },

  {
    title: "Fouls",
    content: [
      "If the same player shoots twice in a row, it is a foul resulting in ball in hand.",
      "Out of rotation is a foul.",
      "A ball jumped off the table is a foul. The ball stays down and incoming player receives ball in hand.",
      "Cue ball fouls only.",
      "Moving two or more balls accidentally during a rack is considered a foul.",
    ],
  },

  {
    title: "Hit Calls",
    content: [
      "If a team wants a hit watched, they must request it BEFORE the shot.",
      "If no one is asked to watch a close hit, the call will favor the shooting team.",
    ],
  },

  {
    title: "Match Timing & Slow Play",
    content: [
      "Teams have 15 minutes to report to their table after a match is called.",
      "At 15 minutes, it is an automatic forfeit.",
      "Matches have a 3-hour time limit.",
      "Slow play abuse may result in forfeiture at tournament director discretion.",
    ],
  },

  {
    title: "Fargo & Player Eligibility",
    content: [
      "ID may be required if players are unknown to Precision Tournaments.",
      "If identification does not match registration information or appears fraudulent, teams may be banned without refund.",
      "Precision Tournaments reserves the right to deny any entry.",
      "Precision Tournaments reserves the right to adjust Fargo robustness if ratings appear manipulated or inaccurate.",
      "Any attempt to manipulate Fargo ratings or player identity may result in disqualification without refund.",
    ],
  },

  {
    title: "Registration & Payments",
    content: [
      "$15 registration fee is NON-REFUNDABLE and required at signup.",
      "Remaining tournament payments must be paid via Zelle or Venmo before the registration deadline.",
      "Registration closes July 17th at 6PM EST.",
      "Online auction begins immediately after registration closes.",
    ],
  },

  {
    title: "Online Auction Rules",
    content: [
      "Auction payments may be paid in cash on-site or through Zelle only.",
      "Players have the right to buy half of themselves at check-in.",
      "Precision Tournaments only deals with the winning bidder directly.",
      "It is NOT the responsibility of Precision Tournaments to collect split payments from additional buyers.",
      "If players buy half of themselves, refunds will be sent back to the winning bidder no later than 2 business days after tournament completion.",
    ],
  },

  {
    title: "Sportsmanship & Conduct",
    content: [
      "Good sportsmanship is required at all times.",
      "We understand emotions and pride come with competition, but disrespectful behavior will not be tolerated.",
      "Unsportsmanlike conduct may result in warnings, game loss, match loss, or removal from the event without refund.",
      "Tournament director decisions are final.",
    ],
  },
]

export default function TournamentRules() {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0)

  return (
    <section className="py-14 md:py-20">

      <div className="max-w-[1200px] mx-auto px-4 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[#D97732] uppercase tracking-[4px] text-xs md:text-sm font-black mb-4">
            Tournament Information
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-black uppercase">
            Rules & Guidelines
          </h2>

          <p className="mt-4 text-white/60 max-w-[800px] mx-auto text-sm md:text-base leading-relaxed">
            Please review all tournament rules carefully before registering.
            By entering this event, players agree to all tournament rules and
            tournament director decisions.
          </p>

        </div>

        {/* ACCORDION */}
        <div className="space-y-4">

          {rules.map((rule, index) => {

            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border border-white/10 rounded-[22px] overflow-hidden bg-[#111111]"
              >

                {/* HEADER */}
                <button
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left hover:bg-white/[0.03] transition"
                >

                  <h3 className="text-white text-lg md:text-2xl font-black uppercase">
                    {rule.title}
                  </h3>

                  <div className="text-[#D97732]">

                    {isOpen ? (
                      <ChevronUp size={28} />
                    ) : (
                      <ChevronDown size={28} />
                    )}

                  </div>

                </button>

                {/* CONTENT */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >

                  <div className="px-6 md:px-8 pb-8">

                    <ul className="space-y-4">

                      {rule.content.map(
                        (item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-3 text-white/75 text-sm md:text-base leading-relaxed"
                          >

                            <div className="w-2 h-2 rounded-full bg-[#D97732] mt-[10px] flex-shrink-0" />

                            <span>{item}</span>

                          </li>
                        )
                      )}

                    </ul>

                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}