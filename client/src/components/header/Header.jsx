import React, { useEffect, useRef } from 'react'
// import logo from "../../assets/images/logo.png"
import userImg from "../../assets/images/avatar-icon.png"
import { NavLink, Link } from "react-router-dom"
import { BiMenu } from "react-icons/bi"
import { FaTooth } from "react-icons/fa";

const navLinks = [
  {
    path: "/",
    display: 'Home'
  },
  {
    path: "/doctors",
    display: 'Find a Doctor'
  },
  {
    path: "/services",
    display: 'Services'
  },
  {
    path: "/contact",
    display: 'Contact'
  },
]

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* { ========== logo =========== } */}
          <div className="">
            {/* <img src={logo} alt="" /> */}
            <h2 className='flex items-center gap-2'><FaTooth className='text-2xl text-primaryColor' /> <span className='text-xl font-bold'>Denta<span className='text-primaryColor'>list</span></span></h2>
          </div>

          {/* ============ menu =========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => <li key={index}>
                <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display}</NavLink>
              </li>)}
            </ul>
          </div>

          {/* =========== nav right ========== */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full cursor-auto'>
                <img src={userImg} className='w-full rounded-full' alt="" />
              </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor text-white py-2 px-6 font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
            </Link>

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header
