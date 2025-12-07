import { Metadata } from 'next'
import { Database, Key, Mail, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Setup Guide - Godot Multiplayer Engine',
  description: 'How to configure Supabase for authentication and database',
}

export default function SetupPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-accent">Setup</span> Guide
          </h1>
          <p className="text-gray-400 text-lg">
            Configure Supabase to enable authentication, cart, and database features
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-secondary rounded-xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">1</div>
              <h2 className="text-xl font-bold text-white">Create a Supabase Project</h2>
            </div>
            <ol className="space-y-3 text-gray-400 ml-12">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Go to <a href="https://supabase.com" target="_blank" className="text-accent hover:underline">supabase.com</a> and sign up for free
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Click "New Project" and choose a name
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Wait for the project to be created (takes about 1 minute)
              </li>
            </ol>
          </div>

          <div className="bg-secondary rounded-xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">2</div>
              <h2 className="text-xl font-bold text-white">Get Your API Keys</h2>
            </div>
            <ol className="space-y-3 text-gray-400 ml-12">
              <li className="flex items-start gap-2">
                <Key className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Go to Project Settings → API
              </li>
              <li className="flex items-start gap-2">
                <Key className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Copy the <code className="bg-primary px-2 py-0.5 rounded text-accent">Project URL</code>
              </li>
              <li className="flex items-start gap-2">
                <Key className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Copy the <code className="bg-primary px-2 py-0.5 rounded text-accent">anon public</code> key
              </li>
            </ol>
          </div>

          <div className="bg-secondary rounded-xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">3</div>
              <h2 className="text-xl font-bold text-white">Add Environment Variables</h2>
            </div>
            <p className="text-gray-400 ml-12 mb-4">
              Add these environment variables to your Replit project (Secrets tab):
            </p>
            <div className="bg-primary rounded-lg p-4 ml-12 font-mono text-sm">
              <div className="text-gray-300">
                <span className="text-accent">NEXT_PUBLIC_SUPABASE_URL</span>=your_project_url
              </div>
              <div className="text-gray-300 mt-2">
                <span className="text-accent">NEXT_PUBLIC_SUPABASE_ANON_KEY</span>=your_anon_key
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">4</div>
              <h2 className="text-xl font-bold text-white">Configure Email Auth</h2>
            </div>
            <ol className="space-y-3 text-gray-400 ml-12">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Go to Authentication → URL Configuration
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Set Site URL to your Replit app URL (e.g., https://yourapp.replit.app)
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                Add redirect URL: <code className="bg-primary px-2 py-0.5 rounded text-accent">https://yourapp.replit.app/auth/callback</code>
              </li>
            </ol>
          </div>

          <div className="bg-secondary rounded-xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">5</div>
              <h2 className="text-xl font-bold text-white">Create Database Tables</h2>
            </div>
            <p className="text-gray-400 ml-12 mb-4">
              Go to SQL Editor and run this query:
            </p>
            <div className="bg-primary rounded-lg p-4 ml-12 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">{`-- Subscribers table
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON subscribers
  FOR INSERT WITH CHECK (true);
  
CREATE POLICY "Allow public inserts" ON messages
  FOR INSERT WITH CHECK (true);`}</pre>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-8 border border-accent/50">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <h2 className="text-xl font-bold text-white">You're All Set!</h2>
            </div>
            <p className="text-gray-400">
              After adding your environment variables and restarting the app, authentication and database features will be enabled.
              Users can register, login, reset passwords, and their data will be stored in Supabase.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
