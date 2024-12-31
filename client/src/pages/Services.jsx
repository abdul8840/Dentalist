import React from 'react'
import ServiceCard from '../components/services/ServiceCard'
import { services } from '../assets/data/services'

import heroImg01 from "../assets/images/doctor-img01.png"
import heroImg04 from "../assets/images/hero-img03.png"
import heroImg02 from "../assets/images/doctor-img02.png"
import heroImg03 from "../assets/images/doctor-img03.png"


const Services = () => {
  return (
    <>
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">

            {/* ================= hero content ================ */}

            <div className="">
              <div className="lg:w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  Engage with our services by expert doctors
                </h1>
                <p className="text__para mt-[18px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque doloribus sit deleniti dolores praesentium, distinctio tempore eum nulla aut!
                </p>

                <button className='btn'> Make an Appointment</button>
              </div>

              {/* ============ hero counter ================= */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-row lg:items-center gap-5 lg:gap-[30px]  ">
                <div className="">
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '> 5+ </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para mt-[18px]">Services</p>
                </div>

                <div className="">
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '> 10+ </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para mt-[18px]">Expert Doctors</p>
                </div>

                <div className="">
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '> 100% </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text__para mt-[18px]">Efficiency</p>
                </div>
              </div>

            </div>

            {/* ============ hero counter ================= */}


            <div className="flex gap-[30px] justify-end ">
              <div className="">
                <img src={heroImg01} className='w-full' alt="" />
                <img src={heroImg04} className='w-full mt-[30px]' alt="" />
              </div>

              <div className="mt-[30px] ">
                <img src={heroImg02} className='w-full mb-[30px] ' alt="" />
                <img src={heroImg03} className='w-full ' alt="" />
              </div>
            </div>


          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className='heading text-center'>Providing the best dental services</h2>
            <p className="text__para mt-[18px] text-center">
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]'>
            {services.map((item, index) => (
              <ServiceCard index={index} key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
