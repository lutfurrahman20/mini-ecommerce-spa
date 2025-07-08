import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

export default function CartSidebar() {
  const cartContext = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  if (!cartContext) return null;

  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total } =
    cartContext;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded shadow"
      >
        {isOpen ? "Close Cart" : `Cart (${cart.length})`}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>

          <div className="flex-1 overflow-y-auto space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="border p-2 rounded">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold">{item.name}</h3>
                      <p>${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-4">
              <p className="font-bold">Total: ${total.toFixed(2)}</p>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full mt-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
}
