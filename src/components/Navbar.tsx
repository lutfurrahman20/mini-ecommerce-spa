import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-evenly items-center px-4 py-3">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-5xl font-bold text-blue-600">
          MiniShop
        </Link>

        {/* Right Side - Cart */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-500 text-4xl hover:text-blue-600 font-bold"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
