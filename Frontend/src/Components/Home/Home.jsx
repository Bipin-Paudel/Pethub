export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Heading + CTAs */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Better <span className="text-green-600">Future</span> for Every Pet
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Rehome with care, adopt with love, or rescue with urgency—PetHub makes it simple and compassionate.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/rehome"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-sm active:scale-95 transition"
            >
              Rehome
            </a>
            <a
              href="/adopt"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-green-500 hover:bg-green-600 shadow-sm active:scale-95 transition"
            >
              Adopt
            </a>
            <a
              href="/rescue"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 transition"
            >
              Rescue
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex justify-center">
          <img
            // Replace this with your local asset if you prefer: /images/pets-hero.png
            src="https://www.nationaldaycalendar.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:eco%2Cw_768/MjA2MDEyNzkwNTUxMzU2Nzk5/website-feature---national-adopt-a-shelter-pet-day--april-30.png"
            alt="Happy dog and cat"
            className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What We Offer
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Rehome */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <span className="text-orange-600 text-xl">🏡</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Rehome</h3>
            <p className="mt-2 text-gray-600">
              Safely find a new, loving family for your pet—handled with empathy and transparency.
            </p>
            <a
              href="/rehome"
              className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-medium"
            >
              Start Rehoming →
            </a>
          </div>

          {/* Adopt */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-xl">❤️</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Adopt</h3>
            <p className="mt-2 text-gray-600">
              Meet pets ready for their second chance—filter by species, age, and temperament.
            </p>
            <a
              href="/adopt"
              className="mt-4 inline-block text-green-600 hover:text-green-700 font-medium"
            >
              Browse Pets →
            </a>
          </div>

          {/* Rescue */}
          <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
            <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center">
              <span className="text-red-600 text-xl">🚑</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Rescue</h3>
            <p className="mt-2 text-gray-600">
              Report injured or stray animals and connect with nearby volunteers or shelters.
            </p>
            <a
              href="/rescue"
              className="mt-4 inline-block text-red-600 hover:text-red-700 font-medium"
            >
              Report/Help →
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Every pet deserves safety, love, and a home.
          </h3>
          <p className="mt-3 text-gray-600">
            Be part of the change—rehoming, adopting, or rescuing makes a real impact.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/rehome"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-orange-500 hover:bg-orange-600 shadow-sm active:scale-95 transition"
            >
              Rehome a Pet
            </a>
            <a
              href="/adopt"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-green-500 hover:bg-green-600 shadow-sm active:scale-95 transition"
            >
              Adopt Now
            </a>
            <a
              href="/rescue"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white bg-red-500 hover:bg-red-600 shadow-sm active:scale-95 transition"
            >
              Rescue / Report
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

