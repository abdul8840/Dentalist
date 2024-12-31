import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
    return (
        <div className=''>
            <div className="">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                    About of
                    <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Muhibur Rahman</span>
                </h3>
                <p className="text__para mt-[18px] text-textColor">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque omnis iusto error minima, voluptatibus sed incidunt quo dicta mollitia voluptatem odit dignissimos modi officia, nostrum assumenda quae molestiae. Architecto fuga sunt quos odio tempora dolore debitis, modi voluptatibus cumque distinctio, temporibus sapiente minima laudantium blanditiis explicabo quas vero! Deserunt!
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>

                <ul className="pt-4 md:p-5">

                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div className="">
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate("03-08-2012")} - {formateDate("012-07-2015")}</span>
                            <p className="text-[15px] leading-6 font-medium text-textColor">
                                PHD in Surgeon
                            </p>
                        </div>
                        <p className="text-[16px] leading-5 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>

                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                        <div className="">
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate("12-04-2010")} - {formateDate("12-02-2012")}</span>
                            <p className="text-[16px] leading-6 font-medium text-textColor">
                                PHD in Surgeon
                            </p>
                        </div>
                        <p className="text-[16px] leading-5 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Experience</h3>

                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">

                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("03-25-2012")} - {formateDate("02-20-2016")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                        </p>
                        <p className="text-[16px] leading-5 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>

                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                            {formateDate("07-25-2012")} - {formateDate("06-20-2016")}
                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                            Sr. Surgeon
                        </p>
                        <p className="text-[16px] leading-5 font-medium text-textColor">
                            New Apollo Hospital, New York
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default DoctorAbout
