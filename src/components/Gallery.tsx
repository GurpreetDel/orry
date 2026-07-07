import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gallery } from '../data/content'
import { SectionHeading, Reveal } from './Section'

const shots = gallery.filter((g) => g.src)

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % shots.length)),
    [],
  )
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, next, prev])

  const active = index === null ? null : shots[index]

  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading kicker="The Frames" title="Gallery" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {shots.map((item, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <button
              onClick={() => setIndex(i)}
              className="group relative block aspect-square w-full cursor-pointer overflow-hidden rounded-xl border border-white/8 text-left"
            >
              <img
                src={item.src!}
                alt={item.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />

              {/* expand icon */}
              <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/60 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                </svg>
              </span>

              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-xs font-medium tracking-wide text-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </button>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-mist/60">
        Tap any photo to enlarge · use ← → to browse. Publicity/press photos — credits in the footer.
      </p>

      {/* lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-xl sm:p-8"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
            >
              ✕
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous"
              className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-2xl text-white/80 transition-colors hover:border-gold hover:text-gold sm:left-8"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next"
              className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-2xl text-white/80 transition-colors hover:border-gold hover:text-gold sm:right-8"
            >
              ›
            </button>

            <motion.figure
              key={index}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 26, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[85vh] max-w-3xl flex-col items-center"
            >
              <img
                src={active.src!}
                alt={active.caption}
                className="max-h-[75vh] w-auto rounded-2xl border border-white/10 object-contain shadow-2xl"
              />
              <figcaption className="mt-4 text-center text-sm text-white/80">
                {active.caption}
                <span className="ml-2 text-mist">
                  · {index! + 1}/{shots.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
