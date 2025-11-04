// views/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  const sections = [
    { id: "intro", title: "1. Introduction" },
    { id: "info-collect", title: "2. Information We Collect" },
    { id: "how-use", title: "3. How We Use Your Information" },
    { id: "share-info", title: "4. Sharing Your Information" },
    { id: "cookies", title: "5. Cookies and Tracking Technologies" },
    { id: "security", title: "6. Data Security" },
    { id: "rights", title: "7. Your Rights" },
    { id: "retention", title: "8. Data Retention" },
    { id: "international", title: "9. International Data Transfers" },
    { id: "children", title: "10. Children's Privacy" },
    { id: "changes", title: "11. Changes to This Privacy Policy" },
    { id: "contact", title: "12. Contact Us" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-4 sm:px-8 lg:px-16">
      {/* Page Title */}
      <h3 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white relative after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-500 after:mx-auto after:mt-3">
        Privacy Policy
      </h3>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Table of Contents */}
        <aside className="lg:w-1/4 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 sticky top-6 h-fit">
          <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
            Table of Contents
          </h3>
          <ul className="space-y-2">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="block px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 leading-relaxed text-gray-700 dark:text-gray-200 space-y-8">
          {/* Section 1 */}
          <section id="intro">
            <h4 className="text-2xl font-semibold mb-3">1. Introduction</h4>
            <p>
              At Wanderlust, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and protect
              your personal information when you use our platform. By using
              Wanderlust, you consent to the practices described in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="info-collect">
            <h4 className="text-2xl font-semibold mb-3">
              2. Information We Collect
            </h4>
            <p>
              We collect the following types of information to provide you with
              a better experience on Wanderlust:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Your name, email,
                phone number, and payment details.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Device, browser,
                and IP information collected automatically.
              </li>
              <li>
                <strong>Booking Details:</strong> Travel dates, preferences,
                and special requests.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="how-use">
            <h4 className="text-2xl font-semibold mb-3">
              3. How We Use Your Information
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>To process bookings and manage your account.</li>
              <li>To improve user experience and platform performance.</li>
              <li>To send promotional offers (with your consent).</li>
              <li>To ensure platform security and prevent fraud.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="share-info">
            <h4 className="text-2xl font-semibold mb-3">
              4. Sharing Your Information
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Shared with Hosts for booking purposes.</li>
              <li>
                Shared with trusted third-party service providers (e.g.
                payments, customer support).
              </li>
              <li>May disclose data if required by law.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="cookies">
            <h4 className="text-2xl font-semibold mb-3">
              5. Cookies and Tracking Technologies
            </h4>
            <p>
              We use cookies to enhance your experience on Wanderlust. You can
              manage cookie preferences in your browser settings.
            </p>
          </section>

          {/* Section 6 */}
          <section id="security">
            <h4 className="text-2xl font-semibold mb-3">6. Data Security</h4>
            <p>
              We implement robust security measures to protect your data. While
              we use industry standards, no method of storage is 100% secure.
            </p>
          </section>

          {/* Section 7 */}
          <section id="rights">
            <h4 className="text-2xl font-semibold mb-3">7. Your Rights</h4>
            <p>
              You may request to access, update, or delete your personal
              information by contacting us directly.
            </p>
          </section>

          {/* Section 8 */}
          <section id="retention">
            <h4 className="text-2xl font-semibold mb-3">8. Data Retention</h4>
            <p>
              We retain data only as long as necessary to fulfill the purposes
              outlined in this policy or as required by law.
            </p>
          </section>

          {/* Section 9 */}
          <section id="international">
            <h4 className="text-2xl font-semibold mb-3">
              9. International Data Transfers
            </h4>
            <p>
              Your information may be transferred across countries with proper
              safeguards to protect your privacy.
            </p>
          </section>

          {/* Section 10 */}
          <section id="children">
            <h4 className="text-2xl font-semibold mb-3">
              10. Children's Privacy
            </h4>
            <p>
              Wanderlust does not knowingly collect information from children
              under 13. Such data will be deleted if discovered.
            </p>
          </section>

          {/* Section 11 */}
          <section id="changes">
            <h4 className="text-2xl font-semibold mb-3">
              11. Changes to This Privacy Policy
            </h4>
            <p>
              We may update this policy periodically. The latest version will be
              posted with a new “Last Updated” date.
            </p>
          </section>

          {/* Section 12 */}
          <section id="contact">
            <h4 className="text-2xl font-semibold mb-3">12. Contact Us</h4>
            <p>For privacy inquiries, please contact us:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Email: privacy@wanderlust.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Wanderlust Lane, Travel City, TC 56789</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
