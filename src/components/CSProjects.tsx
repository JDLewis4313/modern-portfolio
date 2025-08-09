"use client"

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const repos = [
  { title: "Blackjackr", repo: "blackjackr", github: "https://github.com/JDLewis4313/blackjackr", tech: ["Python", "HTML/CSS", "JavaScript", "Django"], description: "Blackjack game with player logic and Django templates." },
  { title: "Flaskr", repo: "flaskr", github: "https://github.com/JDLewis4313/flaskr", tech: ["Flask", "Python", "SQLite"], description: "Flask tutorial project with authentication and CRUD." },
  { title: "Microblog", repo: "microblog", github: "https://github.com/JDLewis4313/microblog", tech: ["Flask", "Python", "SQLAlchemy"], description: "Blogging platform from Flask Mega Tutorial." }
]

export default function CSProjects() {
  const [commits, setCommits] = useState<Record<string, string>>({})

  useEffect(() => {
    async function fetchCommits() {
      const results: Record<string, string> = {}

      for (const { repo } of repos) {
        try {
          const res = await fetch(`https://api.github.com/repos/JDLewis4313/${repo}/commits`)
          const json = await res.json()
          const commitDate = json[0]?.commit?.committer?.date
          results[repo] = commitDate ? new Date(commitDate).toLocaleDateString() : 'N/A'
        } catch {
          results[repo] = 'Error'
        }
      }

      setCommits(results)
    }

    fetchCommits()
  }, [])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map((project) => (
        <Card key={project.repo} className="p-6 hover:shadow-lg transition-shadow">
          <Badge variant="secondary" className="mb-2">
            Last Commit: {commits[project.repo] || 'Loading...'}
          </Badge>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
          <Button size="sm" variant="outline" asChild>
            <Link href={project.github}>GitHub</Link>
          </Button>
        </Card>
      ))}
    </div>
  )
}
