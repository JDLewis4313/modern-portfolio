import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Me</h1>
          <p className="text-lg text-gray-600">
            Bridging the worlds of science and software to reimagine STEM education.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h2>
            <p className="text-gray-700 mb-4">
              My academic roots are in Biology from The University of Alabama, where I developed a passion for analytical thinking and systems-driven exploration.
            </p>
            <p className="text-gray-700 mb-4">
              At Marquette University, I now study STEM Teaching with the goal of reshaping how students interact with science, technology, and problem-solving.
            </p>
            <p className="text-gray-700">
              Through web development and educational tools, I’m building interactive learning experiences that make complex STEM concepts both accessible and exciting.
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tech Stack</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'Node.js', 'PostgreSQL', 'API Design'].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Tools & Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'Railway', 'Vercel', 'VS Code'].map(skill => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="mt-16 text-center text-sm text-gray-500">
          Driven by curiosity, grounded in science, and building the future of education — one line of code at a time.
        </footer>
      </div>
    </div>
  )
}
