import { useState } from "react"
import Link from "next/link"

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa"

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="w-full bg-black/20 backdrop-blur-3xl border-b border-white/10">

        <div className="max-w-[1920px] mx-auto px-5 md:px-14">

          <div className="h-[68px] md:h-[82px] flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-white text-[20px]"
              >
                <FaBars />
              </button>

              {/* LOGO */}
              <Link href="/" className="block flex-shrink-0">

                <h1 className="text-[20px] md:text-[34px] font-black tracking-[2px] md:tracking-[4px] leading-none text-white">
                  PRECISION CUES
                </h1>

                <p className="text-[#D97732] text-[7px] md:text-[10px] tracking-[4px] md:tracking-[6px] uppercase mt-1 md:mt-2 font-semibold">
                  Confidence Starts Here
                </p>

              </Link>

            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-16 uppercase text-[15px] tracking-[2px] font-bold text-white">

              <Link href="/" className="hover:text-[#D97732] transition">
                Shop All
              </Link>

              <Link href="/cues" className="hover:text-[#D97732] transition">
                Cues
              </Link>

              <Link href="/cases" className="hover:text-[#D97732] transition">
                Cases
              </Link>

              <Link href="/jerseys" className="hover:text-[#D97732] transition">
                Jerseys
              </Link>

              <Link href="/chalk-gloves" className="hover:text-[#D97732] transition">
                Chalk & Gloves
              </Link>

              <Link href="/apparel" className="hover:text-[#D97732] transition">
                Apparel
              </Link>

            </nav>

            {/* RIGHT */}
<Link
  href="/cart"
  className="relative text-[22px] md:text-[28px] text-white hover:text-[#D97732] transition flex-shrink-0"
>

  <FaShoppingCart />

  <span className="absolute -top-2 -right-2 bg-[#D97732] text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold">
    0
  </span>

</Link>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[999] transition duration-300 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >

        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* PANEL */}
        <div
          className={`absolute top-0 left-0 h-full w-[85%] max-w-[340px] bg-[#050505] border-r border-white/10 p-8 transition duration-300 ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >

          {/* TOP */}
          <div className="flex items-center justify-between mb-12">

            <div>

              <h2 className="text-[24px] font-black tracking-[2px] text-white leading-none">
                PRECISION CUES
              </h2>

              <p className="text-[#D97732] uppercase tracking-[4px] text-[8px] mt-2 font-bold">
                Confidence Starts Here
              </p>

            </div>

            <button
              onClick={() => setMobileOpen(false)}
              className="text-white text-[22px]"
            >
              <FaTimes />
            </button>

          </div>

          {/* LINKS */}
          <nav className="flex flex-col gap-8 uppercase text-[15px] tracking-[3px] font-bold text-white">

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#D97732] transition"
            >
              Shop All
            </Link>

            <Link
              href="/cues"
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#D97732] transition"
            >
              Cues
            </Link>

            <Link
              href="/cases"
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#D97732] transition"
            >
              Cases
            </Link>

            <Link
              href="/jerseys"
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#D97732] transition"
            >
              Jerseys
            </Link>

            <Link
              href="/chalk-gloves"
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#D97732] transition"
            >
              Chalk & Gloves
            </Link>

            <Link
              href="/apparel"
              onClick={() => setMobileOpen(false)}
              className="hover:text-[#D97732] transition"
            >
              Apparel
            </Link>

            <div className="border-t border-white/10 pt-8 mt-4 flex flex-col gap-6 text-gray-400 text-[14px] normal-case tracking-normal">

              <Link href="/about">
                About Us
              </Link>

              <Link href="/wholesale">
                Wholesale
              </Link>

              <Link href="/contact">
                Contact
              </Link>

            </div>

          </nav>

        </div>

      </div>
    </>
  )
}