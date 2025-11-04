const React = require('react');
const Layout = require('./layouts/boilerplate');

function EditProfile(props) {
  const { user = {} } = props;
  const profileFilename = user.profilePicture?.pfilename || '';

  return (
    <Layout>
      <div className="min-h-screen flex items-start justify-center py-20 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
            Edit Your Profile
          </h1>

          <form
            action="/profile/edit"
            method="POST"
            encType="multipart/form-data"
            className="space-y-4"
          >
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={user.username || ''}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={user.email || ''}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="profileimage" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Upload Profile Image
              </label>
              <input
                id="profileimage"
                name="profileimage"
                type="file"
                className="mt-1 block w-full text-sm text-gray-700 dark:text-gray-200"
                accept="image/*"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Optional — upload a new profile picture.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="deleteProfile"
                name="deleteProfile"
                type="checkbox"
                value={profileFilename}
                className="h-4 w-4 text-red-600 border-gray-300 rounded"
              />
              <label htmlFor="deleteProfile" className="text-sm text-red-600">
                Remove current profile picture
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium"
              >
                Save Changes
              </button>
              <a
                href="/profile"
                className="w-full sm:w-auto inline-flex justify-center px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 rounded-md font-medium"
              >
                Go back
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = EditProfile;
