import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: {
    default: 'Godot Multiplayer Engine - Ready-Made Systems & Addons',
    template: '%s | Godot Multiplayer Engine'
  },
  description: 'Ready-made multiplayer systems, AI enemies, vehicle sync, Supabase login, weapon modules, and more. Build online games faster with Godot.',
  keywords: ['godot multiplayer', 'godot addons', 'godot scripts', 'godot marketplace', 'godot online game', 'godot networking', 'godot 4', 'godot engine'],
  authors: [{ name: 'Godot Multiplayer Engine' }],
  openGraph: {
    title: 'Godot Multiplayer Engine',
    description: 'Build online games faster with ready-made multiplayer systems, AI, weapons, and vehicle sync for Godot 4.4+',
    type: 'website',
    locale: 'en_US',
    siteName: 'Godot Multiplayer Engine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godot Multiplayer Engine',
    description: 'Ready-made multiplayer systems for Godot game development',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
