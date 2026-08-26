import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import Reveal from './Reveal'

const QUESTIONS = [
  {
    q: "I've never sold anything — is this for me?",
    a: 'Yes. The training assumes zero sales experience. The phrases were developed to make sales simple for anyone — you learn what to say and when, then practice it live in office hours.',
  },
  {
    q: 'Do I need to be pushy or aggressive?',
    a: 'No — the entire method is the opposite. The phrases lower resistance and help the buyer picture the result. If you hate feeling "salesy," this was built for you.',
  },
  {
    q: 'Is this only for women?',
    a: 'Yes — built for and sold only to women.',
  },
  {
    q: 'When are the office hours — and what if I miss one?',
    a: 'They run monthly, live. Every session is recorded and the replay is posted in the community, so you never lose one.',
  },
  {
    q: 'How long do I get access?',
    a: 'Lifetime access to the training. The office hours run for 12 months from purchase; replays stay in the community.',
  },
  {
    q: "What if it doesn't work for me?",
    a: "30-day money-back guarantee. Watch the training, try the phrases — if it's not for you, email us for a full refund.",
  },
  {
    q: 'Is this about finding leads?',
    a: "No — it's about closing the conversations you already have: the interested people who never quite say yes.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="w-full bg-bg-base pb-24 md:pb-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-8 md:px-16">
        <Reveal>
          <h2 className="text-center font-display font-light tracking-[-0.03em] leading-[1.05] text-[36px] md:text-[52px] lg:text-[60px] text-[#1a1a1a]">
            Questions, answered
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(16,18,40,0.04),0_12px_32px_-12px_rgba(16,18,40,0.10)]">
            {QUESTIONS.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={item.q} className={i > 0 ? 'border-t border-black/[0.06]' : ''}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
                  >
                    <span className="text-[16px] font-medium text-[#1a1a1a]">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-bg-base text-[18px] leading-none text-[#1a1a1a]"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-6 text-[15px] leading-relaxed text-[#8e8e8e]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
