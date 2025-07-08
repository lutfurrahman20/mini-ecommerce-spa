import { useParams } from "react-router-dom";
import products from "../data/products.json";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { Product } from "../types/Product";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p: Product) => p.id === Number(id));
  const cartContext = useContext(CartContext);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  if (!cartContext) return null;

  return (
    <div className="max-w-5xl mx-auto p-8 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover rounded shadow"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <button
          onClick={() => cartContext.addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
