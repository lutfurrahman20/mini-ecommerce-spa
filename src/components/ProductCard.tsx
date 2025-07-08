import { Link } from 'react-router-dom'
import type { Product } from '../types/Product'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const cartContext = useContext(CartContext)
  if (!cartContext) return null

  return (
    <div className="border p-4 rounded shadow">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h3 className="mt-2 font-bold">{product.name}</h3>
        <p>${product.price}</p>
      </Link>
      <button
        onClick={() => cartContext.addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}
