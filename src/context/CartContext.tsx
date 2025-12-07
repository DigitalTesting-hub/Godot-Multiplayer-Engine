'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { addons, courses, scripts, customScripts } from '@/data/products'

export interface CartItem {
  id: string
  productType: 'addon' | 'course' | 'script' | 'custom_script'
  name: string
  price: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string, productType: 'addon' | 'course' | 'script' | 'custom_script') => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  getTotal: () => number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (e) {
        localStorage.removeItem('cart')
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const getProduct = (productId: string, productType: string) => {
    switch (productType) {
      case 'addon':
        return addons.find(a => a.id === productId)
      case 'course':
        return courses.find(c => c.id === productId)
      case 'script':
        return scripts.find(s => s.id === productId)
      case 'custom_script':
        return customScripts.find(s => s.id === productId)
      default:
        return null
    }
  }

  const addToCart = (productId: string, productType: 'addon' | 'course' | 'script' | 'custom_script') => {
    const existing = items.find(item => item.id === productId)
    
    if (existing) {
      return
    }

    const product = getProduct(productId, productType)
    if (!product) return

    const newItem: CartItem = {
      id: productId,
      productType,
      name: product.name,
      price: product.price,
      quantity: 1
    }

    setItems([...items, newItem])
  }

  const removeFromCart = (productId: string) => {
    setItems(items.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const itemCount = items.length

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart,
      getTotal,
      itemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
