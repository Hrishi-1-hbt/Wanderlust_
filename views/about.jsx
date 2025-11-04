import React from "react";

export default function About() {
  return (
    <div className="font-sans transition-colors duration-300 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      {/* Header */}
      <header className="text-center py-12 text-pink-500 dark:text-pink-400">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
          About Us
        </h1>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto p-6 md:p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        {/* Intro */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <img
              src="https://media.istockphoto.com/id/509553708/photo/tropical-modern-villa-exterior.jpg?s=612x612&w=0&k=20&c=rMmOmihiXHl6htuhYVzbfPdKAawYHFuNMhD32A0sWUg="
              alt="Travel Experience"
              className="rounded-xl w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
            />
            <div className="w-full md:w-1/2 text-justify text-lg leading-relaxed">
              <p>
                Welcome to{" "}
                <strong className="text-orange-500">Wanderlust</strong> — Discover your
                perfect local stay. We connect travelers with authentic local
                homes, offering a wide variety of unique accommodations to suit
                every style and budget. Whether you're looking for a cozy
                homestay, a guesthouse, or a modern apartment, Wanderlust helps
                you feel at home wherever you go.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-pink-500 border-b-2 border-cyan-400 pb-2 mb-4">
            Our Mission
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10">
            <img
              src="https://t4.ftcdn.net/jpg/06/13/33/21/360_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
              alt="Our Mission Image"
              className="rounded-xl w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
            />
            <div className="w-full md:w-1/2 text-justify text-lg leading-relaxed">
              <p>
                At <strong className="text-red-500">Wanderlust</strong>, our mission is to
                redefine travel by connecting guests with hosts for authentic,
                local experiences. We aim to build meaningful connections that
                celebrate culture and community through personal, memorable
                stays. Experience every destination like a local.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-pink-500 border-b-2 border-cyan-400 pb-2 mb-4">
            Our Values
          </h2>
          <ul className="space-y-4">
            <li className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 rounded-lg">
              <strong>Trust:</strong> We ensure a secure and reliable experience
              for both guests and hosts with verified listings and transparent
              reviews.
            </li>
            <li className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 rounded-lg">
              <strong>Transparency:</strong> Clear communication is key. We make
              sure all pricing and policies are upfront — book with confidence.
            </li>
            <li className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 rounded-lg">
              <strong>Sustainability:</strong> We support eco-friendly stays and
              encourage mindful travel to protect our planet.
            </li>
          </ul>
        </section>

        {/* Offerings */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-pink-500 border-b-2 border-cyan-400 pb-2 mb-4">
            What We Offer
          </h2>
          <ul className="space-y-4">
            <li className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 rounded-lg">
              <strong>Local Variety:</strong> From village homestays to beach
              huts, we offer local stays that reflect the true spirit of each
              place.
            </li>
            <li className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 rounded-lg">
              <strong>Simple & Seamless:</strong> Easily search, book, and
              connect with hosts through our user-friendly platform.
            </li>
            <li className="bg-blue-100 dark:bg-gray-700 border-l-4 border-blue-500 p-4 rounded-lg">
              <strong>Community:</strong> Wanderlust is more than a booking site —
              it's a local network of people sharing their culture and stories.
            </li>
          </ul>
        </section>

        {/* Join Us */}
        <section>
          <h2 className="text-2xl font-bold text-pink-500 border-b-2 border-cyan-400 pb-2 mb-4">
            Join Us
          </h2>
          <div className="text-lg leading-relaxed text-justify space-y-4">
            <p>
              Whether you're looking for a stay or opening your home to travelers,{" "}
              <strong className="text-orange-500">Wanderlust</strong> connects you to a
              community that values meaningful, local experiences.
            </p>
            <p>
              Have questions? Reach out anytime through our{" "}
              <a href="/contact" className="text-blue-500 hover:underline">
                Contact Us
              </a>{" "}
              page — we’re here to help!
            </p>
            <p className="text-center mt-8 text-lg font-medium">
              Thank you for choosing{" "}
              <strong className="text-orange-500">Wanderlust</strong> — where every stay
              feels like home, and every host has a story to share.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
