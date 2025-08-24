// src/Components/Navbar/Navbar.jsx
import { useState } from "react";
import { PawPrint, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ add useNavigate
import routes from "../Routes/Routes.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate(); // ⬅️ init

  const handleLogout = () => {
    logout();               // clear tokens & flip state
    navigate(routes.login); // ⬅️ redirect to /login
  };

  const menuLinks = [
    { name: "Home", path: routes.home },
    { name: "Pets", path: routes.pets },
    { name: "Livestock", path: routes.livestock },
    { name: "About Us", path: routes.about },
    { name: "Contact", path: routes.contact },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to={routes.home} className="flex items-center space-x-2 text-white font-bold text-xl">
            <PawPrint className="w-7 h-7" />
            <span>PetHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium items-center">
            {menuLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-yellow-200 transition">
                {link.name}
              </Link>
            ))}

            {isLoggedIn ? (
              <button onClick={handleLogout} className="hover:text-yellow-200 transition">
                Logout
              </button>
            ) : (
              <>
                <Link to={routes.login} className="hover:text-yellow-200 transition">Login</Link>
                <Link to={routes.signup} className="hover:text-yellow-200 transition">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen((v) => !v)} className="text-white">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-700 text-white px-4 py-3 space-y-2">
          {menuLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block hover:text-yellow-200"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => {
                logout();
                setOpen(false);
                navigate(routes.login); // ⬅️ redirect after closing menu
              }}
              className="block hover:text-yellow-200 w-full text-left"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to={routes.login} className="block hover:text-yellow-200" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link to={routes.signup} className="block hover:text-yellow-200" onClick={() => setOpen(false)}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
