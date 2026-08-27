/**
 * Brand lockup from the kit: a lipstick tube stands in for the "i" so the
 * wordmark reads "Sales Seduct[i]on". Dark-ground colours by default.
 */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="font-brand text-[19px] leading-none text-[#EDEEF5] md:text-[23px]">
        Sales&nbsp;Seduct
      </span>
      <svg
        viewBox="0 0 30 42"
        aria-hidden="true"
        className="-mx-[3px] h-[27px] w-[19px] shrink-0 md:-mx-[4px] md:h-[32px] md:w-[23px]"
      >
        <rect x="8" y="18" width="14" height="20" rx="2" fill="#EDEEF5" />
        <path d="M10 18 v-8 q0 -4 5 -6 q5 2 5 6 v8 z" fill="#E85D75" />
      </svg>
      <span className="font-brand text-[19px] leading-none text-[#EDEEF5] md:text-[23px]">on</span>
    </span>
  )
}
