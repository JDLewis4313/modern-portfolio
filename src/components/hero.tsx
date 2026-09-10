import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Code2, AudioWaveform, GraduationCap, ArrowUpRight } from 'lucide-react'

const pillars = [
  {
    icon: Code2,
    title: 'Software engineering',
    blurb: 'Full-stack web apps — Flask, Django, Next.js.',
    href: '/projects',
  },
  {
    icon: AudioWaveform,
    title: 'Sound engineering',
    blurb: 'Live mixing, production, and audio for worship and media.',
    href: '/sound',
  },
  {
    icon: GraduationCap,
    title: 'STEM education',
    blurb: 'Physics, engineering (PLTW), and robotics.',
    href: '/about',
  },
]

function Waveform() {
  const bars = [6, 14, 24, 10, 18, 4, 16, 26, 8, 20, 12, 4, 16, 22, 8, 14, 6, 24, 10, 18, 4, 16, 26, 12, 20, 6, 16, 22, 8, 14, 10, 24, 6, 18, 12, 4]
  return (
    <svg
      viewBox={`0 0 ${bars.length * 8} 28`}
      className="h-7 w-full text-teal-600"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <rect key={i} x={i * 8} y={(28 - h) / 2} width="3" height={h} rx="1.5" fill="currentColor" />
      ))}
    </svg>
  )
}

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-28">
      <p className="text-sm font-medium text-teal-700">Jermarcus Lewis</p>

      <h1
        style={{ fontFamily: 'var(--font-display)' }}
        className="mt-4 text-4xl leading-tight tracking-tight text-zinc-900 md:text-6xl md:leading-[1.05]"
      >
        I build software, engineer sound, and teach the next generation of makers.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-600 md:text-xl">
        Educator at Brown Deer High School and Marquette University, full-stack developer, and audio
        engineer. I turn ideas into tools people use and lessons students remember.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button size="lg" asChild>
          <Link href="/projects">View work</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>

      <div className="mt-14">
        <Waveform />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {pillars.map(({ icon: Icon, title, blurb, href }) => (
          <Link
            key={title}
            href={href}
            className="group rounded-xl border border-zinc-200 p-5 transition-colors hover:border-teal-600"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
              <ArrowUpRight
                className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-teal-600"
                aria-hidden="true"
              />
            </div>
            <h2 className="mt-3 text-base font-semibold text-zinc-900">{title}</h2>
            <p className="mt-1 text-sm text-zinc-600">{blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
