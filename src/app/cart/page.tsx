'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { ShoppingCart, Trash2, ShoppingBag } from 'lucide-react'

export default function CartPage() {
  const { items, removeFromCart, clearCart, getTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Your Cart is Empty</h1>
          <p className="text-gray-400 mb-6">Add some products to get started</p>
          <Link
            href="/addons"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Addons
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <ShoppingCart className="w-8 h-8 text-accent" />
            Your Cart
          </h1>
          <button
            onClick={clearCart}
            className="text-gray-400 hover:text-red-400 text-sm transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-secondary rounded-xl p-6 border border-gray-800 flex items-center justify-between"
            >
              <div>
                <span className="text-xs text-accent uppercase tracking-wider">
                  {item.productType.replace('_', ' ')}
                </span>
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xl font-bold text-accent">₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg text-gray-300">Total</span>
            <span className="text-3xl font-bold text-accent">₹{getTotal()}</span>
          </div>
          
          <a
            href="#"
            className="block w-full text-center px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors text-lg"
          >
            Checkout with Gumroad
          </a>
          
          <p className="text-gray-500 text-sm text-center mt-4">
            You'll be redirected to Gumroad to complete your purchase
          </p>
        </div>
      </div>
    </div>
  )
}
