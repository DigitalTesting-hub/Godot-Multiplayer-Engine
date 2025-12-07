import Link from 'next/link'
import Newsletter from '@/components/Newsletter'
import { addons, courses } from '@/data/products'
import { Zap, Users, Gamepad2, Shield, Car, Smartphone, Network, Crosshair } from 'lucide-react'

const features = [
  { icon: Users, title: 'Fully Synced Multiplayer', desc: 'Seamless player synchronization' },
  { icon: Crosshair, title: 'Battle Royale Systems', desc: 'Shrinking zones, loot & more' },
  { icon: Gamepad2, title: 'Weapon Systems', desc: 'Modular shooting mechanics' },
  { icon: Shield, title: 'AI Enemies', desc: 'Smart pathfinding & combat' },
  { icon: Car, title: 'Vehicle Sync', desc: 'Cars with passenger support' },
  { icon: Network, title: 'Auth & Profiles', desc: 'Supabase login ready' },
  { icon: Zap, title: 'Inventory Systems', desc: 'Drag-drop with crafting' },
  { icon: Smartphone, title: 'Mobile Ready UI', desc: 'Touch optimized controls' },
]

const testimonials = [
  { name: 'Rahul K.', text: 'This saved me months of work on my multiplayer game. Highly recommended!' },
  { name: 'James M.', text: 'The weapon system is incredibly polished. Works out of the box.' },
  { name: 'Priya S.', text: 'Finally a good solution for Godot multiplayer. The docs are great too.' },
]

export default function Home() {
  return (
    <div className="pt-16">
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary via-secondary to-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-accent glow">Godot Multiplayer Engine</span>
            <br />& Systems
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready-made multiplayer systems, AI enemies, vehicle sync, Supabase login, weapon modules, and more. Build online games faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/addons"
              className="px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors text-lg"
            >
              Browse Addons
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-primary transition-colors text-lg"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Multiplayer in Godot is <span className="text-accent">HARD</span>
            </h2>
            <p className="text-xl text-gray-400">We make it plug-and-play.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-primary rounded-xl border border-gray-800 card-glow transition-all hover:border-accent/50"
              >
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Addons</h2>
            <p className="text-gray-400">Production-ready systems for Godot 4.4+</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.slice(0, 3).map((addon) => (
              <div
                key={addon.id}
                className="bg-secondary rounded-xl border border-gray-800 overflow-hidden card-glow transition-all hover:border-accent/50"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary flex items-center justify-center">
                  <Gamepad2 className="w-16 h-16 text-accent/50" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-medium">{addon.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2">{addon.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">₹{addon.price}</span>
                    <Link
                      href={`/addons/${addon.id}`}
                      className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/addons"
              className="inline-block px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-primary transition-colors"
            >
              View All Addons
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mini Courses</h2>
            <p className="text-gray-400">Learn step-by-step with hands-on tutorials</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="bg-primary rounded-xl border border-gray-800 overflow-hidden card-glow transition-all hover:border-accent/50"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500/20 to-primary flex items-center justify-center">
                  <Zap className="w-12 h-12 text-purple-400/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">{course.level}</span>
                    <span className="text-xs text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{course.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-accent">₹{course.price}</span>
                    <Link
                      href={`/courses/${course.id}`}
                      className="text-accent hover:underline text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Developers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 bg-secondary rounded-xl border border-gray-800">
                <p className="text-gray-300 mb-4">"{t.text}"</p>
                <p className="text-accent font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      <section className="py-20 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Multiplayer Game?
          </h2>
          <p className="text-gray-400 mb-8">
            Stop struggling with networking code. Get production-ready systems today.
          </p>
          <Link
            href="/addons"
            className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors text-lg"
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  )
}
