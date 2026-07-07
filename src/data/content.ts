/**
 * ─────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *
 *  Facts below were researched from public sources (July 2026):
 *  - WikiBio: https://wikibio.in/orhan-awatramani/
 *  - Tatler Asia interview: https://www.tatlerasia.com/lifestyle/entertainment/orry-india-internet-celeb-bollywood-social-media-star-interview
 *  - IMDb: https://www.imdb.com/name/nm15536650/
 *  - Bigg Boss 17 / Bharti Singh LOL Podcast appearances
 *
 *  Photos: image files live in /public/photos and are referenced
 *  as "/photos/filename.jpg" below.
 * ─────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Orry",
  tagline: "Orhan Awatramani · India's Ultimate Liver",
  heroIntro:
    "“I live. I am a liver.” A fan tribute to the socialite, style icon and internet phenomenon who turned simply being everywhere into an art form.",
  disclaimer:
    "This is an unofficial fan website made with admiration. It is not affiliated with, endorsed by, or connected to Orry / Orhan Awatramani or his representatives. All names, images and trademarks belong to their respective owners. Photos via WikiBio and public press features; show and trailer stills © their respective networks (Colors, Netflix), used as promotional material with credit. Facts are compiled from public sources. Any rights holder may request removal and it will be honoured promptly.",
}

export const about = {
  heading: "About",
  paragraphs: [
    "Orhan Awatramani — known to the internet simply as Orry — was born on 2 August 1999 in Mumbai. He studied at Kodaikanal International School before earning a Bachelor of Fine Arts in Communication Design from The New School in New York, and famously crossed paths with Sara Ali Khan during his years at Columbia University.",
    "He became a national obsession almost by accident: photographs of him beside Janhvi Kapoor, Sara Ali Khan, Nysa Devgan, Kareena Kapoor and even Kylie Jenner went viral, and a whole meme culture — “Who is Orry?” — was born. His answer became iconic: when asked what he does, he simply said, “I am a liver.”",
    "Beyond the parties, Orry has worked as a Special Project Manager at Reliance Industries, is a trained animator and designer, entered the Bigg Boss 17 house as a wildcard, and has stepped in front of the camera in Netflix's world of Bollywood. Part socialite, part performance artist, he is Gen-Z's most fascinating question mark.",
  ],
  stats: [
    { value: "2M+", label: "Followers" },
    { value: "1999", label: "Born" },
    { value: "₹20L+", label: "Per Photo" },
    { value: "Mumbai", label: "Hometown" },
  ],
  portrait: "/photos/orry-photo.jpg" as string | null,
}

export type GalleryItem = {
  src: string | null
  caption: string
  span?: "tall" | "wide"
}

export const gallery: GalleryItem[] = [
  // Publicity/press photos — sources credited in the footer disclaimer.
  { src: "/photos/bigg-boss.jpg", caption: "“I am a liver” — Bigg Boss 17", span: "wide" },
  { src: "/photos/glam-3.jpg", caption: "Couture, crystals & a dragonfly", span: "tall" },
  { src: "/photos/with-sara.jpg", caption: "Beach day with Sara Ali Khan", span: "tall" },
  { src: "/photos/with-janhvi.jpg", caption: "Neon nights with Janhvi Kapoor" },
  { src: "/photos/with-kareena.jpg", caption: "With Kareena Kapoor" },
  { src: "/photos/with-kylie.jpg", caption: "With Kylie Jenner", span: "tall" },
  { src: "/photos/orry-main.jpg", caption: "The signature look" },
  { src: "/photos/with-dog.jpg", caption: "Poolside, animal lover", span: "wide" },
  { src: "/photos/at-restaurant.jpg", caption: "Out and about" },
  { src: "/photos/orry-photo.jpg", caption: "Pastel & poised", span: "tall" },
  { src: "/photos/childhood.jpg", caption: "Childhood, with his mother & brother" },
  { src: "/photos/at-party.jpg", caption: "Younger days" },
]

export type Film = {
  title: string
  year: string
  role: string
  description: string
  poster: string | null
  tag: string
  trailerId: string | null
  watchUrl: string | null
}

export const films: Film[] = [
  {
    title: "The Bads of Bollywood",
    year: "2025",
    role: "Himself",
    description:
      "Orry appears in Aryan Khan's glitzy Netflix series skewering the film industry — a natural home for Bollywood's favourite social butterfly.",
    poster: "/photos/bads-song.jpg",
    tag: "Netflix Series",
    trailerId: "9wRY8JQkUk8",
    watchUrl: "https://www.youtube.com/watch?v=9wRY8JQkUk8",
  },
  {
    title: "Nadaaniyan",
    year: "2025",
    role: "Himself (cameo)",
    description:
      "Karan Johar's Dharmatic romance launching Ibrahim Ali Khan and Khushi Kapoor — with a signature Orry appearance.",
    poster: "/photos/nadaaniyan.jpg",
    tag: "Netflix Film",
    trailerId: "bXTsJKcx_fc",
    watchUrl: "https://www.youtube.com/watch?v=bXTsJKcx_fc",
  },
  {
    title: "Bigg Boss 17",
    year: "2023",
    role: "Wildcard Contestant",
    description:
      "Orry entered Salman Khan's house as a wildcard — in his now-legendary “I am a liver” tee — and left everyone in splits.",
    poster: "/photos/bigg-boss.jpg",
    tag: "Reality TV",
    trailerId: "RUxwGaoaBuU",
    watchUrl: "https://www.youtube.com/watch?v=RUxwGaoaBuU",
  },
  {
    title: "Orry Ka Hindi Podcast",
    year: "2024",
    role: "Special Guest",
    description:
      "His riotous, unfiltered sit-down on Bharti Singh & Haarsh Limbachiyaa's LOL Podcast — childhood, broken Hindi and all.",
    poster: "/photos/podcast.jpg",
    tag: "Podcast",
    trailerId: "lneQHkE6dKY",
    watchUrl: "https://www.youtube.com/watch?v=lneQHkE6dKY",
  },
]

export type Video = {
  youtubeId: string
  title: string
  meta: string
}

export const videos: Video[] = [
  {
    youtubeId: "lneQHkE6dKY",
    title: "Orry Ka Hindi Podcast — Bharti & Haarsh",
    meta: "Bharti TV LOL Podcast · 2024 · the full unfiltered Orry",
  },
  {
    youtubeId: "_Z8Oif17V-U",
    title: "Orry at the Bharti Singh Podcast",
    meta: "Bharti TV · 2024 · how he became Bollywood's BFF",
  },
  {
    youtubeId: "bXTsJKcx_fc",
    title: "Nadaaniyan — Official Trailer",
    meta: "Netflix India · 2025 · featuring Orry",
  },
]

export type PressItem = {
  outlet: string
  quote: string
  url: string | null
  date: string
}

export const press: PressItem[] = [
  {
    outlet: "Bigg Boss 17",
    quote: "I live. I am a liver.",
    url: null,
    date: "2023",
  },
  {
    outlet: "Tatler Asia",
    quote:
      "Bollywood's most captivating social butterfly — both online and offline.",
    url: "https://www.tatlerasia.com/lifestyle/entertainment/orry-india-internet-celeb-bollywood-social-media-star-interview",
    date: "2023",
  },
  {
    outlet: "On his craft",
    quote:
      "I charge around ₹20–30 lakh for posting a picture. My job is to be Orry.",
    url: null,
    date: "2023",
  },
]

export type Social = {
  label: string
  handle: string
  url: string
  icon: "instagram" | "imdb" | "youtube"
}

export const socials: Social[] = [
  {
    label: "Instagram",
    handle: "@orry",
    url: "https://instagram.com/orry",
    icon: "instagram",
  },
  {
    label: "YouTube",
    handle: "Interviews & Podcasts",
    url: "https://www.youtube.com/results?search_query=orry+orhan+awatramani",
    icon: "youtube",
  },
  {
    label: "IMDb",
    handle: "nm15536650",
    url: "https://www.imdb.com/name/nm15536650/",
    icon: "imdb",
  },
]
