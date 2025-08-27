import { useState } from "react";

export default function RescueReportForm() {
  const [formData, setFormData] = useState({
    reporterName: "",
    phone: "",
    email: "",
    petName: "",
    species: "",
    condition: "",
    location: "",
    photos: [],
    notes: "",
  });

  const [photoPreviews, setPhotoPreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, photos: files }));
    const previews = files.map((file) => URL.createObjectURL(file));
    setPhotoPreviews(previews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["reporterName", "species", "condition", "location"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the required field: ${field}`);
        return;
      }
    }
    if (formData.photos.length === 0) {
      alert("Please upload at least one photo of the pet.");
      return;
    }
    console.log("Rescue Report Submitted:", formData);
    alert("Rescue report submitted successfully! (Console log only for now)");
  };

  const Required = () => <span className="text-red-500">*</span>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-10">
      <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
        🐾 Report an Injured or Abandoned Pet
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Reporter Info */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">
                Your Name <Required />
              </label>
              <input
                type="text"
                name="reporterName"
                value={formData.reporterName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>
        </section>

        {/* Pet Info */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Pet Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Pet Name</label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                placeholder="If known"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div>
              <label className="block font-medium">
                Species <Required />
              </label>
              <select
                name="species"
                value={formData.species}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
              >
                <option value="">--Select--</option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                <option>Rabbit</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium">
                Condition <Required />
              </label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
              >
                <option value="">--Select--</option>
                <option>Injured</option>
                <option>Sick</option>
                <option>Abandoned</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium">
                Location <Required />
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where is the pet located?"
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>
        </section>

        {/* Media Upload */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Media Upload</h3>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
          />
          {photoPreviews.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {photoPreviews.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Preview ${idx}`}
                  className="h-24 w-24 object-cover rounded-lg border"
                />
              ))}
            </div>
          )}
        </section>

        {/* Notes */}
        <section>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Additional Notes</h3>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any other information about the pet"
            rows={3}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-red-300"
          />
        </section>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 w-full md:w-1/2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
          >
            Submit Rescue Report
          </button>
        </div>

      </form>
    </div>
  );
}
