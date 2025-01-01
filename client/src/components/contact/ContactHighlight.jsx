import React from 'react'
import icon01 from "../../assets/images/ecall.png"
import icon02 from "../../assets/images/icon02.png"
import icon03 from "../../assets/images/pcall.png"
import icon04 from "../../assets/images/gmail.png"

const ContactHighlight = () => {
  return (
    <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className='heading text-center'>Contact <span className='text-primaryColor'>Dentalist</span></h2>
            <p className="text_para text-center">
            Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[20px] lg:mt-[30px] ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[20px] lg:mt-[30px] ">

              <div className="py-[30px] px-5 ">
                <div className="flex items-center justify-center">
                  <img src={icon01} className='h-[150px]' alt="" />
                </div>
                <div className="mt-[30px] ">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">Emergency Phone</h2>
                  <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                  415-205-5550 <br />
                  Call us Anytime 24/7
                  </p>
                  
                </div>
              </div>

              <div className="py-[30px] px-5 ">
                <div className="flex items-center justify-center">
                  <img src={icon02} className='h-[150px]' alt="" />
                </div>
                <div className="mt-[30px] ">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">Address</h2>
                  <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                  500 Linden Ave, South San Francisco, <br />
                  CA 94080, United States
                  </p>
                  
                </div>
              </div>

              <div className="py-[30px] px-5 ">
                <div className="flex items-center justify-center">
                  <img src={icon03} className='h-[150px]' alt="" />
                </div>
                <div className="mt-[30px] ">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">Book By Phone</h2>
                  <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                  415-205-5550 <br />
                  405-222-5551
                  </p>
                  
                </div>
              </div>

              <div className="py-[30px] px-5 ">
                <div className="flex items-center justify-center">
                  <img src={icon04} className='h-[150px]' alt="" />
                </div>
                <div className="mt-[30px] ">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">Email Us</h2>
                  <p className="text__para leading-7 text-textColor font-[400] mt-4 text-center">
                  office@denticare.com <br />
                  emergencies@denticare.com
                  </p>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </section>
  )
}

export default ContactHighlight
