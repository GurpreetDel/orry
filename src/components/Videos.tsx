import { useState } from 'react'
import { videos } from '../data/content'
import type { Video } from '../data/content'
import { SectionHeading, Reveal } from './Section'

function VideoCard({ video, featured = false }: { video: Video; featured?: boolean }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/8 bg-ink-2 transition-colors hover:border-gold/40">
      <div className="relative aspect-video w-full overflow-hidden">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${video.title}`}
            className="absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/${featured ? 'maxresdefault' : 'hqdefault'}.jpg`}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/30 transition-colors group-hover:bg-ink/10" />
            <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold shadow-2xl transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-ink">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className={`font-display font-bold ${featured ? 'text-xl' : 'text-base'}`}>{video.title}</h3>
        <p className="mt-1 text-xs tracking-wide text-mist">{video.meta}</p>
      </div>
    </div>
  )
}

export default function Videos() {
  const [featured, ...rest] = videos

  return (
    <section id="videos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading kicker="Watch Him In Action" title="Videos" />

      <Reveal>
        <VideoCard video={featured} featured />
      </Reveal>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {rest.map((v, i) => (
          <Reveal key={v.youtubeId} delay={i * 0.08}>
            <VideoCard video={v} />
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-mist/60">
        Videos play via official YouTube embeds from ALTBalaji, ZEE5 and Zee Music Company channels.
      </p>
    </section>
  )
}
