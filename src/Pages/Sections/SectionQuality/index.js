import React from "react"
import { SectionQualityData } from "./data"
import { GiReceiveMoney, GiSelfLove } from "react-icons/gi"
import { FaHotel } from "react-icons/fa"
import { HiOutlineSupport } from "react-icons/hi"
import SectionHeading from "../../Common/SectionHeading"

export default function SectionQuality() {
  return (
    <div className="grid justify-items-center ">
      <SectionHeading paragraph=" A New Vision of Luxury Hotel" />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mx-auto w-full h-80 mb-12 justify-items-center ">
        {SectionQualityData.map((item, index) => {
          let IconComponent

          switch (item.icon) {
            case "money":
              IconComponent = GiReceiveMoney
              break
            case "love":
              IconComponent = GiSelfLove
              break
            case "hotel":
              IconComponent = FaHotel
              break
            case "support":
              IconComponent = HiOutlineSupport
              break
            default:
              IconComponent = null
          }

          return (
            <div
              key={index}
              className={
                item.style === "Top"
                  ? "w-56 h-64 p-10 shadow-2xl bg-yellow-500"
                  : "w-56 mt-24 h-64 p-10 shadow-2xl bg-blue-800"
              }
            >
              <h1 className="text-center text-white font-bold text-5xl pl-12 pt-4">
                {IconComponent && <IconComponent />}
              </h1>
              <h1 className="text-center text-white text-3xl pt-9">
                {item.text}
              </h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}
