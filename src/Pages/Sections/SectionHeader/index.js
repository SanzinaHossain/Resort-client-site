import heroPattern from "../../../images/Home/hero-pattern.jpg"
import { motion } from "framer-motion"
import "./sectionHeader.css"
export default function SectionHeader() {
  return (
    <div
      className=" w-full hi bg-no-repeat bg-cover lg:p-20 p-12 lg:mb-20 mb-12 justify-start"
      style={{ backgroundImage: `url(${heroPattern})` }}
    >
      <div className="left-0">
        <h1 className="lg:text-left text-center text-7xl text-white font-bold ">
          Explore
        </h1>
        <h1 className=" lg:text-left text-center text-5xl text-white lg:mt-6 mt-3">
          Our Amazing Resort
        </h1>
        <h1 className=" lg:text-left text-center text-xl text-white mt-3">
          Find great places to stay,eat & visit with luxilarious vibe.
        </h1>

        <h1 className=" lg:text-left text-center">
          <motion.button
            className="border-2 border-blue-900 rounded-lg text-white p-2 shadow-lg mt-6 hover:bg-blue-700 font-bold hover:border-blue-700 justify-self-start justify-items-start"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Descover Now
          </motion.button>
        </h1>
      </div>
    </div>
  )
}
