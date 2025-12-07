import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey)
}

export interface Subscriber {
  id: string
  email: string
  created_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  created_at: string
}

export interface CartItem {
  id: string
  user_id: string
  product_id: string
  product_type: 'addon' | 'course' | 'script' | 'custom_script'
  quantity: number
  created_at: string
}
