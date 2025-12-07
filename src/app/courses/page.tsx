import Link from 'next/link'
import { Metadata } from 'next'
import { courses } from '@/data/products'
import { BookOpen, Clock, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Courses - Godot Multiplayer Engine',
  description: 'Learn Godot game development with our mini courses. From multiplayer basics to AI systems.',
  keywords: 'godot tutorial, godot course, learn godot, godot multiplayer tutorial',
}

export default function CoursesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mini <span className="text-accent">Courses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn step-by-step with hands-on tutorials for Godot game development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-secondary rounded-xl border border-gray-800 overflow-hidden card-glow transition-all hover:border-accent/50 hover:-translate-y-1"
            >
              <div className="h-40 bg-gradient-to-br from-purple-500/20 to-primary flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-purple-400/50" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded font-medium">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="w-3 h-3" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Layers className="w-3 h-3" />
                    {course.lessons} lessons
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{course.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">₹{course.price}</span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
