import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
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
        {project.live && (
          <Button size="sm" variant="default" asChild>
            <Link href={project.live}>Live</Link>
          </Button>
        )}
      </div>
    </Card>
  )
}
