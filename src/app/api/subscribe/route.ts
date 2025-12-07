import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (supabase) {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }])

      if (error) {
        if (error.code === '23505') {
          return NextResponse.json({ error: 'Already subscribed' }, { status: 400 })
        }
        throw error
      }
    } else {
      console.log('New subscriber (Supabase not configured):', email)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
