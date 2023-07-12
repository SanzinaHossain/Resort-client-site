import heroPattern from "../../images/Home/hero-pattern.jpg"
import { motion } from "framer-motion"
import { GiReceiveMoney, GiSelfLove } from "react-icons/gi"
import { FaHotel } from "react-icons/fa"
import { HiOutlineSupport } from "react-icons/hi"
import "./Home.css"

export default function Home() {
  return (
    <div class="">
      <div
        className=" w-full hi bg-no-repeat bg-cover lg:p-20 p-12 lg:mb-56 mb-96 "
        style={{ backgroundImage: `url(${heroPattern})` }}
      >
        <div>
          <h1 className="text-7xl text-white font-bold text-left">Explore</h1>
          <h1 className=" text-left text-5xl text-white lg:mt-6 mt-3">
            Our Amazing Resort
          </h1>
          <h1 className=" text-left text-xl text-white mt-3">
            Find great places to stay,eat & visit with luxilarious vibe.
          </h1>

          <motion.button
            class="border-2 border-blue-900 rounded-lg text-white p-2 shadow-lg mt-6 hover:bg-blue-700 font-bold hover:border-blue-700 text-left"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Descover Now
          </motion.button>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 lg:mt-28 mt-40 lg:pl-12 pl-6 lg:mb-0 mb-96">
          <div className="w-56 h-64 bg-white p-10 shadow-2xl ">
            <h1 className="text-center text-blue-900 font-bold text-5xl pl-12 pt-4">
              <GiReceiveMoney></GiReceiveMoney>
            </h1>
            <h1 className="text-center text-black text-3xl pt-9">
              Best price guarantee
            </h1>
          </div>
          <div className="w-56 h-64 bg-white p-10 shadow-2xl">
            <h1 className="text-center text-blue-900 font-bold text-5xl pl-12 pt-4">
              <GiSelfLove></GiSelfLove>
            </h1>
            <h1 className="text-center text-black text-3xl pt-9">
              Travellers Love Us
            </h1>
          </div>
          <div className="w-56 h-64 bg-white p-10 shadow-2xl">
            <h1 className="text-center text-blue-900 font-bold text-5xl pl-12 pt-4">
              <FaHotel></FaHotel>
            </h1>
            <h1 className="text-center text-black text-3xl pt-9">
              Best Hotel in town
            </h1>
          </div>
          <div class="w-56 h-64 bg-white p-10 shadow-2xl">
            <h1 class="text-center text-blue-900 font-bold text-6xl pl-12 pt-4">
              <HiOutlineSupport></HiOutlineSupport>
            </h1>
            <h1 class="text-center text-black text-3xl pt-9">
              Our team support
            </h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
