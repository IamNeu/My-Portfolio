import React, { useState } from "react";

const ConnectForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={toggleForm}
        className="px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-all duration-300 shadow-md"
      >
        Let’s Connect
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-[90%] max-w-md relative">
            
            {/* Close Button */}
            <button
              onClick={toggleForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
              Let’s Connect
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              ></textarea>

              <button
                type="submit"
                className="w-full py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectForm;
