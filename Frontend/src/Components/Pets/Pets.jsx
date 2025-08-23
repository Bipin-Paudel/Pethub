export default function PetsPage() {
  const pets = [
    { name: "Golden Retriever", breed: "Retriever", age: "1 year", price: "$800", img: "https://images.unsplash.com/photo-1558788353-f76d92427f16" },
    { name: "Persian Cat", breed: "Persian", age: "6 months", price: "$500", img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6" },
    { name: "Parrot", breed: "Macaw", age: "2 years", price: "$300", img: "https://images.unsplash.com/photo-1601758123927-50f90b82f49c" },
    { name: "Rabbit", breed: "Lop", age: "4 months", price: "$50", img: "https://images.unsplash.com/photo-1601758225071-2fcd6cd15c3d" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 via-green-50 to-white py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Adopt Your Favorite <span className="text-emerald-600">Pets</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Explore our selection of healthy, happy pets ready for adoption. Each pet comes with detailed breed, age, and price information.
          </p>
          <a href="#pets-list" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">View Pets</a>
        </div>
      </section>

      {/* Pets List */}
      <section id="pets-list" className="py-16 px-6 lg:px-20 bg-white">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">Available Pets</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {pets.map((pet, index) => (
            <div key={index} className="bg-green-50 rounded-2xl shadow-md overflow-hidden">
              <img src={pet.img} alt={pet.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{pet.name}</h3>
                <p className="text-gray-600">Breed: {pet.breed}</p>
                <p className="text-gray-600">Age: {pet.age}</p>
                <p className="text-gray-600 font-semibold">Price: {pet.price}</p>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">Adopt Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-20 bg-green-100 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Ready to Adopt a Pet?</h2>
        <p className="text-gray-600 mb-6">Find your new companion and bring joy to your home.</p>
        <a href="#pets-list" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">Browse All Pets</a>
      </section>

    </>
  );
}
