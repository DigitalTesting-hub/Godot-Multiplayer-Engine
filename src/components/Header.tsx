'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingCart, User, LogIn } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/addons', label: 'Addons' },
  { href: '/courses', label: 'Courses' },
  { href: '/scripts', label: 'Scripts' },
  { href: '/custom-scripts', label: 'Custom Scripts' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, loading } = useAuth()
  const { itemCount } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-accent">GME</span>
            <span className="hidden sm:inline text-white font-semibold">Godot Multiplayer Engine</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative text-gray-300 hover:text-accent transition-colors">
              <ShoppingCart size={22} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-primary text-xs font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {!loading && (
              user ? (
                <Link href="/account" className="text-gray-300 hover:text-accent transition-colors">
                  <User size={22} />
                </Link>
              ) : (
                <Link href="/auth/login" className="text-gray-300 hover:text-accent transition-colors">
                  <LogIn size={22} />
                </Link>
              )
            )}

            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-secondary mt-2 pt-2">
              {user ? (
                <Link
                  href="/account"
                  className="block py-2 text-gray-300 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  My Account
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="block py-2 text-gray-300 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login / Register
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
