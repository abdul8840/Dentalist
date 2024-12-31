import React from 'react'
import { Link } from 'react-router-dom'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaTooth } from "react-icons/fa";

const socialLinks = [
  {
    path: "/",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  },
]

const quickLinks01 = [
  {
    path: "/",
    display: "Home"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  },

  {
    path: "/contact",
    display: "Contact"
  },
]

const quickLinks02 = [
  {
    path: "/doctor",
    display: "Find a Doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  },
  {
    path: "/",
    display: "Find a Location"
  },
  {
    path: "/",
    display: "Get a Opinion "
  },
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/",
    display: "Terms & Condition"
  },
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">

          <div className="">
            {/* <img src={logo} alt="" /> */}
            <h2 className='flex items-center gap-2'><FaTooth className='text-2xl text-primaryColor' /> <span className='text-xl font-bold'>Denta<span className='text-primaryColor'>list</span></span></h2>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright &copy; {year} MetlifeDM LLC all right reserved</p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className='w-9 h-9 border border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
            <ul className="">
              {quickLinks01.map((link, index) => (
                <li key={index} className='mb-4 '>
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to:</h2>
            <ul className="">
              {quickLinks02.map((link, index) => (
                <li key={index} className='mb-4 '>
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
            <ul className="">
              {quickLinks03.map((link, index) => (
                <li key={index} className='mb-4 '>
                  <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">
                  {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
