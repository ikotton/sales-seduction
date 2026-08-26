export default function Footer() {
  return (
    <footer className="w-full bg-bg-base pb-16">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex flex-col gap-6 border-t border-black/10 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="font-display text-[19px] font-medium tracking-tight text-[#1a1a1a]">
              sales seduction
            </div>
            <div className="flex gap-8 text-[14px]">
              <a href="#" className="text-[#8e8e8e] transition-colors hover:text-[#1a1a1a]">
                Terms
              </a>
              <a href="#" className="text-[#8e8e8e] transition-colors hover:text-[#1a1a1a]">
                Privacy
              </a>
              <a href="#" className="text-[#8e8e8e] transition-colors hover:text-[#1a1a1a]">
                Contact
              </a>
            </div>
          </div>
          <p className="max-w-[90ch] text-[12px] leading-relaxed text-[#a3a3a3]">
            © Kotton Grammer Media. Earnings disclaimer: results described on this page are not
            typical and are not a guarantee of your own results. Your outcomes depend on your effort,
            experience, and market.
          </p>
        </div>
      </div>
    </footer>
  )
}
