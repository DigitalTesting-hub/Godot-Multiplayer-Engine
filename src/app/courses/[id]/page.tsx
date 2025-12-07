import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { courses } from '@/data/products'
import { Check, Clock, Layers, BookOpen } from 'lucide-react'

interface Props {
  params: { id: string }
}

export async function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courses.find((c) => c.id === params.id)
  if (!course) return { title: 'Not Found' }
  
  return {
    title: `${course.name} - Godot Multiplayer Engine`,
    description: course.description,
  }
}

export default function CoursePage({ params }: Props) {
  const course = courses.find((c) => c.id === params.id)
  
  if (!course) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">{course.level} Course</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">{course.name}</h1>
          <p className="text-gray-400 text-lg">{course.description}</p>
        </div>

        <div className="bg-secondary rounded-xl p-8 border border-gray-800 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-5 h-5 text-accent" />
              {course.duration}
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Layers className="w-5 h-5 text-accent" />
              {course.lessons} lessons
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <BookOpen className="w-5 h-5 text-accent" />
              {course.level}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-4xl font-bold text-accent">₹{course.price}</span>
            <span className="text-gray-500">One-time purchase</span>
          </div>

          <a
            href="#"
            className="block w-full max-w-md mx-auto text-center px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors text-lg"
          >
            Enroll Now on Gumroad
          </a>
        </div>

        <div className="bg-secondary rounded-xl p-8 border border-gray-800 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">What You'll Learn</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-300">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              Core concepts and fundamentals
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              Hands-on project development
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              Best practices and optimization
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              Complete source code and assets
            </li>
          </ul>
        </div>

        <div className="bg-secondary rounded-xl p-8 border border-gray-800">
          <h2 className="text-xl font-bold text-white mb-6">What's Included</h2>
          <ul className="space-y-3 text-gray-400">
            <li>• {course.lessons} video lessons</li>
            <li>• Downloadable project files</li>
            <li>• Source code for all examples</li>
            <li>• Discord community access</li>
            <li>• Lifetime access to content</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
