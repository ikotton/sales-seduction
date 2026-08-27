import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Rise, Rule, Words } from './Kinetic'

const QUESTIONS = [
  {
    q: "I've never sold anything. Is this for me?",
    a: 'Yes. The training assumes zero sales experience. The phrases were developed to make sales simple for anyone. You learn what to say and when, then practice it live in office hours.',
  },
  {
    q: 'Do I need to be pushy or aggressive?',
    a: 'No. The entire method is the opposite. The phrases lower resistance and help the buyer picture the result. If you hate feeling "salesy," this was built for you.',
  },
  {
    q: 'Is this only for women?',
    a: 'Yes. Built for and sold only to women.',
  },
  {
    q: 'When are the office hours, and what if I miss one?',
    a: 'They run monthly, live. Every session is recorded and the replay is posted in the community, so you never lose one.',
  },
  {
    q: 'How long do I get access?',
    a: 'Lifetime access to the training. The office hours run for 12 months from purchase; replays stay in the community.',
  },
  {
    q: "What if it doesn't work for me?",
    a: "30-day money-back guarantee. Watch the training, try the phrases. If it's not for you, email us for a full refund.",
  },
  {
    q: 'Is this about finding leads?',
    a: "No. It's about closing the conversations you already have: the interested people who never quite say yes.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative z-10 w-full scroll-mt-24 pb-32 md:pb-44">
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 lg:px-20">
        <Rise>
          <div className="flex items-baseline gap-5">
            <span className="font-instrument text-[15px] text-gold">07</span>
            <span className="text-[11px] uppercase tracking-[0.24em] text-white/40">Before you ask</span>
          </div>
        </Rise>
        <Rule className="mt-5" />

        <h2 className="mt-12 font-instrument text-[44px] leading-[0.95] tracking-[-0.02em] text-white sm:text-[64px] lg:text-[86px]">
          <Words text="Questions, answered" />
        </h2>

        <div className="mt-16">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-t border-white/10">
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}
                  className="group flex w-full items-baseline gap-6 py-8 text-left md:gap-10 md:py-10">
                  <span className="font-instrument text-[15px] text-white/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex-1 font-instrument text-[24px] leading-tight transition-colors duration-300 md:text-[32px] lg:text-[38px] ${
                    isOpen ? 'text-gold' : 'text-white group-hover:text-gold'
                  }`}>
                    {item.q}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 text-[20px] leading-none text-white">
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                      <p className="max-w-[62ch] pb-10 text-[16px] leading-relaxed text-white/55 md:pl-[calc(15px+2.5rem)] md:text-[17px]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  )
}
