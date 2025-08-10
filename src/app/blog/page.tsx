import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    {
      title: "From Biology to Code: My Journey Setting Up My First Django Project",
      excerpt: "Learning to program can feel overwhelming, especially when you&apos;re staring at the endless list of programming languages...",
      category: "Learning",
      readTime: "8 min read",
      date: "June 2, 2025",
      slug: "django-journey"
    },
    {
      title: "Building Modern Web Applications with Next.js",
      excerpt: "Why I chose Next.js for my new portfolio and what I learned about modern web development...",
      category: "Tutorial",
      readTime: "5 min read", 
      date: "June 2, 2025",
      slug: "nextjs-portfolio"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Blog</h1>
          <p className="text-xl text-gray-600">Documenting my journey in web development and STEM education</p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-3">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
