'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Mail, MessageCircle, Youtube, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have questions? Want a custom solution? Reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">Failed to send. Please try again.</p>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Other Ways to Reach Me</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-gray-800 hover:border-accent/50 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 text-sm">contact@godotmultiplayer.com</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-gray-800 hover:border-accent/50 transition-colors">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  <div>
                    <p className="text-white font-medium">Discord</p>
                    <p className="text-gray-400 text-sm">Join our community server</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-gray-800 hover:border-accent/50 transition-colors">
                  <Youtube className="w-6 h-6 text-accent" />
                  <div>
                    <p className="text-white font-medium">YouTube</p>
                    <p className="text-gray-400 text-sm">Watch free tutorials</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-secondary rounded-xl p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">Response Time</h4>
              <p className="text-gray-400 text-sm">
                I typically respond within 24-48 hours. For urgent custom work inquiries, 
                please mention it in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
