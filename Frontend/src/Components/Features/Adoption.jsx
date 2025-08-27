import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ add useNavigate
import routes from "../Routes/Routes";

export default function Adoption() {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Mock API fetch function
    const fetchVerifiedPets = async () => {
        setLoading(true);
        try {
            // Replace this with your real backend API call
            // Example: const res = await fetch("/api/pets?status=verified");
            // const data = await res.json();

            const data = [
                {
                    id: 1,
                    name: "Bella",
                    species: "Dog",
                    breed: "Golden Retriever",
                    age: "Young",
                    gender: "Female",
                    size: "Large",
                    color: "Golden",
                    location: "Kathmandu",
                    photos: [
                        "https://images.unsplash.com/photo-1558788353-f76d92427f16"
                    ],
                },
                {
                    id: 2,
                    name: "Luna",
                    species: "Cat",
                    breed: "Persian",
                    age: "Adult",
                    gender: "Female",
                    size: "Medium",
                    color: "White",
                    location: "Pokhara",
                    photos: [
                        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
                    ],
                },
                // Add more mock pets here
            ];

            setPets(data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching pets:", err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVerifiedPets();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-green-700 font-semibold text-xl">Loading pets...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
            <h1 className="text-4xl font-bold text-green-700 text-center mb-12">
                Adopt a Loving Pet
            </h1>

            {pets.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No pets available for adoption at the moment.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pets.map((pet) => (
                        <div key={pet.id} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300">
                            <img
                                src={pet.photos[0]}
                                alt={pet.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-green-700 mb-2">{pet.name}</h2>
                                <p className="text-gray-600 mb-1"><strong>Species:</strong> {pet.species}</p>
                                <p className="text-gray-600 mb-1"><strong>Breed:</strong> {pet.breed}</p>
                                <p className="text-gray-600 mb-1"><strong>Age:</strong> {pet.age}</p>
                                <p className="text-gray-600 mb-1"><strong>Gender:</strong> {pet.gender}</p>
                                <p className="text-gray-600 mb-1"><strong>Size:</strong> {pet.size}</p>
                                <p className="text-gray-600 mb-3"><strong>Location:</strong> {pet.location}</p>


                                {<button onClick={() => navigate(routes.adoptionform)} className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition">
                                    Adopt
                                </button>}

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
