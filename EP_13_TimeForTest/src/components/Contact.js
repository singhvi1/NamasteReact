import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div className="bg-orange-50 px-6 py-24 sm:py-32 lg:px-8">
      {/* Title */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          We're here to help! Fill out the form below and we'll reach out
          quickly.
        </p>
      </div>

      {/* Form */}
      <form className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white rounded-xl p-8 shadow-lg">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First-Name"
              autoComplete="given-name"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          {/* Phone */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <div className="mt-2 flex rounded-md border border-gray-300 bg-white shadow-sm focus-within:ring-1 focus-within:ring-orange-400">
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="appearance-none rounded-l-md border-none bg-transparent px-3 py-2 pr-8 text-gray-600 focus:outline-none"
                >
                  <option>IND</option>
                  <option>US</option>
                  <option>CA</option>
                </select>
                <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="+91-9161827890"
                className="flex-1 rounded-r-md border-none px-3 py-2 text-gray-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
            />
          </div>

          {/* Agree */}
          <div className="sm:col-span-2 flex items-center gap-x-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
            />
            <label htmlFor="agree" className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="font-medium text-orange-500">
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded-md bg-orange-500 px-4 py-2 text-white font-semibold shadow hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
