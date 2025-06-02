import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Django Portfolio Website",
      description: "Full-stack portfolio built with Django and PostgreSQL, featuring admin interface and Railway deployment.",
      tech: ["Django", "Python", "PostgreSQL", "Railway", "Bootstrap"],
      github: "https://github.com/JDLewis4313/portfolio-website",
      demo: "https://jermarcus-lewis-portfolio.up.railway.app",
      status: "Live"
    },
    {
      title: "Modern Next.js Portfolio",
      description: "This website! Built with Next.js 14, TypeScript, and Tailwind CSS for modern web development.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "#",
      demo: "#",
      status: "In Progress"
    },
    {
      title: "COSC 6500 Projects",
      description: "Academic projects from Foundations of Computing course, showcasing Python programming fundamentals.",
      tech: ["Python", "Data Structures", "Algorithms"],
      github: "#",
      demo: "#",
      status: "Academic"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">Building solutions that bridge education and technology</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.github}>GitHub</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demo}>View Live</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}