import routes from "../Routes/Routes";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-green-700 text-white py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">PetHub</h3>
            <p className="text-gray-200">Connecting you with healthy pets for a happier, more productive life.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>

            {/* {
             <ul className="space-y-2">
              <li><a href={routes.home}  className="hover:text-green-300 transition">Home</a></li>
              <li><a href="/adopt" className="hover:text-green-300 transition">Adoption</a></li>
              <li><a href="/about" className="hover:text-green-300 transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-green-300 transition">Contact</a></li>
            </ul>  */}

            <ul className="space-y-2">
              <li>
                <Link to={routes.home} className="hover:text-green-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/adopt" className="hover:text-green-300 transition">
                  Adoption
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200">Phone: +9779845012345</p>
            <p className="text-gray-200">Email: support@pethub.com</p>
            <p className="text-gray-200">Address: Bharatpur, Chitwan </p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-300">
          &copy; {new Date().getFullYear()} PetHub. All rights reserved.
        </div>
      </footer>
    </>
  );
}
