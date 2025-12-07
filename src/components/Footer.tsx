import Link from 'next/link'
import { Youtube, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-accent mb-4">Godot Multiplayer Engine</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Build online multiplayer games faster with our ready-made systems, addons, and scripts for Godot 4.4+
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/addons" className="text-gray-400 hover:text-accent transition-colors">Addons</Link></li>
              <li><Link href="/scripts" className="text-gray-400 hover:text-accent transition-colors">Scripts</Link></li>
              <li><Link href="/custom-scripts" className="text-gray-400 hover:text-accent transition-colors">Custom Scripts</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-accent transition-colors">Courses</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-accent transition-colors">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Godot Multiplayer Engine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
