export default function Footer() {
  return (
    <footer className="relative z-10 w-full pb-16">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="text-[18px] font-semibold tracking-tight text-white">Sales Seduction</div>
            <div className="flex gap-8 text-[14px]">
              <a href="#" className="text-white/45 transition-colors hover:text-gold">Terms</a>
              <a href="#" className="text-white/45 transition-colors hover:text-gold">Privacy</a>
              <a href="#" className="text-white/45 transition-colors hover:text-gold">Contact</a>
            </div>
          </div>
          <p className="max-w-[90ch] text-[12px] leading-relaxed text-white/30">
            © Alien Tech LLC. Earnings disclaimer: results described on this page are not
            typical and are not a guarantee of your own results. Your outcomes depend on your
            effort, experience, and market.
          </p>
        </div>
      </div>
    </footer>
  )
}
