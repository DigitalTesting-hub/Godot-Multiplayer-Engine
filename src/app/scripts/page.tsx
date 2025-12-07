import { Metadata } from 'next'
import { scripts } from '@/data/products'
import { Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Scripts - Godot Multiplayer Engine',
  description: 'Ready-made GDScript files for weapons, AI, inventory, networking, and more.',
  keywords: 'godot scripts, godot code, gdscript, godot snippets',
}

export default function ScriptsPage() {
  const categories = [...new Set(scripts.map(s => s.category))]

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready-Made <span className="text-accent">Scripts</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Copy-paste GDScript files to accelerate your development
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-accent" />
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scripts.filter(s => s.category === category).map((script) => (
                <div
                  key={script.id}
                  className="bg-secondary rounded-xl p-6 border border-gray-800 card-glow transition-all hover:border-accent/50"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{script.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{script.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-accent">₹{script.price}</span>
                    <a
                      href="#"
                      className="px-4 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
