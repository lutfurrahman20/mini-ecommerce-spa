import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white">
      <Link to="/" className="text-xl font-bold text-blue-600">MiniShop</Link>
      <Link to="#" className="text-blue-500 hover:underline">Cart</Link>
    </nav>
  )
}
