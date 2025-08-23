export default function LivestockPage() {
  const livestockAnimals = [
    { name: "Dairy Cow", breed: "Holstein", age: "2 years", price: "$1200", img: "https://images.unsplash.com/photo-1560807707-8cc77767d783" },
    { name: "Goat", breed: "Boer", age: "1.5 years", price: "$200", img: "https://images.unsplash.com/photo-1601758003122-0a1ed5e2f8d6" },
    { name: "Sheep", breed: "Merino", age: "2 years", price: "$350", img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" },
    { name: "Chicken", breed: "Rhode Island Red", age: "6 months", price: "$15", img: "https://images.unsplash.com/photo-1601050692930-8f4b8e30ed77" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 via-green-50 to-white py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Healthy & Trusted <span className="text-emerald-600">Livestock</span> for Your Farm
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Browse our selection of carefully verified livestock. Each animal includes breed, age, and price information to help you make the best choice for your farm.
          </p>
          <a href="#livestock-list" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">View Livestock</a>
        </div>
      </section>

      {/* Livestock List */}
      <section id="livestock-list" className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Available Livestock</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {livestockAnimals.map((animal, index) => (
            <div key={index} className="bg-green-50 rounded-2xl shadow-md overflow-hidden">
              <img src={animal.img} alt={animal.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{animal.name}</h3>
                <p className="text-gray-600">Breed: {animal.breed}</p>
                <p className="text-gray-600">Age: {animal.age}</p>
                <p className="text-gray-600 font-semibold">Price: {animal.price}</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-20 bg-green-100 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Ready to Buy Livestock?</h2>
        <p className="text-gray-600 mb-6">Start building a healthy and productive farm with our trusted livestock.</p>
        <a href="#livestock-list" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">Browse All Livestock</a>
      </section>
    </>
  );
}
