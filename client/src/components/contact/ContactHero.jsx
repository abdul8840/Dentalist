import React from 'react'
import heroImg01 from "../../assets/images/hero-img01.png"
import heroImg02 from "../../assets/images/hero-img02.png"
import heroImg03 from "../../assets/images/hero-img03.png"
import { Link } from 'react-router-dom'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

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

const ContactHero = () => {
    return (
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">

                    {/* ================= hero content ================ */}

                    <div className="">
                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index) => (
                                <Link to={link.path} key={index} className='w-9 h-9 border border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="lg:w-[570px] ">
                            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                                Contact
                            </h1>
                            <p className="text__para mt-[18px]">
                                Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.
                            </p>

                            <button className='btn'> Make an Appointment</button>
                        </div>

                        {/* ============ hero counter ================= */}


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
    )
}

export default ContactHero
