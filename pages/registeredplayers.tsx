"use client"

import { useEffect, useState } from "react"

import AnnouncementBar from "@/components/AnnouncementBar"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LayoutContainer from "@/components/LayoutContainer"

import { supabase } from "../lib/supabase"

type Team = {
  id: number
  player1_name: string
  player2_name: string
  robustness: number
  status: "registered" | "checked_in"
  registration_paid: boolean
}

export default function RegisteredPlayersPage() {

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
            player1_name,
            player2_name,
            robustness,
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

  const getStatus = (
    status: Team["status"]
  ) => {

    switch (status) {

      case "registered":
        return {
          label: "REGISTERED",
          color:
            "bg-[#D97732]/15 text-[#D97732] border-[#D97732]/30",
        }

      case "checked_in":
        return {
          label: "CHECKED IN",
          color:
            "bg-green-500/15 text-green-400 border-green-500/30",
        }

      default:
        return {
          label: status,
          color:
            "bg-white/10 text-white border-white/10",
        }
    }
  }

  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">

      {/* STICKY HEADER */}
      <div className="fixed top-0 left-0 w-full z-50 border-b border-white/5">
        <AnnouncementBar />
        <Navbar />
      </div>

      <section className="pt-[150px] pb-20 md:pb-28">

        <LayoutContainer>

          {/* HEADER */}
          <div className="text-center mb-14">

            <p className="text-[#D97732] uppercase tracking-[4px] text-xs md:text-sm font-black mb-4">
              Precision Tournaments
            </p>

            <h1 className="text-white text-4xl md:text-7xl font-black uppercase leading-none">
              Registered
              <span className="text-[#D97732]">
                {" "}Players
              </span>
            </h1>

            <p className="mt-5 text-white/60 text-sm md:text-lg max-w-[800px] mx-auto leading-relaxed">
              Live tournament registrations update automatically as teams register and payments are confirmed.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">

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
                  : 64 - registeredTeams.length}

              </h3>

            </div>

          </div>

          {/* MAIN FIELD */}
          <div>

            <div className="flex items-center gap-6 mb-8">

              <h2 className="text-white text-3xl md:text-5xl font-black uppercase whitespace-nowrap">
                Main Field
              </h2>

              <div className="h-[2px] w-full bg-gradient-to-r from-[#D97732]/50 to-transparent" />

            </div>

            <div className="overflow-x-auto rounded-[24px] border border-white/10">

              <table className="w-full min-w-[700px] bg-[#111111]">

                <thead>

                  <tr className="border-b border-white/10">

                    <th className="text-left px-6 py-5 text-white/50 uppercase tracking-[3px] text-[11px]">
                      Team #
                    </th>

                    <th className="text-left px-6 py-5 text-white/50 uppercase tracking-[3px] text-[11px]">
                      Players
                    </th>

                    <th className="text-left px-6 py-5 text-white/50 uppercase tracking-[3px] text-[11px]">
                      Robustness
                    </th>

                    <th className="text-left px-6 py-5 text-white/50 uppercase tracking-[3px] text-[11px]">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {registeredTeams.map((team) => {

                    const status =
                      getStatus(team.status)

                    return (
                      <tr
                        key={team.id}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition"
                      >

                        <td className="px-6 py-5 text-white font-black text-lg">
                          #{team.id}
                        </td>

                        <td className="px-6 py-5">

                          <div className="text-white font-bold uppercase text-base md:text-lg">
                            {team.player1_name}
                          </div>

                          <div className="text-white/40 text-sm my-1">
                            &
                          </div>

                          <div className="text-white font-bold uppercase text-base md:text-lg">
                            {team.player2_name}
                          </div>

                        </td>

                        <td className="px-6 py-5 text-[#D97732] font-black text-2xl">
                          {team.robustness}
                        </td>

                        <td className="px-6 py-5">

                          <div
                            className={`inline-flex border rounded-full px-4 py-2 text-[10px] md:text-xs uppercase tracking-[2px] font-black ${status.color}`}
                          >
                            {status.label}
                          </div>

                        </td>

                      </tr>
                    )
                  })}

                </tbody>

              </table>

            </div>

          </div>

        </LayoutContainer>

      </section>

      <Footer />

    </main>
  )
}