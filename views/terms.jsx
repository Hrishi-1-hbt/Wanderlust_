const React = require('react');
const Layout = require('./layouts/boilerplate');

function Terms() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Terms and Conditions
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Table of Contents */}
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Table of Contents
                </h2>
                <nav className="space-y-2">
                  {/* Generate TOC items */}
                  {[
                    "Introduction",
                    "Definitions",
                    "Account Registration",
                    // ... add all sections
                  ].map((section, index) => (
                    <a
                      key={section}
                      href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                    >
                      {`${index + 1}. ${section}`}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                {/* Sections */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Welcome to Wanderlust! These Terms and Conditions govern your use of our platform...
                  </p>
                </section>

                {/* Add all other sections following the same pattern */}
                {/* Each section should follow this structure: */}
                <section id="definitions" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Definitions
                  </h2>
                  <div className="text-gray-600 dark:text-gray-300">
                    <p className="mb-4">In these Terms:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong className="text-gray-900 dark:text-white">Platform</strong> refers to 
                        Wanderlust's website, mobile app, and associated services.
                      </li>
                      {/* Add other list items */}
                    </ul>
                  </div>
                </section>

                {/* Continue with all other sections */}
                
                {/* Contact Section */}
                <section id="contact-us" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    22. Contact Us
                  </h2>
                  <div className="text-gray-600 dark:text-gray-300">
                    <p className="mb-4">
                      If you have any questions about these Terms, please contact us at:
                    </p>
                    <ul className="space-y-2">
                      <li>Email: support@wanderlust.com</li>
                      <li>Phone: +123-456-7890</li>
                      <li>Address: 123 Wanderlust Avenue, Dream City, Wonderland, 12345</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Terms;