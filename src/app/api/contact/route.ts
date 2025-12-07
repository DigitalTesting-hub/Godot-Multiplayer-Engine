import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (supabase) {
      const { error } = await supabase
        .from('messages')
        .insert([{ name, email, message }])

      if (error) {
        throw error
      }
    } else {
      console.log('New contact message (Supabase not configured):', { name, email, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
