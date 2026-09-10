import ProjectCard, { Project } from '@/components/ProjectCard'
import CSProjects from '@/components/CSProjects'

const featuredProjects: Project[] = [
  {
    title: "UnityForge",
    description: "Modular Bible and prayer app designed for spiritual growth and community, with worship-music playback via the Spotify and YouTube APIs and background audio processing.",
    tech: ["Flask", "PostgreSQL", "Redis", "RQ", "Spotify API", "YouTube API"],
    github: "https://github.com/JDLewis4313/unityforge",
    // live: add the Railway URL once the deploy is green
    // live: "https://web-production-70989.up.railway.app"
  },
  {
    title: "GeNiUS EdTech",
    description: "Community-driven learning platform with a Django backend and dynamic content modules. Built for scalable digital education.",
    tech: ["Django", "PostgreSQL", "Railway", "JavaScript"],
    github: "https://github.com/JDLewis4313/genius_edtech",
    live: "https://geniusedtech-production.up.railway.app/"
  },
  {
    title: "Modern Portfolio",
    description: "This site — a personal portfolio built with Next.js and Tailwind CSS, showcasing my full-stack range across software, sound, and STEM.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JDLewis4313/modern-portfolio",
    live: "https://modern-portfolio-fawn.vercel.app/"
  }
]

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-8">Web Development Projects</h2>
      <CSProjects />
    </div>
  )
}
