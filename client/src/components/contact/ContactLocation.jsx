import React, { useState } from 'react';

const ContactLocation = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);

  const closePopup = () => setShowPopup(false);

  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* Map Section */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.936824992831!2d-75.21428062425765!3d38.76515297175256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b9ee12ce8257%3A0x3122963d2d6d3bc5!2s16192%20Coastal%20Hwy%2C%20Lewes%2C%20DE%2019958%2C%20USA!5e0!3m2!1sen!2sin!4v1735713867835!5m2!1sen!2sin"
              className="w-[350px] md:w-[600px] h-[250px] md:h-[450px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Working Hours</h2>
            <p className="text_para mt-[10px]">
              Check out DentiCare’s Office hours to plan your visit.
            </p>

            <ul className="mt-[30px]">

                            <li className="flex items-center justify-between mb-3 border-b border-gray-200 px-2 ">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    Monday
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    10:00 AM – 7:30 PM
                                </p>
                            </li>

                            <li className="flex items-center justify-between mb-3 border-b border-gray-200 px-2">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    Tuesday
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    11:00 AM – 8:30 PM
                                </p>
                            </li>

                            <li className="flex items-center justify-between mb-3 border-b border-gray-200 px-2">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                Wednesday
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    9:00 AM – 6:30 PM
                                </p>
                            </li>

                            <li className="flex items-center justify-between mb-3 border-b border-gray-200 px-2">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                Thursday
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    10:00 AM – 6:30 PM
                                </p>
                            </li>

                            <li className="flex items-center justify-between mb-3 border-b border-gray-200 px-2">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                Friday
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    9:00 AM – 8:30 PM
                                </p>
                            </li>

                            <li className="flex items-center justify-between mb-3 border-b border-gray-200 px-2">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                Saturday-Sunday
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    Closed
                                </p>
                            </li>

                        </ul>


            <button className="btn w-full" onClick={openPopup}>
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
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


    </section>
  );
};

export default ContactLocation;
