export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-green-700 text-white py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pet & Livestock Hub</h3>
            <p className="text-gray-200">Connecting you with healthy pets and trusted livestock for a happier, more productive life.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-300 transition">Home</a></li>
              <li><a href="#livestock-list" className="hover:text-green-300 transition">Livestock</a></li>
              <li><a href="#about" className="hover:text-green-300 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-green-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200">Phone: +977-123-456789</p>
            <p className="text-gray-200">Email: support@petlivestockhub.com</p>
            <p className="text-gray-200">Address: Kathmandu, Nepal</p>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-300">
          &copy; {new Date().getFullYear()} PetHub. All rights reserved.
        </div>
      </footer>
    </>
  );
}
