import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { useEffect, useState, useContext } from "react"

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const {doctors} =  useContext(AppContext)
  const navigate = useNavigate()


  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(()=> {
    applyFilter()
  })

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
  {/* Filter Button (Visible on Small Screens) */}
  <button
    className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-300 text-white' : ''}`}
    onClick={() => setShowFilter((prev) => !prev)}
  >
    Filters
  </button>

  {/* Filter Options */}
  <div
    className={`flex-col gap-4 text-sm text-gray-600 ${
      showFilter ? 'flex' : 'hidden sm:flex'
    }`}
  >
    {/* Filter Items */}
    {[
      'General physician',
      'Gynecologist',
      'Dermatologist',
      'Pediatricians',
      'Neurologist',
      'Gastroenterologist',
    ].map((specialityName) => (
      <p
        key={specialityName}
        onClick={() =>
          speciality === specialityName
            ? navigate('/doctors')
            : navigate(`/doctors/${specialityName}`)
        }
        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
          speciality === specialityName ? 'bg-indigo-100 text-black' : ''
        }`}
      >
        {specialityName}
      </p>
    ))}
  </div>

  {/* Doctor Cards */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
    {filterDoc.map((item, index) => (
      <div
        key={index}
        onClick={() => navigate(`/appointment/${item._id}`)}
        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
      >
        <img
          className="bg-blue-50 w-full"
          src={item.image}
          alt=""
        />
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-green-500">
            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
            <p>Available</p>
          </div>
          <p className="text-gray-900 text-lg font-medium">{item.name}</p>
          <p className="text-gray-600 text-sm">{item.speciality}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}

export default Doctors
