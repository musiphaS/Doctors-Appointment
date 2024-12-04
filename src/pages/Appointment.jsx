// import React from 'react'

import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { assets } from "../assets/assets"
import RelatedDoctors from "../components/RelatedDoctors"

const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([]);

    // Define time range for slots (8:00 AM to 4:00 PM)
    const START_HOUR = 8; // 8 AM
    const END_HOUR = 16;  // 4 PM

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set start time to 8:00 AM
      currentDate.setHours(START_HOUR, 0, 0, 0);

      // End time is 4:00 PM
      let endTime = new Date(currentDate);
      endTime.setHours(END_HOUR, 0, 0, 0);

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Add time slots
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        // Increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };


  useEffect(() => {
    fetchDocInfo()
  });

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

  return docInfo && (
    <>
      {/* doctor details */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <img className="bg-blue-300 w-full rounded-lg sm:max-w-[288px]" src={docInfo.image} alt="" />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0 -mt-20">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className="py-1 px-2 border text-xs rounded-full">{docInfo.experience}</button>
          </div>
          <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
            About <img src={assets.info_icon} alt="" />
          </p>
          <p className="text-md text-gray-500 mt-1">{docInfo.about}</p>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>


      {/* Booking Slots */}
      <div className="mt-4 font-medium text-gray-700 sm:ml-20 lg:ml-72 sm:pl-4">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center overflow-x-scroll w-full mt-4 scrollbar-hide">
          {docSlots.length && docSlots.map((item, index) => (
            <div
              onClick={() => setSlotIndex(index)}
              className={`text-center py-6 min-w-[64px] rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-300 text-white' : 'border border-gray'}`}
              key={index}>
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length && docSlots[slotIndex].map((item, index) => (
            <p
              onClick={() => setSlotTime(item.time)}
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-blue-300 text-white' : 'text-gray-400 border border-gray-300'}`}
              key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className="bg-blue-300 text-white text-sm font-light px-14 py-3 rounded-full my-6">
          Book an appointment
        </button>
      </div>


      {/* related doctors list */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

    </>

  )
}

export default Appointment
