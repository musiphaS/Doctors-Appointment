// import React from 'react'

import { assets } from "../assets/assets"

const About = () => {
  return (
    <>
      <div className="text-left sm:text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT<span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="flex my-10 flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
        </div>
      </div>

      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span> </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy life.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVIENECE:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>

    </>
  )
}

export default About
