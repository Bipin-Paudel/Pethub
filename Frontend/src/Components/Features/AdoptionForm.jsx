import { useState } from "react";

export default function AdoptionForm({ pet }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    occupation: "",
    otherPets: "",
    homeType: "",
    yard: "",
    familyApproval: "",
    dailyTime: "",
    experience: "",
    commitment: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption Form Submitted:", formData);
    alert("Your adoption request has been submitted! (Console log only for now)");
  };

  const Required = () => <span className="text-red-500">*</span>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-10">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        🐾 Adoption Form
      </h2>

      {pet && (
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-green-800">Adopting:</h3>
          <p className="text-green-700">{pet.name} ({pet.species})</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Personal Information */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">
                Full Name <Required />
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
              />
            </div>
            <div>
              <label className="block font-medium">
                Phone <Required />
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block font-medium">
                Address <Required />
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address / City"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Your Age"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
              />
            </div>
            <div>
              <label className="block font-medium">
                Occupation <Required />
              </label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Occupation"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              />
            </div>
          </div>
        </section>

        {/* Home Environment */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Home Environment</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">
                Do you have other pets? <Required />
              </label>
              <select
                name="otherPets"
                value={formData.otherPets}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              >
                <option value="">--Select--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">
                Home Type <Required />
              </label>
              <select
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              >
                <option value="">--Select--</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">
                Do you have a yard/outdoor space? <Required />
              </label>
              <select
                name="yard"
                value={formData.yard}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              >
                <option value="">--Select--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">
                All family members approve? <Required />
              </label>
              <select
                name="familyApproval"
                value={formData.familyApproval}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
                required
              >
                <option value="">--Select--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium">Time available for pet daily</label>
              <input
                type="text"
                name="dailyTime"
                value={formData.dailyTime}
                onChange={handleChange}
                placeholder="Hours per day"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>
        </section>

        {/* Experience & Commitment */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Experience & Commitment</h3>
          <div className="space-y-4">
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Previous experience with pets"
              rows={3}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300"
            />
            <select
              name="commitment"
              value={formData.commitment}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300"
            >
              <option value="">How long can you commit to caring for the pet?</option>
              <option value="6 months">6 months</option>
              <option value="1 year">1 year</option>
              <option value="Lifetime">Lifetime</option>
            </select>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any other notes or special requirements"
              rows={3}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300"
            />
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 w-full md:w-1/2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
          >
            Submit Adoption Request
          </button>
        </div>

      </form>
    </div>
  );
}
