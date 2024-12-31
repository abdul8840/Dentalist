import React from 'react'
import DoctorList from './DoctorList'

const Doctor = () => {
    return (
        <section>
            <div className="container">
                <div className="xl:w-[470px] mx-auto ">
                    <h2 className="heading text-center"> Our greate doctors</h2>
                    <p className="text__para mt-[18px] text-center">
                        World-class care for everyone. Our health system offers unmatched, expert health care.
                    </p>
                </div>

                <DoctorList />
            </div>
        </section>
    )
}

export default Doctor
