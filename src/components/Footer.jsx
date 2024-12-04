import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="md:mx-10 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-5 pt-5">

        {/* left section */}
        <div className="flex flex-col items-start md:w-1/3">
            <img className="w-32 md:w-40" src={assets.logo} alt="" />
            <p className="text-sm md:text-base text-gray-600 leading-6 mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur exercitationem possimus rerum ut cum natus dolore, temporibus perferendis, atque, consequuntur ab? Iusto provident officia voluptate, aspernatur optio ex id perspiciatis eum vel nihil, minus veritatis. Reprehenderit quas et.
            </p>
        </div>

        {/* centre section */}
        <div className="flex flex-col md:w-1/4">
           <p className="text-lg md:text-xl font-medium mb-3 md:mb-5">COMPANY</p>
           <ul className="flex flex-col gap-2 text-sm md:text-base text-gray-600"> 
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Privacy Policy</li>
           </ul> 
        </div>

        {/* right section */}
        <div className="flex flex-col md:w-1/4">
            <p className="text-lg md:text-xl font-medium mb-3 md:mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-sm md:text-base text-gray-600">
                <li>+263 782443070</li>
                <li>kelvinmusipha@gamil.com</li>
            </ul>
        </div>

      </div>

      {/* copyright text */}
      <div className="mt-8">
        <hr className="border-gray-300" />
        <p className="py-5 text-xs md:text-sm text-center text-gray-600">Copyright 2024@ - All Right Reserved.</p>
      </div>
    </div>
  )
}


export default Footer
