import Link from 'next/link'
import { Metadata } from 'next'
import { addons } from '@/data/products'
import { Gamepad2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Addons - Godot Multiplayer Engine',
  description: 'Production-ready addons and systems for Godot 4.4+ multiplayer game development.',
  keywords: 'godot addons, godot multiplayer, godot marketplace, godot plugins',
}

export default function AddonsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-accent">Addons</span> & Systems
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready multiplayer systems, AI, weapons, vehicles, and more for Godot 4.4+
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className="bg-secondary rounded-xl border border-gray-800 overflow-hidden card-glow transition-all hover:border-accent/50 hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-accent/20 to-primary flex items-center justify-center">
                <Gamepad2 className="w-16 h-16 text-accent/50" />
              </div>
              <div className="p-6">
                <span className="text-xs text-accent font-medium uppercase tracking-wider">{addon.category}</span>
                <h2 className="text-xl font-bold text-white mt-2 mb-2">{addon.name}</h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{addon.description}</p>
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
      </div>
    </div>
  )
}
