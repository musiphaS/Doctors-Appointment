import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-10 px-4 text-gray-900 sm:px-8 md:px-16">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center">
        Top Doctors to Book
      </h1>
      <p className="w-full max-w-md text-center text-sm md:text-base lg:text-lg">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {doctors.slice(0, 8).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2"
          >
            <img
              className="w-full bg-blue-50"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-6 py-2 rounded-full mt-6 md:mt-10 hover:bg-blue-100"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;