import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600">
            Whether it&apos;s feedback, collaboration, or curiosity — I&apos;d love to hear from you.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <ul className="space-y-4">
              <li>
                <h3 className="text-sm font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">jermarcus.lewis@outlook.com</p>
              </li>
              <li>
                <h3 className="text-sm font-semibold text-gray-700">Location</h3>
                <p className="text-gray-600">Milwaukee, WI – Marquette University</p>
              </li>
              <li>
                <h3 className="text-sm font-semibold text-gray-700">Focus Areas</h3>
                <p className="text-gray-600">STEM Ed · EdTech · Web Dev · Interactive Learning</p>
              </li>
            </ul>
          </Card>

          <Card className="p-6 md:p-8 bg-white shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input id="name" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="jane.doe@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="How can I help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Start the conversation…" rows={4} />
              </div>
              <Button className="w-full hover:shadow-md transition-all">Send Message</Button>
            </form>
          </Card>
        </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        Built with care and curiosity. Let&apos;s shape STEM learning together.
      </footer>


      </div>
    </div>
  )
}
