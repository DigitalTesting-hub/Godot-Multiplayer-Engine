'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { User, Mail, LogOut, ShoppingBag, AlertCircle } from 'lucide-react'

export default function AccountPage() {
  const { user, loading, signOut, isConfigured } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user && isConfigured) {
      router.push('/auth/login')
    }
  }, [user, loading, router, isConfigured])

  if (!isConfigured) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-secondary rounded-xl p-8 border border-yellow-500/50">
            <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white text-center mb-2">Supabase Not Configured</h2>
            <p className="text-gray-400 text-center text-sm">
              Please add your Supabase credentials to enable user accounts.
            </p>
            <Link href="/setup" className="block mt-4 text-center text-accent hover:underline">
              View Setup Guide
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">My Account</h1>
          <p className="text-gray-400">Manage your profile and purchases</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  {user.user_metadata?.full_name || 'User'}
                </h2>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Email Verified</span>
                <span className={user.email_confirmed_at ? 'text-green-400' : 'text-yellow-400'}>
                  {user.email_confirmed_at ? 'Yes' : 'Pending'}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Member Since</span>
                <span className="text-white">
                  {new Date(user.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-accent" />
              Quick Links
            </h3>
            <div className="space-y-3">
              <Link
                href="/cart"
                className="block p-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors text-gray-300 hover:text-white"
              >
                View Cart
              </Link>
              <Link
                href="/addons"
                className="block p-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors text-gray-300 hover:text-white"
              >
                Browse Addons
              </Link>
              <Link
                href="/courses"
                className="block p-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors text-gray-300 hover:text-white"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 text-red-400 font-semibold rounded-lg hover:bg-red-500/30 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}
