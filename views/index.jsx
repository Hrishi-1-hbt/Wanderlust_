// views/Listings.jsx
const React = require("react");

function Listings({ listings = [] }) {
  const tags = [
    { name: "Trending", icon: "fa-fire" },
    { name: "Surfing", icon: "fa-water" },
    { name: "Amazing cities", icon: "fa-city" },
    { name: "Beach", icon: "fa-umbrella" },
    { name: "Farms", icon: "fa-cow" },
    { name: "Lake", icon: "fa-mountain" },
    { name: "Castles", icon: "fa-fort-awesome" },
    { name: "Rooms", icon: "fa-bed" },
    { name: "Forest", icon: "fa-tree" },
    { name: "Pool", icon: "fa-person-swimming" },
  ];

  return (
    <html>
      <head>
        <title>Wanderlust Listings</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-gray-50 text-gray-800">
        {/* TAG SCROLL BAR */}
        <div className="relative flex items-center justify-center gap-4 p-4 overflow-x-auto bg-white shadow-sm rounded-xl">
          {tags.map((tag, idx) => (
            <a
              key={idx}
              href={`/listing?tag=${encodeURIComponent(tag.name)}`}
              className="flex flex-col items-center text-gray-600 hover:text-pink-600 transition"
            >
              <i className={`fa-solid ${tag.icon} text-2xl`}></i>
              <p className="text-sm mt-1">{tag.name}</p>
            </a>
          ))}
        </div>

        {/* GST Toggle */}
        <div className="flex justify-end pr-10 mt-6">
          <div className="flex items-center gap-2 shadow px-4 py-2 bg-white rounded-lg">
            <input
              id="gstToggle"
              type="checkbox"
              className="h-5 w-5 text-pink-500"
              onChange="toggleGST()"
            />
            <label htmlFor="gstToggle" className="text-gray-700 text-sm">
              Display total after taxes
            </label>
          </div>
        </div>

        {/* LISTINGS */}
        <div className="container mx-auto px-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <a
                href={`/listing/${listing._id}`}
                key={listing._id}
                className="block hover:scale-[1.02] transition-transform"
              >
                <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
                  {listing.image && listing.image.length > 0 && (
                    <img
                      src={listing.image[0].url}
                      alt="listing"
                      className="w-full h-64 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-pink-600">
                      {listing.title.length > 26
                        ? listing.title.substring(0, 25) + "..."
                        : listing.title}
                    </h3>

                    <p className="mt-3 text-gray-800 font-medium">
                      <span className="price" data-base-price={listing.price}>
                        ₹{listing.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-gray-500 ml-1">/ night</span>
                      <span className="ml-1 text-gray-400 gst-label">
                        (excl. GST)
                      </span>
                    </p>

                    <div className="flex justify-between text-gray-600 mt-2 text-sm">
                      <span>
                        <i className="fa-solid fa-location-crosshairs"></i>{" "}
                        {listing.location}, {listing.country}
                      </span>
                      <span>
                        <i className="fa-solid fa-heart text-pink-500"></i>{" "}
                        {listing.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="container mx-auto mt-16 px-6">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="mb-6 text-gray-600">
            Your travel-related queries, answered to ensure a smooth journey! ✨
          </p>

          <div className="space-y-4">
            {[
              {
                q: "How can I find new travel destinations?",
                a: "Wanderlust provides an interactive map 🗺️ that lets you explore popular and hidden destinations worldwide.",
              },
              {
                q: "Can I contribute my own travel experiences?",
                a: "Yes! Create your own travel stories and share them with the Wanderlust community. ✈️",
              },
              {
                q: "How do I use the map to plan my trips?",
                a: "Our map feature allows you to view attractions, accommodations, and local experiences easily.",
              },
              {
                q: "Is my personal information safe with Wanderlust?",
                a: "Absolutely. We use industry-standard security protocols to protect your data. 🔐",
              },
              {
                q: "How do I sign up for Wanderlust?",
                a: "Just visit the registration page, enter your details, and start exploring! 🌟",
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                <summary className="font-medium text-gray-800 cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* GST Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const gstRate = 0.18;
              function toggleGST() {
                const gstToggle = document.getElementById("gstToggle");
                const priceElements = document.querySelectorAll(".price");
                const gstLabels = document.querySelectorAll(".gst-label");
                priceElements.forEach((priceElement, index) => {
                  const basePrice = parseFloat(priceElement.getAttribute("data-base-price"));
                  const totalPrice = basePrice * (1 + gstRate);
                  if (gstToggle.checked) {
                    priceElement.innerText = totalPrice.toLocaleString("en-IN", { style: "currency", currency: "INR" });
                    gstLabels[index].innerText = "(incl. GST)";
                    gstLabels[index].classList.add("text-pink-600");
                  } else {
                    priceElement.innerText = basePrice.toLocaleString("en-IN", { style: "currency", currency: "INR" });
                    gstLabels[index].innerText = "(excl. GST)";
                    gstLabels[index].classList.remove("text-pink-600");
                  }
                });
              }
            `,
          }}
        ></script>
      </body>
    </html>
  );
}

module.exports = Listings;
