import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600 tracking-tight">
          PDF Shop
        </Link>

        <div className="flex items-center gap-6 text-sm">
          {isAuthenticated ? (
            <>
              <span className="text-gray-500">Hi, {user?.name}</span>
              <button onClick={logout} className="text-gray-600 hover:text-red-500 transition-colors">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition-colors">
                Login
              </Link>
              <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
