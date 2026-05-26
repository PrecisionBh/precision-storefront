"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { supabase } from "../lib/supabase"

type Team = {
  id: number
  status: "registered" | "checked_in"
  registration_paid: boolean
}

export default function TournamentTeams() {

  const [teams, setTeams] =
    useState<Team[]>([])

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    fetchTeams()

  }, [])

  const fetchTeams = async () => {

    try {

      const { data, error } =
        await supabase
          .from("tournament_teams")
          .select(`
            id,
            status,
            registration_paid
          `)
          .order(
            "created_at",
            { ascending: true }
          )

      if (error) {

        console.error(error)

        return
      }

      setTeams(data || [])

    } catch (err) {

      console.error(err)

    } finally {

      setLoading(false)
    }
  }

  const registeredTeams =
    teams.filter(
      (team) =>
        team.status === "registered" ||
        team.status === "checked_in"
    )

  return (
    <section className="py-14 md:py-20">

      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-[#D97732] uppercase tracking-[4px] text-xs md:text-sm font-black mb-4">
            Live Tournament Field
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-black uppercase">
            Registered Teams
          </h2>

          <p className="mt-4 text-white/60 text-sm md:text-base max-w-[700px] mx-auto">
            Team list updates automatically as registrations are submitted and approved.
          </p>

        </div>

        {/* COUNTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">

          <div className="bg-[#111111] border border-white/10 rounded-[22px] p-6 text-center">

            <p className="text-white/50 uppercase tracking-[3px] text-[11px] mb-3">
              Registered Teams
            </p>

            <h3 className="text-[#D97732] text-5xl font-black">

              {loading
                ? "..."
                : registeredTeams.length}

            </h3>

          </div>

          <div className="bg-[#111111] border border-white/10 rounded-[22px] p-6 text-center">

            <p className="text-white/50 uppercase tracking-[3px] text-[11px] mb-3">
              Spots Remaining
            </p>

            <h3 className="text-green-400 text-5xl font-black">

              {loading
                ? "..."
                : 96 - registeredTeams.length}

            </h3>

          </div>

        </div>

        {/* VIEW REGISTERED PLAYERS */}
        <div className="flex justify-center">

          <Link href="/registeredplayers">

            <button
              className="bg-[#D97732] hover:bg-[#c96d2c] transition-all duration-300 text-white uppercase tracking-[3px] text-sm md:text-base font-black px-8 py-5 rounded-full shadow-[0_0_30px_rgba(217,119,50,0.35)]"
            >
              View Registered Players
            </button>

          </Link>

        </div>

      </div>

    </section>
  )
}