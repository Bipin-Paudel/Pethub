// import { useState } from "react";
// import { PawPrint, Menu, X } from "lucide-react";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex items-center space-x-2 text-white font-bold text-xl">
//             <PawPrint className="w-7 h-7" />
//             <span>PetHub</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8 text-white font-medium">
//             <a href="#home" className="hover:text-yellow-200 transition">Home</a>
//             <a href="#pets" className="hover:text-yellow-200 transition">Pets</a>
//             <a href="#livestock" className="hover:text-yellow-200 transition">Livestock</a>
//             <a href="#about" className="hover:text-yellow-200 transition">About Us</a>
//             <a href="#contact" className="hover:text-yellow-200 transition">Contact</a>
//             <a href="#login" className="hover:text-yellow-200 transition">Login</a>
//             <a href="#signup" className="hover:text-yellow-200 transition">Sign Up</a>
//           </div>

//           {/* Mobile Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setOpen(!open)} className="text-white">
//               {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-green-700 text-white px-4 py-3 space-y-2">
//           <a href="#home" className="block hover:text-yellow-200">Home</a>
//           <a href="#pets" className="block hover:text-yellow-200">Pets</a>
//           <a href="#livestock" className="block hover:text-yellow-200">Livestock</a>
//           <a href="#about" className="block hover:text-yellow-200">About Us</a>
//           <a href="#contact" className="block hover:text-yellow-200">Contact</a>
//           <a href="#login" className="block hover:text-yellow-200">Login</a>
//           <a href="#signup" className="block hover:text-yellow-200">Sign Up</a>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import { useState } from "react";
import { PawPrint, Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import routes from "../Routes/Routes";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white font-bold text-xl">
            <PawPrint className="w-7 h-7" />
            <span>PetHub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <Link to={routes.home} className="hover:text-yellow-200 transition">Home</Link>
            <Link to={routes.pets} className="hover:text-yellow-200 transition">Pets</Link>
            <Link to={routes.livestock} className="hover:text-yellow-200 transition">Livestock</Link>
            <Link to={routes.about} className="hover:text-yellow-200 transition">About Us</Link>
            <Link to={routes.contact} className="hover:text-yellow-200 transition">Contact</Link>
            <Link to={routes.login} className="hover:text-yellow-200 transition">Login</Link>
            <Link to={routes.signup} className="hover:text-yellow-200 transition">Sign Up</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-white">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-green-700 text-white px-4 py-3 space-y-2">
          <Link to="/" className="block hover:text-yellow-200">Home</Link>
          <Link to="/pets" className="block hover:text-yellow-200">Pets</Link>
          <Link to="/livestock" className="block hover:text-yellow-200">Livestock</Link>
          <Link to="/about" className="block hover:text-yellow-200">About Us</Link>
          <Link to="/contact" className="block hover:text-yellow-200">Contact</Link>
          <Link to="/login" className="block hover:text-yellow-200">Login</Link>
          <Link to="/signup" className="block hover:text-yellow-200">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


