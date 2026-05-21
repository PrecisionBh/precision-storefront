import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10">

      <div className="max-w-[1600px] mx-auto px-5 md:px-10 xl:px-14 py-10 md:py-14">

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-10 md:gap-12">

          {/* BRAND */}
          <div>

            <h2 className="text-[30px] md:text-[48px] font-black uppercase leading-[0.88] tracking-[2px]">
              Precision
              <br />
              Cues
            </h2>

            <p className="text-[#D97732] uppercase tracking-[4px] md:tracking-[5px] text-[9px] md:text-[10px] font-bold mt-4 md:mt-5">
              Confidence Starts Here
            </p>

            <p className="text-gray-400 text-[13px] md:text-[16px] leading-relaxed mt-5 md:mt-6 max-w-[300px]">
              Premium billiards equipment crafted for players who demand the best.
            </p>

          </div>

          {/* SHOP */}
          <div>

            <h3 className="text-[13px] md:text-[15px] font-black uppercase tracking-[3px] mb-5">
              Shop
            </h3>

            <div className="flex flex-col gap-2.5 text-gray-300 text-[14px] md:text-[15px]">

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

            <h3 className="text-[13px] md:text-[15px] font-black uppercase tracking-[3px] mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-2.5 text-gray-300 text-[14px] md:text-[15px]">

              <Link href="/about" className="hover:text-[#D97732] transition">
                About Us
              </Link>

              <Link href="/wholesale" className="hover:text-[#D97732] transition">
                Wholesale
              </Link>

              <Link href="/contact" className="hover:text-[#D97732] transition">
                Contact
              </Link>

              <Link href="/blogs" className="hover:text-[#D97732] transition">
                Precision Insider
              </Link>

            </div>

          </div>

          {/* SUPPORT */}
          <div>

            <h3 className="text-[13px] md:text-[15px] font-black uppercase tracking-[3px] mb-5">
              Support
            </h3>

            <div className="flex flex-col gap-2.5 text-gray-300 text-[14px] md:text-[15px]">

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
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-500 text-[11px] md:text-[13px]">

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