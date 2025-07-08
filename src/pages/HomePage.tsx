import products from '../data/products.json'

import ProductCard from '../components/ProductCard'
import type { Product } from '../types/Product'

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
