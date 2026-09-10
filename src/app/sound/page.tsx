import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AudioWaveform, Mic, SlidersHorizontal, Radio, ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Sound Engineering — Jermarcus Lewis',
  description: 'Live mixing, studio production, and audio for worship and media.',
}

const disciplines = [
  { icon: SlidersHorizontal, title: 'Live mixing', blurb: 'Front-of-house and monitor mixing for worship and live events.' },
  { icon: Mic, title: 'Studio production', blurb: 'Recording, editing, and post-production for music and spoken word.' },
  { icon: Radio, title: 'Audio for media', blurb: 'Sound for video, streaming, and digital ministry platforms.' },
  { icon: AudioWaveform, title: 'Audio in software', blurb: 'Spectrogram analysis and music playback built into UnityForge.' },
]

const work = [
  { title: 'Worship services', blurb: 'Weekly front-of-house mixing and recording for live worship.' },
  { title: 'UnityForge audio', blurb: 'Integrated Spotify and YouTube playback with spectrogram tooling.' },
  { title: 'Production sessions', blurb: 'Tracking and mixing for original music and media projects.' },
]

const tools = ['Front-of-house consoles', 'DAW production', 'ffmpeg', 'Spotify API', 'YouTube API', 'Spectrogram analysis']

export default function SoundPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="max-w-2xl">
        <div className="flex items-center gap-2 text-teal-700">
          <AudioWaveform className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm font-medium">Sound engineering</span>
        </div>
        <h1
          style={{ fontFamily: 'var(--font-display)' }}
          className="mt-4 text-4xl tracking-tight text-zinc-900 md:text-5xl"
        >
          Engineering sound that moves people.
        </h1>
        <p className="mt-5 text-lg text-zinc-600">
          Alongside software and teaching, I run sound for worship and live services and produce audio
          in the studio. Sound is not a side interest for me — it is part of how I build.
        </p>
      </header>

      <section className="mt-14">
        <h2 className="text-sm font-semibold text-zinc-500">What I do</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {disciplines.map(({ icon: Icon, title, blurb }) => (
            <Card key={title} className="p-5">
              <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
              <h3 className="mt-3 text-base font-semibold text-zinc-900">{title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{blurb}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-sm font-semibold text-zinc-500">Selected work</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {work.map((w) => (
            <Card key={w.title} className="p-5">
              <h3 className="text-base font-semibold text-zinc-900">{w.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">{w.blurb}</p>
            </Card>
          ))}
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          Add embedded players, mixes, or session photos here as you build this out.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="text-sm font-semibold text-zinc-500">Tools</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {tools.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-sm font-semibold text-zinc-500">Teaching and resources</h2>
        {/* TODO: replace href="#" with the published link to your Young Guru career presentation.
            Easiest options: Google Slides -> File -> Share -> Publish to web (copy the link),
            or export it to PDF and drop it in /public, then point href to /your-file.pdf */}
        <Link href="#" className="group mt-4 block">
          <Card className="p-6 transition-colors hover:border-teal-600">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">Career profile: Young Guru</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  A student-facing example presentation from my Brown Deer of the Future project,
                  profiling sound engineer Young Guru (Gimel Keaton) and mapping a real career path in
                  audio — where engineering, music, and mentorship meet.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary">Sound engineering</Badge>
                  <Badge variant="secondary">PLTW</Badge>
                  <Badge variant="secondary">Career pathways</Badge>
                </div>
              </div>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover:text-teal-600"
                aria-hidden="true"
              />
            </div>
          </Card>
        </Link>
      </section>
    </div>
  )
}
