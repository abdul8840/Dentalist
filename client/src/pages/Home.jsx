import React from 'react'
import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom'
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import About from '../components/about/About'
import HomeServices from '../components/services/HomeServices'
import Feature from '../components/feature/Feature'
import Doctor from '../components/doctor/Doctor'


const Home = () => {
  return (
    <>
      
      {/* =============== hero section ============== */}
      
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">

              {/* ================= hero content ================ */}

              <div className="">
                <div className="lg:w-[570px] ">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  We help patients live a healty, longer life
                  </h1>
                  <p className="text__para mt-[18px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque doloribus sit deleniti dolores praesentium, distinctio tempore eum nulla aut!
                  </p>

                  <button className='btn'> Make an Appointment</button>
                </div>

                {/* ============ hero counter ================= */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-row lg:items-center gap-5 lg:gap-[30px]  ">
                  <div className="">
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '> 15+ </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para mt-[18px]">Year of Experience</p>
                  </div>

                  <div className="">
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '> 10+ </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para mt-[18px]">Clinic Location</p>
                  </div>

                  <div className="">
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '> 100% </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                    <p className="text__para mt-[18px]">Patient Satisfaction</p>
                  </div>
                </div>

              </div>

              {/* ============ hero counter ================= */}

              <div className="flex gap-[30px] justify-end ">
                <div className="">
                  <img src={heroImg01} className='w-full' alt="" />
                </div>

                <div className="mt-[30px] ">
                  <img src={heroImg02} className='w-full mb-[30px] ' alt="" />
                  <img src={heroImg03} className='w-full ' alt="" />
                </div>
              </div>


            </div>
          </div>
        </section>

      {/* =============== hero section end ============== */}

      {/* =============== home page highlights ============== */}

        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto ">
              <h2 className='heading text-center'>Providing the best dental services</h2>
              <p className="text__para mt-[18px] text-center">
                World-class care for everyone. Our health system offers unmatched, expert health care.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">

                <div className="py-[30px] px-5 ">
                  <div className="flex items-center justify-center">
                    <img src={icon01} alt="" />
                  </div>
                  <div className="mt-[30px] ">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">Find a Doctor</h2>
                    <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                      <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                  </div>
                </div>

                <div className="py-[30px] px-5 ">
                  <div className="flex items-center justify-center">
                    <img src={icon02} alt="" />
                  </div>
                  <div className="mt-[30px] ">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">Find a Location</h2>
                    <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                      <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                  </div>
                </div>

                <div className="py-[30px] px-5 ">
                  <div className="flex items-center justify-center">
                    <img src={icon03} alt="" />
                  </div>
                  <div className="mt-[30px] ">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">Book Appointment</h2>
                    <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                    World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                      <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      
      {/* =============== home page highlights end ============== */}

      {/* =============== about section ============== */}

        <About />

      {/* =============== about section end ============== */}

      {/* =============== services section ============== */}

      <HomeServices />

      {/* =============== services section end ============== */}


      {/* =============== feature section ============== */}

      <Feature />

      {/* =============== feature section end ============== */}


      {/* =============== doctor section ============== */}

      <Doctor />

      {/* =============== doctor section end ============== */}

    </>
  )
}

export default Home
