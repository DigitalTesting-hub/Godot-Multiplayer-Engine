# Godot Multiplayer Engine Website

## Overview
Marketing and sales website for Godot Multiplayer Systems & Addons. Built to sell addons, scripts, courses, and collect email subscribers. Includes user authentication and shopping cart.

## Tech Stack
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: API Routes with Supabase integration
- **Auth**: Supabase Auth (email/password, verification, password reset)
- **Payments**: Gumroad embed (placeholder links ready to configure)
- **Deployment**: Configured for port 5000

## Project Structure
```
src/
├── app/
│   ├── page.tsx               # Homepage
│   ├── addons/                # Addons catalog & product pages
│   ├── courses/               # Courses catalog & detail pages
│   ├── scripts/               # Scripts page
│   ├── custom-scripts/        # Premium custom scripts
│   ├── contact/               # Contact form
│   ├── about/                 # About page
│   ├── cart/                  # Shopping cart
│   ├── account/               # User account page
│   ├── setup/                 # Supabase setup guide
│   ├── auth/
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   ├── forgot-password/   # Password reset request
│   │   ├── reset-password/    # New password form
│   │   └── callback/          # Auth callback handler
│   └── api/
│       ├── subscribe/         # Newsletter subscription
│       └── contact/           # Contact form handler
├── components/
│   ├── Header.tsx             # Navigation with cart/auth
│   ├── Footer.tsx
│   ├── Newsletter.tsx
│   ├── Providers.tsx          # Auth + Cart providers
│   └── AddToCartButton.tsx
├── context/
│   ├── AuthContext.tsx        # Authentication state
│   └── CartContext.tsx        # Shopping cart state
├── data/
│   └── products.ts            # Products (prices in ₹)
└── lib/
    └── supabase.ts            # Supabase client
```

## Running the Project
```bash
npm run dev
```
Server runs on http://0.0.0.0:5000

## Features
- **Authentication**: Register, login, password reset, email verification
- **Shopping Cart**: Add products, persist in localStorage, checkout
- **Product Catalog**: Addons, courses, scripts with ₹ pricing
- **Newsletter**: Email collection with Supabase storage
- **Contact Form**: Message submission

## Theme
- Dark gaming aesthetic
- Primary: #0a0a0a (background)
- Secondary: #1c1c1c (cards)
- Accent: #00eaff (cyan/neon highlights)

## Supabase Setup

### 1. Create Project
- Go to [supabase.com](https://supabase.com) and create a new project

### 2. Add Environment Variables
Add these to Replit Secrets:
- `NEXT_PUBLIC_SUPABASE_URL` - Your project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your anon/public key

### 3. Configure Auth URLs
In Supabase Dashboard → Authentication → URL Configuration:
- Site URL: `https://yourapp.replit.app`
- Redirect URLs: `https://yourapp.replit.app/auth/callback`

### 4. Create Database Tables
Run this SQL in Supabase SQL Editor:
```sql
-- subscribers table
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- messages table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts" ON messages FOR INSERT WITH CHECK (true);
```

## Adding Products
Edit `src/data/products.ts` - all prices are in ₹ (INR)

## Payment Integration
Replace placeholder Gumroad links with your actual embed codes
