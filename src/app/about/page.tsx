import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">From Biology to Code: My Journey in STEM Education</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Story</h2>
            <p className="text-gray-600 mb-4">
              I started my academic journey studying Biology at The University of Alabama, 
              where I developed a strong foundation in scientific thinking and problem-solving.
            </p>
            <p className="text-gray-600 mb-4">
              Now pursuing STEM Teaching at Marquette University, I am passionate about 
              making science and technology accessible to the next generation of learners.
            </p>
            <p className="text-gray-600">
              My transition into web development represents the perfect blend of my 
              scientific background and my passion for educational technology.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'Node.js', 'PostgreSQL', 'API Design'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'Railway', 'Vercel', 'VS Code'].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}