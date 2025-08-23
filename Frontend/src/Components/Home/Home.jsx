import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeScreen() {
  const [open, setOpen] = useState(false);

  const featuredAnimals = [
    { name: "Golden Retriever", img: "https://images.unsplash.com/photo-1558788353-f76d92427f16" },
    { name: "Persian Cat", img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" },
    { name: "Dairy Cow", img: "https://images.unsplash.com/photo-1560807707-8cc77767d783" },
    { name: "Parrot", img: "https://images.unsplash.com/photo-1601758123927-50f90b82f49c" }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-green-100 via-green-50 to-white py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight mb-6">
              Find Your Perfect <span className="text-emerald-600">Pet</span> or Trusted <span className="text-emerald-600">Livestock</span>
            </h1>
            <p className="text-gray-600 mb-6">
              Welcome to <span className="font-semibold text-green-700">Pet & Livestock Hub</span> — your one-stop platform for adopting loving pets and buying healthy livestock.
            </p>
            <div className="flex space-x-4">
              <a href="#pets" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">Explore Pets</a>
              <a href="#livestock" className="bg-white border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-50 transition">Explore Livestock</a>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1601979035186-6f7e58c7c9b4" alt="Pets and Livestock" className="rounded-2xl shadow-lg" />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-md p-4 hidden md:block">
              <p className="text-green-700 font-bold text-lg">1000+ Happy Adoptions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 lg:px-20 bg-green-50">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Featured Categories</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Pets</h3>
            <p className="text-gray-600">Adopt loving pets from trusted breeders and homes.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Livestock</h3>
            <p className="text-gray-600">Buy healthy livestock for farming or breeding purposes.</p>
          </div>
        </div>
      </section>

      {/* Featured Animals Carousel */}
      <section className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Featured Animals</h2>
        <Slider {...sliderSettings} className="max-w-6xl mx-auto">
          {featuredAnimals.map((animal, index) => (
            <div key={index} className="px-4">
              <div className="bg-green-50 rounded-2xl shadow-md overflow-hidden">
                <img src={animal.img} alt={animal.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-green-700">{animal.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 lg:px-20 bg-green-100 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Ready to Find Your New Friend?</h2>
        <p className="text-gray-600 mb-6">Explore our wide range of pets and livestock today!</p>
        <a href="#pets" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">Get Started</a>
      </section>
    </>
  );
}
