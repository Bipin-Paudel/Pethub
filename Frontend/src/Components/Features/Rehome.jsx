import { useState } from "react";

export default function Rehome() {
  const [formData, setFormData] = useState({
    petName: "",
    species: "",
    otherSpecies: "",
    breed: "",
    age: "",
    gender: "",
    color: "",
    size: "",
    houseTrained: "",
    ownerName: "",
    phoneNumber: "",
    email: "",
    location: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photos: Array.from(e.target.files),
    }));
  };

  const handleSaveDraft = () => {
    console.log("Draft Saved:", formData);
    alert("Draft saved locally! (Console log only for now)");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "petName",
      "species",
      "age",
      "gender",
      "size",
      "houseTrained",
      "ownerName",
      "phoneNumber",
      "location",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the required field: ${field}`);
        return;
      }
    }
    if (formData.photos.length === 0) {
      alert("Please upload at least one photo.");
      return;
    }

    console.log("Submitted:", formData);
    alert("Form submitted! (Console log only for now)");
  };

  const Required = () => <span className="text-red-500">*</span>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🐾 Add Pet for Rehoming
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Pet Info */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Pet Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">
                Pet Name <Required />
              </label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block font-medium">
                Species/Animal Type <Required />
              </label>
              <select
                name="species"
                value={formData.species}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              >
                <option value="">--Select--</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Bird</option>
                <option>Other</option>
              </select>
            </div>

            {formData.species === "Other" && (
              <div className="md:col-span-2">
                <label className="block font-medium">
                  Please specify <Required />
                </label>
                <input
                  type="text"
                  name="otherSpecies"
                  value={formData.otherSpecies}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
                />
              </div>
            )}

            <div>
              <label className="block font-medium">Breed</label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block font-medium">
                Age <Required />
              </label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              >
                <option value="">--Select--</option>
                <option>Puppy/Kitten</option>
                <option>Young</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block font-medium">
                Gender <Required />
              </label>
              <div className="flex gap-4 mt-1">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium">Color/Markings</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block font-medium">
                Size <Required />
              </label>
              <select
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              >
                <option value="">--Select--</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>Extra Large</option>
              </select>
            </div>
          </div>
        </section>

        {/* Behavior */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Behavior & Compatibility
          </h3>
          <label className="block font-medium">
            House-trained <Required />
          </label>
          <select
            name="houseTrained"
            value={formData.houseTrained}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
          >
            <option value="">--Select--</option>
            <option>Yes</option>
            <option>No</option>
            <option>Partially</option>
          </select>
        </section>

        {/* Media */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Media Upload
          </h3>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-400"
          />
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">
                Owner Name <Required />
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block font-medium">
                Phone Number <Required />
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium">
                Location/City <Required />
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium"
          >
            Submit for Review
          </button>
        </div>
      </form>
    </div>
  );
}

