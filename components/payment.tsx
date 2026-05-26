export default function PaymentInfo() {

  return (
    <section className="py-10 md:py-14">

      <div className="max-w-[1200px] mx-auto px-4 md:px-10">

        <div className="relative overflow-hidden rounded-[30px] border border-[#D97732]/30 bg-[#111111] px-6 md:px-10 py-8 md:py-10 shadow-[0_0_50px_rgba(217,119,50,0.12)]">

          {/* GLOWS */}
          <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#D97732]/10 blur-[100px]" />

          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#D97732]/10 blur-[100px]" />

          <div className="relative">

            {/* HEADER */}
            <div className="text-center mb-10">

              <p className="text-[#D97732] uppercase tracking-[4px] text-xs md:text-sm font-black mb-4">
                Payment Information
              </p>

              <h2 className="text-white text-3xl md:text-5xl font-black uppercase">
                Tournament Payments
              </h2>

              <p className="mt-4 text-white/60 text-sm md:text-base max-w-[750px] mx-auto leading-relaxed">
                Tournament entries may be paid using the payment methods below or with cash at check-in.
                Any auctioned team that does not show up for the event will be fully refunded to the winning bidder.
              </p>

            </div>

            {/* PAYMENT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">

              {/* VENMO */}
              <div className="bg-black/60 border border-white/10 rounded-[22px] p-5 md:p-6 text-center">

                <p className="text-[#D97732] uppercase tracking-[3px] text-xs font-black mb-3">
                  Venmo
                </p>

                <h3 className="text-white text-xl md:text-3xl font-black break-words leading-tight">
                  @precision-billiards
                </h3>

                <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
                  Send remaining tournament payment through Venmo.
                </p>

              </div>

              {/* ZELLE */}
              <div className="bg-black/60 border border-white/10 rounded-[22px] p-5 md:p-6 text-center">

                <p className="text-[#D97732] uppercase tracking-[3px] text-xs font-black mb-3">
                  Zelle
                </p>

                <h3 className="text-white text-lg md:text-2xl font-black break-words leading-tight">
                  precision.bh@gmail.com
                </h3>

                <p className="mt-4 text-white/60 text-sm md:text-base leading-relaxed">
                  Zelle payments accepted for tournament and auction balances.
                </p>

              </div>

            </div>

            {/* FOOTER NOTE */}
            <div className="mt-8 text-center">

              <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[900px] mx-auto">
                Players may pay auction and remaining balances in cash at tournament check-in. All side pots must be paid in cash at check-in on site.
    
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}