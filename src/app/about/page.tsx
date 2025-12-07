import { Metadata } from 'next'
import Link from 'next/link'
import { Youtube, Github, MessageCircle, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About - Godot Multiplayer Engine',
  description: 'Learn about the creator behind Godot Multiplayer Engine and the mission to make multiplayer development accessible.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">Me</span>
          </h1>
        </div>

        <div className="bg-secondary rounded-xl p-8 border border-gray-800 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 bg-gradient-to-br from-accent/30 to-primary rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-accent">GM</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Creator & Developer</h2>
              <p className="text-gray-400 mb-4">
                Hey! I'm a passionate game developer focused on making multiplayer game development 
                accessible to everyone, especially beginners and indie developers.
              </p>
              <p className="text-gray-400 mb-4">
                I've been working with Godot for years and noticed that one of the biggest pain points 
                for developers is implementing multiplayer functionality. The networking code, 
                synchronization, and all the edge cases can be overwhelming.
              </p>
              <p className="text-gray-400">
                That's why I created Godot Multiplayer Engine - to provide ready-made, production-tested 
                systems that you can plug into your games and start building multiplayer experiences right away.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-secondary rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              Why Godot?
            </h3>
            <p className="text-gray-400 text-sm">
              Godot is free, open-source, and incredibly powerful. It's perfect for indie developers 
              who want to create amazing games without expensive licenses. I believe in democratizing 
              game development.
            </p>
          </div>

          <div className="bg-secondary rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">My Mission</h3>
            <p className="text-gray-400 text-sm">
              To help 10,000+ developers ship their first multiplayer game. Whether it's a simple 
              co-op experience or a full battle royale, I want to remove the technical barriers.
            </p>
          </div>
        </div>

        <div className="bg-secondary rounded-xl p-8 border border-gray-800 mb-8">
          <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg border border-gray-700 hover:border-accent transition-colors text-gray-300 hover:text-accent"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg border border-gray-700 hover:border-accent transition-colors text-gray-300 hover:text-accent"
            >
              <MessageCircle className="w-5 h-5" />
              Discord
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg border border-gray-700 hover:border-accent transition-colors text-gray-300 hover:text-accent"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Ready to build your multiplayer game?
          </p>
          <Link
            href="/addons"
            className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Browse Addons
          </Link>
        </div>
      </div>
    </div>
  )
}
