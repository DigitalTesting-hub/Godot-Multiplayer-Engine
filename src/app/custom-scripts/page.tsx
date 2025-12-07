import { Metadata } from 'next'
import { customScripts } from '@/data/products'
import { Sparkles, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom Scripts - Godot Multiplayer Engine',
  description: 'Premium customizable scripts and complete systems for Godot game development.',
  keywords: 'godot custom scripts, godot development, godot systems',
}

export default function CustomScriptsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-accent">Custom</span> Scripts
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium, fully customizable systems tailored to your game's needs
          </p>
        </div>

        <div className="bg-secondary rounded-xl p-8 border border-accent/30 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-white">Premium Service</h2>
          </div>
          <p className="text-gray-400 mb-4">
            These are complete, production-ready systems that can be customized to your specific requirements. 
            Each purchase includes dedicated support and modifications based on your needs.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-accent" /> Full source code
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-accent" /> Customization support
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-accent" /> Priority Discord access
            </li>
            <li className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-accent" /> Integration assistance
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customScripts.map((script) => (
            <div
              key={script.id}
              className="bg-secondary rounded-xl p-8 border border-gray-800 card-glow transition-all hover:border-accent/50"
            >
              <span className="text-xs text-accent font-medium uppercase tracking-wider">{script.category}</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">{script.name}</h3>
              <p className="text-gray-400 mb-6">{script.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-accent">₹{script.price}</span>
                <a
                  href="#"
                  className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
