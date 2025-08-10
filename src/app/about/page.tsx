import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function AboutPage() {
  const techStack = ["Python", "Django", "Flask", "Next.js", "TypeScript", "PostgreSQL", "Supabase"]
  const interests = ["STEM Education", "EdTech", "Sound Engineering", "Web Development"]
  
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-sm">
              🎓 STEM Teaching @ Marquette University
            </Badge>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600">
            I&apos;m a graduate student at Marquette University, a Noyce Scholar, and a developer driven by faith in Christ Jesus. I believe I can be an enzyme — a catalyst for change that improves lives through education, technology, and service.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Projects</h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <Link href="/projects" className="text-blue-600 hover:underline font-medium">
                  UnityForge – Worship Music Search & Playback
                </Link>
                <p className="mb-2">Integrates scripture, prayer, and music into a digital ministry platform.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Flask</Badge>
                  <Badge variant="outline" className="text-xs">Redis</Badge>
                  <Badge variant="outline" className="text-xs">Spotify API</Badge>
                </div>
              </li>
              <li>
                <Link href="/projects" className="text-blue-600 hover:underline font-medium">
                  GeNiUS EdTech – Interactive STEM Learning
                </Link>
                <p className="mb-2">Built for educators and students to explore science through modular web tools.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Django</Badge>
                  <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                  <Badge variant="outline" className="text-xs">JavaScript</Badge>
                </div>
              </li>
              <li>
                <Link href="/projects" className="text-blue-600 hover:underline font-medium">
                  Modern Portfolio – Personal Developer Showcase
                </Link>
                <p className="mb-2">Highlights my work in Flask, Django, Next.js, and sound engineering integration.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Next.js</Badge>
                  <Badge variant="outline" className="text-xs">TypeScript</Badge>
                  <Badge variant="outline" className="text-xs">Tailwind</Badge>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sound Engineering</h2>
            <p className="text-gray-700 mb-4">
              I serve as a sound engineer at my church, where I manage live mixing, digital routing, and audio troubleshooting using PreSonus StudioLive and other tools. It&apos;s a space where faith meets technical excellence.
            </p>
            <p className="text-gray-700 mb-4">
              My goal is to build software that reflects real-world audio principles — bridging the gap between sound and code.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">PreSonus StudioLive</Badge>
              <Badge variant="secondary">Live Mixing</Badge>
              <Badge variant="secondary">Digital Audio</Badge>
            </div>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="default" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Areas of Interest</h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <Badge key={interest} variant="outline" className="text-xs">
                  {interest}
                </Badge>
              ))}
            </div>
          </Card>
        </section>

        <Card className="p-6 md:p-8 bg-white shadow text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Core Values</h2>
          <p className="text-gray-600 mb-4">
            God. Family. Fitness. Education. These are the pillars that guide my work, my learning, and my service to others.
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="destructive">God</Badge>
            <Badge variant="default">Family</Badge>
            <Badge variant="secondary">Fitness</Badge>
            <Badge variant="outline">Education</Badge>
          </div>
        </Card>

        <footer className="mt-16 text-center text-sm text-gray-500">
          Powered by faith, built with purpose. Let&apos;s catalyze change — together.
        </footer>
      </div>
    </div>
  )
}