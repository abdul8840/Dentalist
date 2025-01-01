import React, { useState } from "react";

const SlidePanel = () => {

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);

  const closePopup = () => setShowPopup(false);

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          500 BDT
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Sunday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM – 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Wednesday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM – 9:30 PM
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              Thursday
            </p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">
              4:00 PM – 9:30 PM
            </p>
          </li>

        </ul>
      </div>
      <button className="btn px-2 w-full rounded-md" onClick={openPopup}>Book Appointment</button>

      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999999] p-4"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg relative mt-[55px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
              onClick={closePopup}
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Book Appointment</h2>
            <form>
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              {/* Appointment Date */}
              <div className="mb-3">
                <label htmlFor="date" className="block text-sm font-medium text-gray-600 mb-1">
                  Appointment Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Select Doctor */}
              <div className="mb-3">
                <label htmlFor="doctor" className="block text-sm font-medium text-gray-600 mb-1">
                  Select Doctor
                </label>
                <select
                  id="doctor"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select a doctor</option>
                  <option value="dr-smith">Dr. Smith</option>
                  <option value="dr-johnson">Dr. Johnson</option>
                  <option value="dr-williams">Dr. Williams</option>
                </select>
              </div>

              {/* Additional Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  rows="2"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter any additional details"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlidePanel;
