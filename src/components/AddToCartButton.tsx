'use client'

import { useState } from 'react'
import { ShoppingCart, Check } from 'lucide-react'
import { useCart } from '@/context/CartContext'

interface AddToCartButtonProps {
  productId: string
  productType: 'addon' | 'course' | 'script' | 'custom_script'
  className?: string
}

export default function AddToCartButton({ productId, productType, className = '' }: AddToCartButtonProps) {
  const { addToCart, items } = useCart()
  const [added, setAdded] = useState(false)
  
  const isInCart = items.some(item => item.id === productId)

  const handleAdd = () => {
    if (isInCart) return
    addToCart(productId, productType)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (isInCart) {
    return (
      <button
        disabled
        className={`flex items-center justify-center gap-2 px-6 py-3 bg-green-500/20 text-green-400 font-semibold rounded-lg cursor-default ${className}`}
      >
        <Check className="w-5 h-5" />
        In Cart
      </button>
    )
  }

  return (
    <button
      onClick={handleAdd}
      className={`flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-hover transition-colors ${className}`}
    >
      <ShoppingCart className="w-5 h-5" />
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  )
}
