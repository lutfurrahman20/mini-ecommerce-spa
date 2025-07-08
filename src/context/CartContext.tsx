import { createContext, useState} from 'react'
import type { ReactNode } from 'react'
import type { Product } from '../types/Product'


export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  total: number
}

export const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    const exists = cart.find(item => item.id === product.id)
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const increaseQuantity = (id: number) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreaseQuantity = (id: number) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    ))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  )
}
