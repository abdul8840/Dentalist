import React from 'react'
import { Link } from 'react-router-dom'

const ContactLocation = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row  ">

                    {/* =================== about img ================== */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.936824992831!2d-75.21428062425765!3d38.76515297175256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b9ee12ce8257%3A0x3122963d2d6d3bc5!2s16192%20Coastal%20Hwy%2C%20Lewes%2C%20DE%2019958%2C%20USA!5e0!3m2!1sen!2sin!4v1735713867835!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    {/* ==================== about content ===================== */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">
                            Working Hours
                        </h2>
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

                        <Link to='/'>
                            <button className="btn w-full">Book Appointment</button>
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactLocation
