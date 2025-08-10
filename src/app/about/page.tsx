import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600">
            I&apos;m a graduate student at Marquette University, a Noyce Scholar, and a developer driven by faith in Christ Jesus. I believe I can be an enzyme — a catalyst for change that improves lives through education, technology, and service.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Projects</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <Link href="/projects/unityforge" className="text-blue-600 hover:underline font-medium">
                  UnityForge – Worship Music Search & Playback
                </Link>
                <p>Integrates scripture, prayer, and music into a digital ministry platform.</p>
              </li>
              <li>
                <Link href="/projects/genius-edtech" className="text-blue-600 hover:underline font-medium">
                  GeNiUS EdTech – Interactive STEM Learning
                </Link>
                <p>Built for educators and students to explore science through modular web tools.</p>
              </li>
              <li>
                <Link href="/projects/modern-portfolio" className="text-blue-600 hover:underline font-medium">
                  Modern Portfolio – Personal Developer Showcase
                </Link>
                <p>Highlights my work in Flask, Django, Next.js, and sound engineering integration.</p>
              </li>
            </ul>
          </Card>

          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sound Engineering</h2>
            <p className="text-gray-700 mb-4">
              I serve as a sound engineer at my church, where I manage live mixing, digital routing, and audio troubleshooting using PreSonus StudioLive and other tools. It&apos;s a space where faith meets technical excellence.
            </p>
            <p className="text-gray-700">
              My goal is to build software that reflects real-world audio principles — bridging the gap between sound and code.
            </p>
          </Card>
        </section>

        <Card className="mt-16 p-6 md:p-8 bg-white shadow text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Core Values</h2>
          <p className="text-gray-600">
            God. Family. Fitness. Education. These are the pillars that guide my work, my learning, and my service to others.
          </p>
        </Card>

        <footer className="mt-16 text-center text-sm text-gray-500">
          Powered by faith, built with purpose. Let&apos;s catalyze change — together.
        </footer>
      </div>
    </div>
  )
}
