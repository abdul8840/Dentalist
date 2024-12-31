import React from 'react'
import ServiceList from './ServiceList'

const HomeServices = () => {
  return (
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto ">
                <h2 className="heading text-center"> Our Dental Services</h2>
                <p className="text__para mt-[18px] text-center">
                World-class care for everyone. Our health system offers unmatched, expert health care.
                </p>
            </div>

            <ServiceList />
        </div>
    </section>
  )
}

export default HomeServices
