import { useState } from "react";
import { PawPrint, Menu, X, HeartHandshake, Leaf, Users } from "lucide-react";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* About Us Section */}
      <section id="about" className="bg-green-50 py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At <span className="font-semibold text-green-700">Pet & Livestock Hub</span>, we believe every pet deserves a loving home
            and every farmer deserves trusted livestock. Our mission is to create a
            safe, reliable, and friendly marketplace that connects pet lovers and
            livestock keepers with healthy, well-cared-for animals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <HeartHandshake className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Trusted Platform</h3>
            <p className="text-gray-600">We ensure ethical practices and connect genuine buyers and sellers.</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Healthy & Happy</h3>
            <p className="text-gray-600">Animals listed on our platform are verified for health and wellbeing.</p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
            <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-700 mb-2">Community Focused</h3>
            <p className="text-gray-600">We are building a supportive community for pet lovers and livestock owners.</p>
          </div>
        </div>
      </section>
    </>
  );
}
