import { useState} from 'react'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Normally, you would send this data to a backend here
    setSubmitted(true)
    // Optionally auto-close after 2 sec:
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  const handleClose = () => {
    setSubmitted(false)
    setName('')
    setEmail('')
    setAddress('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg w-full max-w-md p-6">
        {!submitted ? (
          <>
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Address</label>
                <textarea
                  required
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Place Order
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-600">✅ Order Placed Successfully!</h2>
            <p>Thank you for your purchase.</p>
            <button
              onClick={handleClose}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
