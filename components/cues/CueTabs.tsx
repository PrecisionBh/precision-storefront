import LayoutContainer from "@/components/LayoutContainer"

export default function CueTabs() {
  return (
    <div className="bg-[#111111] border-b border-black/10 sticky top-[104px] md:top-[124px] z-40">

      <LayoutContainer>

        <div className="flex items-center gap-8 md:gap-14 overflow-x-auto whitespace-nowrap scrollbar-hide">

          <a
            href="#top"
            className="uppercase tracking-[2px] md:tracking-[4px] text-[#D97732] font-bold text-[11px] md:text-sm border-b-2 border-[#D97732] py-4 md:py-6 flex-shrink-0"
          >
            All
          </a>

          <a
            href="#playing"
            className="uppercase tracking-[2px] md:tracking-[4px] text-gray-400 hover:text-white transition font-bold text-[11px] md:text-sm py-4 md:py-6 flex-shrink-0"
          >
            Playing
          </a>

          <a
            href="#break"
            className="uppercase tracking-[2px] md:tracking-[4px] text-gray-400 hover:text-white transition font-bold text-[11px] md:text-sm py-4 md:py-6 flex-shrink-0"
          >
            Break
          </a>

          <a
            href="#jump"
            className="uppercase tracking-[2px] md:tracking-[4px] text-gray-400 hover:text-white transition font-bold text-[11px] md:text-sm py-4 md:py-6 flex-shrink-0"
          >
            Jump
          </a>

        </div>

      </LayoutContainer>

    </div>
  )
}