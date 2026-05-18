import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10">

      <div className="max-w-[1920px] mx-auto px-10 md:px-14 py-16">

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-14">

          {/* BRAND */}
          <div>

            <h2 className="text-[42px] md:text-[64px] font-black uppercase leading-[0.9] tracking-[3px]">
              Precision
              <br />
              Cues
            </h2>

            <p className="text-[#D97732] uppercase tracking-[6px] text-xs font-bold mt-6">
              Confidence Starts Here
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-[340px]">
              Premium billiards equipment crafted for players who demand the best.
            </p>

          </div>

          {/* SHOP */}
          <div>

            <h3 className="text-lg font-black uppercase tracking-[4px] mb-7">
              Shop
            </h3>

            <div className="flex flex-col gap-3 text-gray-300 text-lg">

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

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="text-lg font-black uppercase tracking-[4px] mb-7">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-300 text-lg">

              <Link href="/about" className="hover:text-[#D97732] transition">
                About Us
              </Link>

              <Link href="/wholesale" className="hover:text-[#D97732] transition">
                Wholesale
              </Link>

              <Link href="/contact" className="hover:text-[#D97732] transition">
                Contact
              </Link>

            </div>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="text-lg font-black uppercase tracking-[4px] mb-7">
              Support
            </h3>

            <div className="flex flex-col gap-3 text-gray-300 text-lg">

              <Link href="/shipping-policy" className="hover:text-[#D97732] transition">
                Shipping Policy
              </Link>

              <Link href="/returns" className="hover:text-[#D97732] transition">
                Returns
              </Link>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

          <p>
            © 2026 Precision Cues. All rights reserved.
          </p>

          <p>
            Powered by Shopify
          </p>

        </div>

      </div>

    </footer>
  )
}