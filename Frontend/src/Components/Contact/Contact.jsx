import { useState } from "react";
import { PawPrint, Menu, X, HeartHandshake, Leaf, Users, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Contact Us Section */}
      <section id="contact" className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or need assistance? We would love to hear from you. Reach out to our friendly support team anytime.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-green-50 rounded-2xl shadow-md p-6 text-center">
            <Phone className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-700">Phone</h3>
            <p className="text-gray-600">+977-123-456789</p>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-md p-6 text-center">
            <Mail className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-700">Email</h3>
            <p className="text-gray-600">support@petlivestockhub.com</p>
          </div>

          <div className="bg-green-50 rounded-2xl shadow-md p-6 text-center">
            <MapPin className="w-10 h-10 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-700">Address</h3>
            <p className="text-gray-600">Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mt-12">
          <form className="bg-green-50 p-8 rounded-2xl shadow-md space-y-6">
            <div>
              <label className="block text-left text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-left text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-left text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
